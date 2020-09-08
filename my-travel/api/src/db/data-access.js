const context = require( '../server/server-context' );

class DataAccess {

    constructor ( schemaName ) {

        this.schemaName = schemaName;
        this.db = context.getDBConnection();

    }

}


module.exports = DataAccess;