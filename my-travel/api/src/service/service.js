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

    async find () {

        const collection = await this.dataSet.find();
        return collection;

    }

    async findByKey ( key ) {

        const collection = await this.dataSet.findByKey( key );

        return collection;

    }

    async update () {

        console.log( 'update' );

    }

    async remove () {

        console.log( 'remove' );

    }

}

module.exports = Service;