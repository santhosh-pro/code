const CVSBinding = require( './csv-binding' );

function getDbConnection( dbConfig ) {

    const { uri } = dbConfig; 

    const conn = new CVSBinding( uri );


    const connectionError = err => {
        console.log(`An error has occurred when trying to start the MongoDB Database for URI:\n${uri}`, err);
    }

    const connectionOpen = () => {
        console.log(`CSVDB connection is open to URI: ${uri}`); // quando o mongodb cair
    }

    const dbDisconnected = () => {
        console.log(`CSVDB connection to URI: ${uri}`);
    }

    const dbConnected = () => {
        console.log(`CSVDB connection open to URI: ${uri}`);
    }
  
    process.on( 'SIGINT', () => {

        conn.close(() => {
            console.log('CSVDB default connection disconnected.');
            process.exit(0);
        });

    });

    return conn;

}

module.exports = getDbConnection;