const express = require('express');
const consign = require('consign');

const app = express();

app.use( express.json() );

consign({ cwd: 'src', verbose: false })
    .include( 'routes' )
    .into( app );

const port = 9001;

app.listen( port, () => {
    console.log( `Server MyTravel running in the port ${port}...` );
});                