const DataSet = require( '../db/dataset' );
const context = require( '../server/server-context' );

class Service {

    constructor( schemaName ) {

        this.dataSet = new DataSet( schemaName );
        this.context = context;

    }

    async create ( data ) {

        await this.dataSet.create( data );

    }

    async update( key, data ) {

        return await this.dataSet.update( key, data );

    }

    async find () {

        const collection = await this.dataSet.find();
        return collection;

    }

    async findByKey ( key ) {

        const collection = await this.dataSet.findByKey( key );

        return collection;

    }

    async remove ( key ) {

        const data = await this.dataSet.remove( key );

        return data;

    }

}

module.exports = Service;