const context = require( '../server/server-context' );

class DataAccess {

    constructor ( schemaName ) {

        this.schemaName = schemaName;
        this.db = context.getDBConnection();

    }

    async find() {

        return await this.db.find( this.schemaName );

    }

    async findByKey( key ) {

        return await this.db.findByKey( this.schemaName, key );

    }

    async create( data ) {

        return this.db.create( this.schemaName, data );

    }

    async remove( key ) {

        return await this.db.remove( this.schemaName, key );

    }

}


module.exports = DataAccess;