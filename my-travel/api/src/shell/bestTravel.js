const inquirer = require('inquirer');
const CSVBinding = require('../db/csv-binding');
const TravelRouteService = require( '../service/travel-route.service' );
const Graph = require('../dijkstra/graph');

const inputDataPath = process.argv[ 2 ];

const csvDB = new CSVBinding( inputDataPath );


( async () => {

    result = await inquirer.prompt( [{
        name: 'route',
        type: 'input',
        message: 'Please enter the route:',
        default: 'GRU-CDG',
        validate: ( input ) => {
            if ( input.split( '-' ).length !== 2) {
                return 'Invalid format. Use the "origin-destiny" syntax';
            } else {
                return true;
            }
        },
    }, ] );

    const routes = await csvDB.find( 'input-routes' );

    const graph = new Graph();
    graph.fillGraph( routes );

    const [ origin, destiny ] = result.route.split( '-' );
    const { bestRoute, price } = await graph.findBestPrice( origin, destiny );
    
    console.log( `best route: ${ bestRoute.join(' - ') } > ${ price }` );

})();