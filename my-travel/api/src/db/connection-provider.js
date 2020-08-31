const context = require( '../server/server-context' );

function getDBConnection () {

    var db = context.get( 'dbConn' );
    return db;

} 

module.exports = {

    getDBConnection,

};