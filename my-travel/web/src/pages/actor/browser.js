import React from 'react';
import Browser from '../../components/Browser';
import { SpecViewActorBrowser } from './specview';

function ActorBrowser( props ) {

    const handleClick = ( e, item ) => {

        alert('action customized');

    }

    const customActions = [ 
        { handler: handleClick, className : "", iconName: "list" }
    ];

   return (
        <form>
            <div id="actor-browser" className="container" >
                <Browser
                    urn='travelRoute' 
                    title='Rotas' 
                    keyProps={['origin', 'destination', 'value']} 
                    specView={SpecViewActorBrowser}
                />
            </div>
        </form>
    );    

}

export default ActorBrowser;