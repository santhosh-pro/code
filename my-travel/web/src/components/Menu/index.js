import React from 'react';
import { withRouter } from 'react-router-dom';

function Menu( props ) {

    function travelRouteClick() {

        props.history.push( `/${'travelRoute'}` );

    }

    const bestTravelClick = () => {

        props.history.push( `/${'bestTravel'}` );

    }
   

    return(

        <div className="main-menu" >
            <div className="main-menu-container" > 
                <span onClick={()=>travelRouteClick()} >
                    Rotas
                </span>
                <span onClick={()=>bestTravelClick()}>
                    Viagem
                </span>
            </div>
        </div>

    )

}

export default withRouter(Menu);
