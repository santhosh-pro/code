module.exports = {

    getModel( schemaName ) {

        try {

            return require( `${process.cwd()}/src/schema/${schemaName}.schema` );

        } catch ( err ) {

            throw err;

        }

    }

}