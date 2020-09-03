import React, { useState } from 'react';

import './styles.css';
import { useEffect } from 'react';

export default function Input( props ) {

    const { spec } = props;

    const [ value, setValue ] = useState(undefined);

    useEffect ( () => {

        setValue( props.value );

    }, [ props.value ])

    const { onChange, onBlur } = props.events;
    let type = 'text';

    if ( spec.dataType === 'number' )
        type = 'number';

    const handleChange = event => {

        if ( type === 'text')
            event.target.value = event.target.value.toUpperCase();

        setValue( event.target.value );

        if ( onChange )
            onChange( event );

    }

    const handleBlur = async event => {

        if ( onBlur ) {
            await onBlur( event );
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
                onBlur={handleBlur}
                maxLength={spec.maxLength}
                minLength={spec.minLength}
                type={type}
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
