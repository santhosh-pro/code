const context = require( '../server/server-context' );

class DataAccess {

    constructor ( schemaName ) {

        this.schemaName = schemaName;
        this.db = context.getDBConnection();

    }

    async find() {

        return await this.db.find( this.schemaName );

    }

    async create( data ) {

        return this.db.create( this.schemaName, data );

    }

}


module.exports = DataAccess;