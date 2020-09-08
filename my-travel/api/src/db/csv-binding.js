const modelProvider = require( '../infra/model-provider' );
const fs = require( 'fs' );
const Type = require( '../infra/type' );

class CSVBinding {
    
    constructor( url ) {

        this.url = url;

    }

    async getContentFile () {

        try {

            let lines = [];

            if ( await fs.existsSync( this.url ) ) {
                        
                const data = await fs.readFileSync( this.url , { encoding:'utf8', flag: 'r' } );
                lines = data.split( '\n' );  

            }

            return lines;

        } catch ( err ) {

            throw err;

        }

    }

    async fileIsEmpty() {

       const lines = await this.getContentFile();
       return lines[ 0 ].length === 0;
            
    }

    getKeyFields( schemaName ) {

        let keys = [];
        let model = modelProvider.getModel( schemaName );
        const fields = Object.keys( model );

        for ( let i = 0; i <= fields.length-1; i++ ) {

            const fieldName = fields[ i ];
            let field = model[ fieldName ];
            field[ 'fieldName' ] = fieldName;
            
            if ( field.isKey ) {

                keys.push( field );

            }

        }

        return keys;

    }

    async validateField( model, fieldName, value ) {

        let message = '';
        let isValid = true;

        if ( model[ fieldName ].required ) {

            if ( !value || value.length === 0 ) {

                message = `Field ${fieldName} is required.`;
                isValid = false;

            }

        } 

        if ( isValid && value.length > model[ fieldName ].length ) {

            message = `Field ${fieldName} larger than supported.`;
            isValid = false;

        }

        return {
            isValid : isValid,
            message : message
        }

    }

    async dataExist( data, schemaName ) {

        const keyValue = this.getKeyValue( data, schemaName );
        return this.findByKey( schemaName, keyValue );

    }

    async create( schemaName, data ) {

        let validate = null;

        try {

            if ( ! await fs.existsSync( this.url ) )
                await fs.writeFileSync( this.url, '' );  

            if ( data ) {

                const dataExist = await this.dataExist( data, schemaName );

                if ( dataExist ) 
                    throw new ( 'Primary key violation.' );

                let model = modelProvider.getModel( schemaName );
                const fields = Object.keys( model );

                let field = fields[ 0 ];
                let value = data[ field ];

                validate = await this.validateField( model, field, value );

                if ( !validate.isValid )
                    throw new Error( validate.message );

                let register = value;

                for ( let i = 1; i <= fields.length -1; i++ ) {

                    field = fields[ i ];

                    value = data[ field ];

                    validate = await this.validateField( model, field, value );

                    if ( !validate.isValid )
                        throw new Error( validate.message );

                    register = `${register},${value}`;

                }

                if ( await this.fileIsEmpty() ) 
                    fs.writeFileSync( this.url, register, { encoding: 'utf8', flag : 'w' } );
                else    
                    fs.writeFileSync( this.url, '\n' + register, { encoding:'utf8', flag : 'a+' } );

            }

            return data;

        } catch ( err ) {

            throw err;

        }

    }

    async update( schemaName, keyValue, data ) {

        try {

            let collection = [];
            let dataUpdated = null;
            let index = -1;

            if ( ! await fs.existsSync( this.url ) )
                throw ( `Data repository ${schemaName} not found.` );

            collection = await this.find( schemaName );

            index = collection.findIndex( item => {

                let value = this.getKeyValue( data, schemaName );
                let kv = this.getKeyValue( item, schemaName )

                return kv === value;
        
            });

            if ( index >= 0 ) {

                throw new Error( 'Primary key violation.' );

            }

            index = collection.findIndex( item => {

                let value = this.getKeyValue( item, schemaName );
                return keyValue === value;
        
            });

            if ( index >= 0 ) {

                dataUpdated = collection[ index ];
                collection[ index ] = data;

                await fs.unlinkSync( this.url );

                for ( let i = 0; i <= collection.length-1; i++) {

                    const register = collection[ i ];
                    await this.create( schemaName, register );

                }

            } 

            return dataUpdated;

        } catch ( err ) {

            throw err;

        }

    }

    async find( schemaName ) {

        try {

            let collection = [];
            const model = modelProvider.getModel( schemaName );
            const fields = Object.keys( model );
            const lines = await this.getContentFile();

            for ( let i = 0; i <= lines.length -1; i++ ) {

                const line = lines[ i ];
                const columnsData = line.split( ',' );

                let register = {};

                for ( let i = 0; i <= fields.length -1; i++ ) {

                    const fieldName = fields[ i ];
                    const field = model[ fieldName ];
                    const columnData = columnsData[ i ];

                    if ( field.type === Type.Number ) {

                        if ( field.decimal > 0 )
                            register[ fieldName ] = parseFloat( columnData );
                        else
                            register[ fieldName ] = parseInt( columnData );

                    } else {

                        register[ fieldName ] = columnData;

                    }

                }

                collection.push( register );

            }

            if ( collection && collection[ 0 ].length === 0 )
                return [];
            else    
                return collection;

        } catch ( err ) {

            throw err;

        }

    }

    getKeyValue( item, schemaName ) {

        try {

            let keyValue = '';
            const keyFields = this.getKeyFields( schemaName );

            for ( let i = 0; i <= keyFields.length -1; i++ ) {

                const keyField = keyFields[ i ];

                keyValue = keyValue + `${item[ keyField.fieldName ]}`;

            }

            return keyValue;

        } catch ( err ) {

            throw err;

        }

    }

    async findByKey( schemaName, keyValue ) {

        try {

            const collection = await this.find( schemaName );
            return collection.find( item => {

                let value = this.getKeyValue( item, schemaName );
                return keyValue === value;
            
            });

        } catch ( err ) {

            throw err;

        }

    }

    async remove( schemaName, keyValue ) {

        try {

            let collection = [];
            let dataDeleted = null;

            if ( ! await fs.existsSync( this.url ) )
                throw ( `Data repository ${schemaName} not found.` );

            collection = await this.find( schemaName );

            let index = collection.findIndex( item => {

                let value = this.getKeyValue( item, schemaName );
                return keyValue === value;
        
            });

            if ( index >= 0 ) {

                dataDeleted = collection.splice( index, 1 );

                await fs.unlinkSync( this.url );

                for ( let i = 0; i <= collection.length-1; i++) {
    
                    const register = collection[ i ];
                    await this.create( schemaName, register );
    
                }
    
            } 

            return dataDeleted;

        } catch ( err ) {

            throw err;

        }

    }

}

module.exports = CSVBinding;