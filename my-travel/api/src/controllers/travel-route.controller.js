const TravelRouteService = require( '../service/travel-route.service' );

travelService = () => {
    return new TravelRouteService();
}

const TravelRouteController = {

    async create( req, res, next ) {

        try {

            const travelRoute = await travelService().create( req.body );
            res.status( 200 ).json( travelRoute );

        } catch ( error ) {

            next( error );          

        }

    },

    async find( req, res, next ) {

        try {

            const travelRoutes = await travelService().find();

            if ( travelRoutes && travelRoutes.length > 0 )
                res.status( 200 ).json( travelRoutes );
            else
                res.status( 204 ).json( travelRoutes );    

        } catch ( error ) {

            next( error );

        }

    },

    async findByKey( req, res, next ) {

        try {

            const { key } = req.params;
            
            const travelRoutes = await travelService().findByKey( key );

            if ( travelRoutes )
                res.status( 200 ).json( travelRoutes );
            else
                res.status( 404 ).json( travelRoutes );

        } catch ( error ) {

            next( error );

        }

    },

    async update( req, res, next ) {

        try {

            const { key } = req.params;
            const travelRoute = req.body;
            
            const travelRoutes = await travelService().update( key, travelRoute );
            res.status( 200 ).json( travelRoutes );

        } catch ( error ) {

            next( error );

        }

    },

    async remove( req, res, next ) {

        try {

            const { key } = req.params;

            const travelRoutes = await travelService().remove( key );
            res.status( 200 ).json( travelRoutes );    

        } catch ( error ) {

            next( error );

        }

        next();

    },

    async bestRoute( req, res, next ) {

        try {

            const { route } = req.params;
            const travelRoute = await travelService().bestRoute( route );
            res.status( 200 ).json( travelRoute );           

        } catch ( error ) {

            next( error );

        }

        next();

    }



}

module.exports = TravelRouteController;