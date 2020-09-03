const travelRouteController = require( '../controllers/travel-route.controller' );
const urn = '/travelroute';

const TravelRoute = app => {

    app.route( urn )
        .post( travelRouteController.create )
        .get( travelRouteController.find );
        

    app.route( `${urn}/:key` )
        .get( travelRouteController.findByKey )
        .delete( travelRouteController.remove );      

    app.route( `${urn}/bestRoute/:route` )
        .get( travelRouteController.bestRoute );

}

module.exports = TravelRoute;

    