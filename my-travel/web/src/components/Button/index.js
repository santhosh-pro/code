import React from 'react';
import { GetImage16 } from '../../image/image16';
import { GetImage24 } from '../../image/image24';


export default function Button ( props ) {


    return(
        <button>

        </button>
    );


}

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
        /*
        throw new Error( 'O manipulador de eventos onClick de botão, capturou automaticamente ' +
                            'um erro no sistema que não foi devidamente tratado pelo desenvolvedor. ' +
                            'Se você é o desenvolvedor implemente o tratamento para este erro. ' + 
                            `Se você não é o desenvolvedor, entre em contato com o administrador do sistema.
Erro: ${err.stack}` ); // Está neste posicionamento para ficar com alinhamento correto na tela*/

        throw new Error( err.stack );

    } finally {

        event.target.disabled = false;

    }
}