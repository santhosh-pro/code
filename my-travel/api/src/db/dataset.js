const DataAccess = require( './data-access' );

class DataSet extends DataAccess {  
    
    constructor( schemaName ) {

        super( schemaName );

    }

    async find() {

        try {

            return await this.db.find( this.schemaName );

        } catch ( err ) {

            throw err;

        }

    }

    async findByKey( key ) {

        try {

            return await this.db.findByKey( this.schemaName, key );

        } catch ( err ) {

            throw err;

        }

    }

    async create( data ) {

        try {

            return this.db.create( this.schemaName, data );

        } catch ( err ) {

            throw err;

        }

    }

    async update( key, data ) {

        try {

            return this.db.update( this.schemaName, key, data );

        } catch ( err ) {

            throw err;

        }

    }

    async remove( key ) {

        try {

            return await this.db.remove( this.schemaName, key );

        } catch ( err ) {

            throw err;

        }

    }

}

module.exports = DataSet;