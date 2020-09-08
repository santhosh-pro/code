const PriorityQueue = require('./priority-queue');

class Graph {

    constructor() {

        this.points = [];
        this.listAdjacentPoints = {};
        
    }

    addStartingPoints( point ) {

        this.points.push( point );
        this.listAdjacentPoints[ point ] = [];

    }

    addDestinationPoint( point1, point2, amount ) {

        this.listAdjacentPoints[ point1 ].push({

            point: point2,
            amount: amount

        });

        this.listAdjacentPoints[point2].push({

            point: point1,
            amount: amount

        });

    }

    async fillGraph( points ) {

        try {

            for ( let i = 0; i < points.length; i++ ) {

                const point = points[ i ];

                const origin = point.origin;
                const destiny = point.destination;
            
                this.addStartingPoints( origin );
                this.addStartingPoints( destiny );

            }

            for ( let i = 0; i < points.length; i++ ) {

                const point = points[ i ];

                const origin = point.origin;
                const destiny = point.destination;
                const value = point.value;

                this.addDestinationPoint( origin, destiny, parseInt( value ) );

            }

        } catch ( err ) {

            throw err;

        }

    }

    async findBestPrice( startNode, endNode ) {

        const times = {};
        const backtrace = {};
        const pq = new PriorityQueue();
        let path = '';
        let price = 0;

        times[ startNode ] = 0;

        this.points.forEach( ( point ) => {

            if ( point !== startNode ) {

                times[ point ] = Infinity;

            }

        });

        pq.enqueue( [ startNode, 0 ] );
        
        while ( !pq.isEmpty() ) {

            const shortestStep = pq.dequeue();
            const currentNode = shortestStep[ 0 ];

            if ( this.listAdjacentPoints[ currentNode ] ) {

                this.listAdjacentPoints[ currentNode ].forEach( ( neighbor ) => {

                    const time = times[ currentNode ] + neighbor.amount;

                    if ( time < times[ neighbor.point ] ) {
                    
                        times[ neighbor.point ] = time;
                        backtrace[ neighbor.point ] = currentNode;
                        pq.enqueue( [ neighbor.point, time ] );

                    }

                });

            }

        }

        path = [];
        let lastStep = endNode;

        let index = 0;
        
        while ( lastStep !== startNode && index <= this.points.length -1 ) {

            const node = backtrace[ lastStep ];

            if ( node ) {

                path.unshift( backtrace[ lastStep ] );
                lastStep = backtrace[ lastStep ];

            }

            index += 1;

        } 

        if ( path.length > 0 )
            path.push( endNode );

        if ( times[ endNode ] )
            price = times[ endNode ];
        
        return {
            bestRoute: path,
            price: price
        }

    }
}

module.exports = Graph;