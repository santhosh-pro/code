import React from 'react';
//import { withRouter } from 'react-router-dom';
import Browser from '../../components/Browser';
import { SpecViewPollBrowser } from './specview';

function PollBrowser( props ) {

    const handleClick = ( e, item ) => {

        alert('action customized');

    }

    const customActions = [ 
        { handler: handleClick, className : "", iconName: "list" }
    ];

  
    /*
    return (
        <form>
            <div id="poll-browser" className="container" >
                <Browser
                    urn='poll' 
                    title='Enquete' 
                    keyProp={'poll_id'} 
                    specView={SpecViewPollBrowser}
                    //customActions={customActions}
                />
            </div>
        </form>
    );
    */

   return (
    <form>
        <div id="poll-browser" className="container" >
            <Browser
                urn='actor' 
                title='Ator' 
                keyProp={'id'} 
                specView={SpecViewPollBrowser}
                //customActions={customActions}
            />
        </div>
    </form>
);    

}

export default PollBrowser;// withRouter(PollBrowser);