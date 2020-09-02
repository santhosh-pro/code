import React from 'react';
import { withRouter } from 'react-router-dom';

function Menu( props ) {

    function pollHandleClick() {

        props.history.push( `/${'travelRoute'}` );

    }

    return(

        <div className="main-menu" >
            <div className="main-menu-container" > 
                <span onClick={()=>pollHandleClick()} >
                    Rotas
                </span>
                <span>
                    Melhor viagem
                </span>
            </div>
        </div>

    )

}

export default withRouter(Menu);
