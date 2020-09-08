const app = require( './app' );

const port = 9001;

app.listen( port, () => {
    console.log( `Server MyTravel running in the port ${port}...` );
}); 

module.exports = app;