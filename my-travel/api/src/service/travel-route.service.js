const Service = require( './service' );
const Graph = require( '../dijkstra/graph')

class TravelRouteService extends Service {

    constructor () {
        
        super( 'input-routes' );

    }

    async bestRoute( route ) {

        const locations = route.split( '-' );
        const origin = locations[ 0 ];
        const destination = locations[ 1 ];

        const routes = await this.find();
        
        routes.sort( ( item1, item2 ) => { 
            var x = `${item1.origin.toLowerCase()}-${item1.destination.toLowerCase()}`;
            var y = `${item2.origin.toLowerCase()}-${item2.destination.toLowerCase()}`;
            return x < y ? -1 : x > y ? 1 : 0;
        }); 

        const routeExist = routes.find( item => {

            return ( route === `${item.origin.toUpperCase()}-${item.destination.toUpperCase()}` );                
           
        });

        if ( !routeExist ) {
            
            return { 
                bestRoute  : [],
                price : 0
            }
            
        }

        const map = new Graph();

        for ( let i = 0; i < routes.length; i++ ) {

            const route = routes[ i ];

            const origin = route.origin;
            const desttination = route.destination;
           
            map.addStartingPoints( origin );
            map.addStartingPoints( desttination );

        }

        

        for ( let i = 0; i < routes.length; i++ ) {

            const route = routes[ i ];

            const origin = route.origin;
            const desttination = route.destination;
            const value = route.value;

            map.addDestinationPoint( origin, desttination, parseInt( value ) );

        }

        return map.findBestPrice( origin, destination );



        /*
        const rt = routes.find( route => {

            if ( route.origin === origin && route.destination === destination ) {
                rts.push( route );
            }

        })*/

        
    }

}

module.exports = TravelRouteService;