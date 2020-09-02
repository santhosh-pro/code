import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { get } from '../../service/api';
import { SpecViewType } from '../../infra/specview/SpecView';
import ObjecView from '../../components/ObjectView';
import ObjectListView from '../ObjectListView';
import ObjectUtils from '../../utils/ObjectUtils';
import EntityInstance from '../../infra/entity/EntityInstance';

import { ButtonFactory } from '../Button';

function Edit( props ) {

    const { urn, layouts, layoutType } = props; 
    const { id } = props.match.params; 
    const [ data, setData ] = useState(undefined);
 
    useEffect( () => {

        const fetch = async () => {

            let response = null;

            if ( id ) {

                response = await get( `${urn}/${id}`);

                if ( response ) {

                    setData( response.data );

                }

            } else {

                setData( EntityInstance.newInstance( urn ) );

            }

        }

        fetch();

    }, [ urn, id ] );


    const mountView = () => {

        if ( !data ) return

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
                                dataObject={data} 
                                specViewLayout={specLayout} 
                            /> 
                        );
                        
                        break;

                    case SpecViewType.LIST :

                        const specDTV = specLayout.specDTV;

                        const dataList = ObjectUtils.getPropertyValue( data, specDTV.path );

                        views.push (
                            <ObjectListView
                                key={i}
                                dataList={dataList} 
                                specViewLayout={specLayout} 
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
            const path = e.target.id;

            let newDataObject = Object.assign( {}, currentObject );

            ObjectUtils.setPropertyValue( newDataObject, e.target.id, value );

            setData( newDataObject );

        } catch ( err ) {

            throw err;

        }

    }

    const handleChange = ( e ) => {

        e.persist();
        updateState( e, data );

    }


    /*    

    return (
        <div id="poll-edit" className="container" >
            <header className="edit-header" >
                <h3>Enquete</h3>
            </header>
            <div className="edit-tollbar">
                <div className="edit-buttons-container">
                    <button className="btn-close">
                        <img src={backIcon} alt="Voltar" />
                    </button>
                    <button className="btn-save">
                        <img src={saveIcon} alt="Salvar" />
                    </button>    
                </div>
            </div>
            <div className="edit-content">
                <div className="edit-layout-poll">
                    <div className="input-block">
                        <label htmlFor="poll_description" className="">Descricao</label>
                        <input type="text" id="poll_description"/>
                    </div>
                </div>
                <div className="edit-options-list">
                    <div className="tollbar-object-list">

                    </div>
                    <div className="edit-layout-options">
                        <div className="object-list">
                            <div>
                                <table className="">                     
                                    <tbody>
                                    { data && data.options &&
                                    data.options.map( item => (

                                        <tr
                                            key={1} 
                                            value={item}                                  
                                            //onClick={ (e) => handleRowClick( e, item ) } 
                                            >                                        
                                            <td>
                                                { ObjectUtils.getPropertyValue( item, 'option_description' ) }
                                            </td>                                                         
                                        </tr>                                          
                                    ))}
                                    </tbody>   
                                </table>
                            </div>   
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )*/

    const handleClickBack = event => {

        props.history.goBack();

    }

    const handleClickSave = ( handler, className, iconName, param ) => {

        console.log( data );
    
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

const getPaths = ( field ) => {

    const id = field.id;

    if ( id.length === 0 ) {
        throw new Error( 
            'HTML element without id. It will not be possible to update the state of this property. ' 
        );
    }

    return id.split( '.' ); 

}