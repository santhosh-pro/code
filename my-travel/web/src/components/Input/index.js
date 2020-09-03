import React from 'react';

import './styles.css';

export default function Input( props ) {

    const { spec, value } = props;
    const { onChange } = props;
    let type = 'text';

    if ( spec.dataType === 'number' )
        type = 'number';

    const handleChange = event => {

        if ( onChange )
            onChange( event );

    }

    const onlyNumber = (e) => {
        var charCode = e.charCode ? e.charCode : e.keyCode;
        // charCode 8 = backspace   
        // charCode 9 = tab
        if (charCode != 8 && charCode != 9) {
            // charCode 48 equivale a 0   
            // charCode 57 equivale a 9
            if (charCode < 48 || charCode > 57) {
                return false;
            }
        }
    }

    return (
        <div className="input-content" >
            <label htmlFor={spec.path}>
                {spec.label}
            </label>
            <input
                id={spec.path}                
                value={value}
                auto-complete="off"
                onChange={handleChange}
                maxLength={spec.maxLength}
                minLength={spec.minLength}
                type={type}
                onKeyPress="return somenteNumeros(event)"
            />
        </div>
    )

}


/*
import './styles.scss';

export default function Input( props ) {

    const { spec, data } = props;
    let type = 'text';

    if ( spec.dataType === 'number' )
        type = 'number';

    /*
    const handleFocus = e => {

        if ( spec && spec.onFocus )
            spec.onFocus( e ); 

    }
    
    const handleBlur = e => {

        if ( spec && spec.onBlur )
            spec.onBlur( e );

    }         

    const handleChange = e => {

        if ( spec && spec.onChange )
            spec.onChange( e );
            
    }

    const handleInput = e => {

        if ( spec && spec.onInput )
            spec.onInput( e );
                    
    }    

    return (

       <div className="input-content">
            <label>{spec.label}</label>
            <input 
                className="input"               
                name={spec.name}                
                id={`${spec.path}.${spec.name}`}
                title={spec.label}
                type={type}
                path={spec.path}
                required={spec.isRequired}
                minLength={spec.minLength}
                maxLength={spec.maxLength} 
                datatype={spec.dataType}
                defaultValue={data[spec.name]} 
                autoComplete="off"
                spec={spec}
            /> 
        </div> 

    );

}
*/
