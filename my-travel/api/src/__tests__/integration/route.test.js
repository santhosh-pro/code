const request = require( 'supertest' );
const app = require( '../../app' );

describe( 'Route', () => {

    process.env.Test = true;

    describe( 'CreateRoute', () => {

        it( 'Create new route', async () => {

            const response = await request( app )
                .post( '/travelroute' )
                .send({
                    origin: 'GRU',
                    destiny: 'GYN',
                    value: 130
                })

            expect( response.status ).toBe( 200 );

        });

    });

    describe( 'UpdateRoute', () => {
    
        it( 'Create new route', async () => {
    
            const response = await request( app )
                .put( '/travelroute/GRUGYN130' )
                .send({
                    origin: 'GRU',
                    destiny: 'GYN',
                    value: 113
                })
    
            expect( response.status ).toBe( 200 );
    
        });
    
    });

    describe( 'RemoveRoute', () => {
    
        it( 'Delete Route', async () => {
    
            const response = await request( app )
                .delete( '/travelroute/GRUGYN113' )
    
            expect( response.status ).toBe( 200 );
    
        });
    
    });

});