const CSVBinding = require( './csv-binding' );

function getDbConnection( dbConfig ) {

    const { uri } = dbConfig; 

    const conn = new CSVBinding( uri );

    return conn;

}

module.exports = getDbConnection;