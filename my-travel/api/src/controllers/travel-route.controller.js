const TravelRouteService = require( '../service/travel-route.service' );

travelService = () => {
    return new TravelRouteService();
}

const TravelRouteController = {

    async create( req, res, next ) {

        await travelService().create();

    },

    async find( req, res, next ) {

        await travelService().find();

    },

    async update( req, res, next ) {

        travelService().update();

    },

    async remove( req, res, next ) {

        travelService().remove();

    }

}

module.exports = TravelRouteController;