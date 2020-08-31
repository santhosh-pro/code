module.exports = {

    getModel( schemaName ) {
        return require( `${process.cwd()}/src/schema/${schemaName}.schema` );
    }

}