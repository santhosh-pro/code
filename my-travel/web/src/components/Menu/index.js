import React from 'react';
import { withRouter } from 'react-router-dom';

function Menu( props ) {

    function pollHandleClick() {

        props.history.push( `/${'actor'}` );

    }

    return(

        <div className="main-menu" >
            <div className="main-menu-container" > 
                <span onClick={()=>pollHandleClick()} >
                    Enquete
                </span>
                <span>
                    Votação
                </span>
                <span>
                    Estatística
                </span>
            </div>
        </div>

    )

}

export default withRouter(Menu);
