const request = require( 'supertest' );
const app = require( '../../app' );

describe( 'BestRoute', () => {

    process.env.Test = true;

    it( 'Best Route', async () => {

        const response = await request( app )
            .get( '/travelroute/bestRoute/GRU-CDG' )

        expect( response.body ).toMatchObject( {"bestRoute": ["GRU", "BRC", "SCL", "ORL", "CDG"], "price": 40} );

    });

});