const readline = require( 'readline' );
const modelProvider = require( '../infra/model-provider' );
const fs = require( 'fs' );
const { rejects } = require('assert');

class CVSBinding {
    
    constructor ( uri ) {

        this._readable = fs.createReadStream( uri );
        this._uri = uri;

    }

    static get readable() {

        return this.hasOwnProperty( '_readable' ) ? this._readable : void 0;

    } 

    async close() {

        await fs.closeSync();

    }

    async create( schemaName, data ) {

        if ( data ) {

            const model = modelProvider.getModel( schemaName );
            const props = Object.keys( model );

            let prop = props[ 0 ];
            let value = data[ prop ];

            let register = value;

            for ( let i = 1; i <= props.length -1; i++ ) {

                prop = props[ i ];

                value = data[ prop ]

                register = `${register},${value}`;

            }

            fs.writeFileSync( this._uri, '\n' + register, { encoding:'utf8', flag: 'a+' } );

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

        //*
        const data = fs.readFileSync( this._uri, { encoding:'utf8', flag: 'r' } );
        const lines = data.split( '\n' );

        for ( let i = 0; i <= lines.length -1; i++ ) {

            const line = lines[ i ];
            const columnsData = line.split( ',' );

            let register = {};

            for ( let i = 0; i <= columnsHeader.length -1; i++ ) {

                const propName = columnsHeader[ i ];
                const columnData = columnsData[ i ];

                register[ propName ] = columnData;

            }

            collection.push( register );

        }

        return collection;
        //*/

    }

}

module.exports = CVSBinding;


//https://node.readthedocs.io/en/latest/api/readline/