const Service = require( './service' );

class TravelRouteService extends Service {

    constructor () {
        
        super( 'input-routes' );

    }

    async bestRoute( route ) {

        const locations = route.split( '-' );
        const origin = locations[ 0 ];
        const destination = locations[ 1 ];

        const routes = await this.find();

        let rts = [];
        
        const rt = routes.find( route => {

            if ( route.origin === origin && route.destination === destination ) {
                rts.push( route );
            }

        })

        return rts;
    }

}

module.exports = TravelRouteService;