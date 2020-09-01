import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';

import { get } from '../../service/api';
import { SpecViewType } from '../../infra/specview/SpecView';
import ObjecView from '../../components/ObjectView';
import ObjectListView from '../ObjectListView';
import ObjectUtils from '../../utils/ObjectUtils';
import EntityInstance from '../../infra/entity/EntityInstance';

import saveIcon from '../../image/24/save.png';
import backIcon from '../../image/24/back.png';
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

    const handleClickNew = event => {

        props.history.push(`/${urn}/new`);

    }

    const createBtnAction = ( handler, className, iconName, param ) => {

        if ( handler )
            return ButtonFactory( 'normal', className, () => handler( handler, param ), iconName );
        else
            return undefined;
    
    }

    const handleClickRefresh = ( handler, className, iconName, param ) => {

        if ( handler )
            return ButtonFactory( 'normal', className, () => handler( handler, param ), iconName );
        else
            return undefined;
    
    }

    
    
    return (
        <div className="edit-object">        
            <div className="common-header">
                <label>
                    Enquete
                </label>
            </div>
            <div className="toolbar-container">
                <div className="toolbar-buttons">
                {
                    createBtnAction( handleClickNew, '', 'arrow-back', null )
                }               
                {
                    createBtnAction( handleClickRefresh, '', 'save', null )
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