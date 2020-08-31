const DataAccess = require( './data-access' );

class DataSet extends DataAccess {  
    
    constructor( schemaName ) {

        super( schemaName );

    }

}

module.exports = DataSet;