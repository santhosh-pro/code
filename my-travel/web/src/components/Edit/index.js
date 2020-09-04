import React, { useEffect, useState, useCallback } from 'react';
import { withRouter } from 'react-router-dom';

import { get, post, put } from '../../service/api';
import { SpecViewType } from '../../infra/specview/SpecView';
import ObjecView from '../../components/ObjectView';
import ObjectUtils from '../../utils/ObjectUtils';
import EntityInstance from '../../infra/entity/EntityInstance';

import { ButtonFactory } from '../Button';
import { useRef } from 'react';

function Edit( props ) {

    const [ dataObject, setDataObject ] = useState(undefined);
    const { urn, layouts } = props; 
    const { key } = props.match.params; 
    
    const [ eventRef, setEventRef ] = useState(undefined);
 
    useEffect( () => {

        const fetch = async () => {

            let response = null;

            if ( key ) {

                response = await get( `${urn}/${key}`);

                if ( response ) {

                    setDataObject( response.data );

                }

            } else {

                setDataObject( EntityInstance.newInstance( urn ) );

            }

        }

        fetch();

    }, [ urn, key ] );

    const handleChange = ( event ) => {

        event.persist();
        setEventRef( event );
        updateState( event, dataObject );

    }

    
    const [ afterBlur, setAfterBlur ] = useState(false);
    useEffect( () => {

        async function onDidBlur() {
            
            const prop = getCurrentSVProp( eventRef );
            
            if ( prop && prop.onAfterBlur ) {

                await prop.onAfterBlur( eventRef, dataObject );
            }

            setAfterBlur( false );

        }

        onDidBlur();

    }, [ afterBlur ]);
   

    const handleBlur = async ( event ) => {

        event.persist();

        if ( props.onBlur ) {
            props.onBlur( event, dataObject );
        }

        //const svProp = getCurrentSVProp( event );

        //if ( svProp && svProp.onAfterBlur )
        //    await svProp.onAfterBlur( event, dataObject );

        setAfterBlur( true );

    
    }

    const events = {
        onChange : handleChange,
        onBlur : handleBlur
    }

    const getCurrentSVProp = useCallback( ( e ) => {

        let prop = null; 
        
        if ( e && layouts ) {

            for ( let i = 0; i <= layouts.length-1; i++ ) {
                
                const lay = layouts[ i ];

                const spec = lay.specDTV;

                const svOProps = spec.svOProps;

                for ( let j = 0; j <= svOProps.length-1; j++ ) {
                   
                    prop = svOProps[ j ];

                    if ( prop.path === e.target.id ) {

                        return prop;

                    }

                }
                
            }

        }

        return prop;        

    }, [ props ] );

    const mountView = () => {

        if ( !dataObject ) return

        let views = [];

        for ( let i = 0; i < layouts.length; i++ ) {

            const specLayout = layouts[ i ];

            if ( specLayout.specDTV ) {

                const specViewType = specLayout.specDTV.specViewType;

                switch ( specViewType ) {

                    case SpecViewType.OBJECT :

                        views.push( 
                            <ObjecView 
                                key={i} 
                                dataObject={dataObject} 
                                specViewLayout={specLayout} 
                                events={events}
                            /> 
                        );
                        
                        break;
                
                    default:
                        break;
                }


            }

        }

        return views;

    }

    const views = mountView();

    /**
     * Updates the state of the object being used in the component.
     * @param {*} e - HTML DOM Events
     * @param {*} currentObject - Current object that has changed
     */

    const updateState = ( e, currentObject ) => {

        try {

            const value = normalizeValue( e.target );

            let newDataObject = Object.assign( {}, currentObject );

            ObjectUtils.setPropertyValue( newDataObject, e.target.id, value );

            setDataObject( newDataObject );

        } catch ( err ) {

            throw err;

        }

    }

    const handleClickBack = event => {

        props.history.goBack();

    }

    const handleClickSave = async ( event ) => {

        try {

            alert( key );

            if ( key ) {

                await put( urn, dataObject );

            } else {

                await post( urn, dataObject );
            }

        } catch ( err ) {

            throw err;

        }
    
    }

    return (
        <div className="edit-object">        
            <div className="common-header">
                <label>
                    {props.title}
                </label>
            </div>
            <div className="toolbar-container">
                <div className="toolbar-buttons">
                {
                    createBtnAction( handleClickBack, '', 'arrow-back', null )
                }               
                {
                    createBtnAction( handleClickSave, '', 'save', null )
                }
                </div>
            </div>
            <div className="edit">
                { views }
            </div>
        </div>
    )
    

} 

export default withRouter( Edit );

const createBtnAction = ( handler, className, iconName, param ) => {

    if ( handler )
        return ButtonFactory( 'normal', className, () => handler( handler, param ), iconName );
    else
        return undefined;

}

const normalizeValue = ( field ) => {

    var value = null;
   
    switch ( field.type ) {

        case 'number':

            value = field.value;

            if ( Number.isInteger( value ) ) {

                value = parseInt( value, 0 );

            } else {

                value = parseFloat( value );

            }

            break;

        case 'checkbox':
            value = field.checked;
            break;
        default:
            value = field.value;
            break;

    }

    return value;

}