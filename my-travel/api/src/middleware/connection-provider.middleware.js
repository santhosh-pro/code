const getDbConnection = require('../db/dbconnection');
const context = require( '../server/server-context' );

module.exports = async ( req, res, next ) => {

    try {

        const dbCfg = {
            uri : 'src/db/input-routes.csv' 
        }

        const conn =  await getDbConnection( dbCfg );

        context.set( 'dbConn', conn );

        req.idContext = context.getId();
        req.connection = conn;  

    } catch (error) {

        next(error);      

    } 
    
    next();

    res.on( 'finish', () => { 

        const conn = context.get( 'dbConn' );
        
        if ( conn && conn.readyState === 1 ) {
            conn.close(() => {
                console.log( 'Request finished. Database connection has been closed.');
            });
        }

    });    

}