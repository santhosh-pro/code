const express = require('express');
const cors = require( 'cors' );
const consign = require('consign');
const dbConnectionProviderMiddleware = require('../src/middleware/connection-provider.middleware');
const context = require( '../src/server/server-context' );

context.createNamespace();
const app = express();

app.use( context.initContext() );

app.use( cors() );
app.use( express.json() );
app.use( dbConnectionProviderMiddleware );

consign({ cwd: 'src', verbose: false })
    .include( 'routes' )
    .into( app );

/*
const readline = require( 'readline' );
const fs = require( 'fs' );
const readable = fs.createReadStream( 'src/db/input-routes.csv' );

const rl = readline.createInterface({
    input: readable,
});

rl.on( 'line', (line) => {
    console.log( line );
});
*/

const port = 9001;

app.listen( port, () => {
    console.log( `Server MyTravel running in the port ${port}...` );
});   


/*
    criar model com especificação de tipo
    ao gravar no csv forçar upper case

*/