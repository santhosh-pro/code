//const uuidV4 = require('uuid/v4');
const cls = require( 'cls-hooked' );
const { uuid } = require( '../utils/uuid.utils' );

const getContext = () => {

    return cls.getNamespace( 'REQUEST_CONTEXT' );
}

const createNamespace = () => {

    cls.createNamespace( 'REQUEST_CONTEXT' );

}

const initContext = () => {


    return function clsifyMiddleware( req, res, next ) {

        var context = getContext();       
        context.run( () => {

            context.bindEmitter( req );
            context.bindEmitter( res );

            const contextId = uuid();
            context.set( 'contextId', contextId  );

            next();

        }); 

    };

}

module.exports = {

    initContext,
    createNamespace,

    getId () {

        const context = getContext();
        return context.get( 'contextId' );

    },

    getDBConnection () {

        const context = getContext();
        return context.get( 'dbConn' );
        
    },

    set ( key, item ) {

        const context = getContext();
        context.set( key, item );        

    },

    get ( key ) {

        const context = getContext();
        return context.get( key );

    },

    getNS() {

        return cls.getNamespace( 'REQUEST_CONTEXT' );

    },

};