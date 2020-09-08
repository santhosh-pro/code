const Service = require( './service' );
const Graph = require( '../dijkstra/graph')

class TravelRouteService extends Service {

    constructor () {
        
        super( 'input-routes' );

    }

    async create( route ) {

        try {

            if ( route ) {
        
                route.origin = route.origin.toUpperCase(); 
                route.destination = route.destination.toUpperCase();  
    
                return await this.dataSet.create( route );
           
            } else {

                throw new Error( "Route cannot be empty." );

            }
    
        } catch ( err ) {

            throw err

        }

    }

    async bestRoute( route ) {

        try {
            
            const locations = route.split( '-' );
            const origin = locations[ 0 ];
            const destination = locations[ 1 ];
            const routes = await this.find();

            const map = new Graph();
            await map.fillGraph( routes ); 

            return await map.findBestPrice( origin, destination );
            
        } catch( err ) {

            throw err;

        }
        
    }

}

module.exports = TravelRouteService;