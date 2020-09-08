const context = require( '../server/server-context' );

function getDBConnection () {

    var db = context.get( 'csvConn' );
    return db;

} 

module.exports = {

    getDBConnection,

};