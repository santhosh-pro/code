const getDbConnection = require('../db/dbconnection');
const context = require( '../server/server-context' );
const fs = require( 'fs' );

module.exports = async ( req, res, next ) => {

    try {

        let inputDataPath = '';

        if ( process.env.Test ) {

            inputDataPath = 'src/__tests__/input-routes.csv';

        } else {

            inputDataPath = process.argv[ 2 ];

        }

        if ( ! await fs.existsSync( inputDataPath ) ) {
            throw new Error( 'The file entered when running the application ' + 
                              'was not found. Start the application again with the '+
                              'file path. Example: npm start file_path/input-routes.csv' );
        }

        const dbCfg = {
            uri : inputDataPath //'src/db/input-routes.csv' 
        }

        const conn =  await getDbConnection( dbCfg );
        context.set( 'csvConn', conn );

        req.idContext = context.getId();
        req.connection = conn;  

    } catch (error) {

        next(error);      

    } 
    
    next();

    res.on( 'finish', () => { 

        const conn = context.get( 'csvConn' );
        
        if ( conn && conn.readyState === 1 ) {
            conn.close(() => {
                console.log( 'Request finished. Database connection has been closed.');
            });
        }

    });    

}