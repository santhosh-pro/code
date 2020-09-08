import React from 'react';
import { GetImage16 } from '../../image/image16';
import { GetImage24 } from '../../image/image24';

export function ButtonFactory ( sizeType, className, onClick, iconName, title, buttonType = "button" ) {

    let element = null;
    let elementKey = Math.floor( Math.random() * 5000 );
    let icon = null;

    if ( sizeType === 'small' ) {

        icon = GetImage16(iconName); 

    } else {

        icon = GetImage24(iconName); 

    }

    if ( buttonType === 'submit' ) {

        element = ( 
        
                <button 
                    id={className}                         
                    type={buttonType}
                    title={title}
                    key={elementKey}
                >                        
                    <img src={icon} alt="" />                        
                </button>    
                    
        );

    } else { 
   
        element = ( 
            <button 
                id={className} 
                type="button" 
                onClick={( event ) => executeHandle( onClick, event )}
                title={title}
                key={elementKey}
            >
                <img src={icon} alt=""/>
            </button>
        );  


    }
    

    return element;

}

async function executeHandle( handle, event ) {

    event.persist();
    event.target.disabled = true;
    
    try {

        await handle(event);
        
    } catch ( err ) {        

        throw new Error( err.stack );

    } finally {

        event.target.disabled = false;

    }
}