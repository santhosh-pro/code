const readline = require( 'readline' );
const modelProvider = require( '../infra/model-provider' );
const fs = require( 'fs' );
const Type = require( '../infra/type' );

class CVSBinding {
    
    constructor ( uri ) {

        this._uri = uri;

        if ( fs.existsSync( uri ) )
            this._readable = fs.createReadStream( uri );

    }

    static get readable() {

        return this.hasOwnProperty( '_readable' ) ? this._readable : void 0;

    } 

    async close() {

        await fs.closeSync();

    }

    async fileExists () {

        return await fs.existsSync( this._uri );

    }

    async getContentFile () {

        let lines = [];

        if ( this.fileExists() ) {

            const data = await fs.readFileSync( this._uri, { encoding:'utf8', flag: 'r' } );
            lines = data.split( '\n' );  

        }

        return lines;
    }

    async fileIsEmpty() {

       const lines = await this.getContentFile();
       return lines[ 0 ].length === 0;
            
    }

    async create( schemaName, data ) {

        if ( data ) {

            const model = modelProvider.getModel( schemaName );
            const props = Object.keys( model );

            let prop = props[ 0 ];
            let value = data[ prop  ];

            let register = value;

            for ( let i = 1; i <= props.length -1; i++ ) {

                prop = props[ i ];

                value = data[ prop ]

                register = `${register},${value}`;

            }

            if ( await this.fileIsEmpty() ) 
                fs.writeFileSync( this._uri, register, { encoding:'utf8', flag : 'w' } );
            else    
                fs.writeFileSync( this._uri, '\n' + register, { encoding:'utf8', flag : 'a+' } );

        }

        return data;

    }

    async find( schemaName ) {
        
        let model = modelProvider.getModel( schemaName );

        const columnsHeader = Object.keys( model );

        const count = columnsHeader.length;
        let collection = [];

        /* Processamento mais lento
        const rl = readline.createInterface({
            input: this._readable,
            output: process.stdout
        });

        const promisse = new Promise( ( resolve, reject ) => {

            try {

                rl.on( 'line',  ( line ) => {

                    if ( line ) {
        
                        const row = line.split( ',' );
        
                        let data = {};
        
                        for ( let i = 0; i <= count -1; i++ ) {
        
                            const propName = columnsHeader[ i ];
                            data[ propName ] = row[ i ]
        
                        }
        
                        collection.push( data );
                        resolve( collection );
        
                    }
        
                });

                rl.close;

            } catch ( err ) {

                reject( err );

            }

        });

        return promisse;
        //*/

        const data = fs.readFileSync( this._uri, { encoding:'utf8', flag: 'r' } );
        const lines = data.split( '\n' );

        for ( let i = 0; i <= lines.length -1; i++ ) {

            const line = lines[ i ];
            const columnsData = line.split( ',' );

            let register = {};

            for ( let i = 0; i <= columnsHeader.length -1; i++ ) {

                const propName = columnsHeader[ i ];
                const prop = model[ propName ];
                const columnData = columnsData[ i ];

                if ( prop.type === Type.Number ) {

                    if ( prop.decimal > 0 )
                        register[ propName ] = parseFloat( columnData );
                    else
                        register[ propName ] = parseInt( columnData );

                } else {

                    register[ propName ] = columnData;

                }

            }

            collection.push( register );

        }

        if ( collection && collection[ 0 ].length === 0 )
            return collection;
        else    
            return [];

    }

    async findByKey( schemaName, key ) {

        const collection = await this.find( schemaName );

        if ( collection && collection.length > 1 ) {
        
            collection.sort( ( item1, item2 ) => { 
                var x = `${item1.origin.toUpperCase()}${item1.destination.toUpperCase()}${item1.value}`;
                var y = `${item2.origin.toUpperCase()}${item2.destination.toUpperCase()}${item2.value}`;
                return x < y ? -1 : x > y ? 1 : 0;
            }); 

         }

         console.log( await this.isEmpty() );

        return collection.find( item => {

            if ( key === `${item.origin.toUpperCase()}${item.destination.toUpperCase()}${item.value}` )
                return item;
           
        });

       

    }

    async remove( schemaName, key ) {
/*
        if ( fs.existsSync( this._uri ) ) {

            const collection = await this.find( schemaName );
            
            if ( collection && collection.length > 1 ) {
            
                collection.sort( ( item1, item2 ) => { 
                    var x = `${item1.origin.toUpperCase()}${item1.destination.toUpperCase()}${item1.value}`;
                    var y = `${item2.origin.toUpperCase()}${item2.destination.toUpperCase()}${item2.value}`;
                    return x < y ? -1 : x > y ? 1 : 0;
                }); 

            }

            const index = collection.findIndex( item => {

                return `${item.origin.toUpperCase()}${item.destination.toUpperCase()}${item.value}` === key;
        
            });

            if ( index >= 0 ) {

                collection.splice( index, 1 );

            }

            await fs.unlinkSync( this._uri );

        }    */
        
       // await fs.writeFileSync( this._uri );

      //  for ( let i = 0; i <= collection.length-1; i++) {

      //      const register = collection[ i ];

      //      this.create( schemaName, register );

       // }

       return {};

    }

}

module.exports = CVSBinding;


//https://node.readthedocs.io/en/latest/api/readline/