const inquirer = require('inquirer');
const CSVBinding = require('../db/csv-binding');
const Graph = require('../dijkstra/graph');
const inputDataPath = process.argv[ 2 ];
const csvDB = new CSVBinding( inputDataPath );

const executeShell = async () => {

    const input = await inquirer.prompt( [{
        name: 'route',
        type: 'input',
        message: 'Please enter the route(GRU-CDG):',
    }]);

    if ( input.route.length === 0 ) {

        console.log( 'WARNING: The route cannot be empty.' );
        executeShell();
        return;

    } else if ( !input || !input.route || input.route.split( '-' ).length !== 2 ) {

        console.log( 'WARNING: Invalid route. Use the "origin-destiny" format. Example: GRU-CDG.' );
        executeShell();
        return;

    }

    const routes = await csvDB.find( 'input-routes' );

    const map = new Graph();
    await map.fillGraph( routes );

    const [ origin, destiny ] = input.route.split( '-' );

    if ( !origin || origin.length === 0 ) {

        console.log( 'WARNING: The route origin is invalid. Use the "origin-destiny" format. Example: GRU-CDG.' );
        executeShell();
        return;

    }

    if ( !destiny || destiny.length === 0 ) {

        console.log( 'WARNING: The route destiny is invalid. Use the "origin-destiny" format. Example: GRU-CDG.' );
        executeShell();
        return;

    }

    const { bestRoute, price } = await map.findBestRoute( origin.toUpperCase(), destiny.toUpperCase() );
    
    console.log( `best route: ${ bestRoute.join(' - ') } > $${ price }` );
    executeShell();

}

executeShell();
