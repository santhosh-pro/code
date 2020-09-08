const express = require('express');
const cors = require( 'cors' );
const consign = require('consign');
const dbConnectionProviderMiddleware = require('./middleware/connection-provider.middleware');
const errorHandlerMiddleware = require( './middleware/error-handler.middleware' );

const context = require( './server/server-context' );

class AppController {

    constructor() {

        context.createNamespace();
        this.express = express();
        
        this.middlewares();
        this.routes();

    }

    middlewares() {

        this.express.use( context.initContext() );

        this.express.use( cors() );
        this.express.use( express.json() );
        this.express.use( dbConnectionProviderMiddleware );
        this.express.use( errorHandlerMiddleware );

    }

    routes() {

        consign({ cwd: 'src', verbose: false })
            .include( 'routes' )
            .into( this.express );

    }

}

module.exports = new AppController().express;
