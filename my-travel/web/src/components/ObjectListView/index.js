import React, { useState } from 'react';
import ObjectUtils from '../../utils/ObjectUtils';
import ObjectView from '../ObjectView';

import './styles.scss';
import { ButtonFactory } from '../Button';

export default function ObjectListView ( props )  {

    const { dataList, specViewLayout } = props;

    const [ selectedItem, setSelectedItem ] = useState(dataList[0]);

    const handleRowClick = ( e, item ) => {

        setSelectedItem( item ); 

    }

    const handleClickNewButton = ( e ) => {

    }

    const handleClickDeleteButton = ( e ) => {

    }

    const handleClickRefreshButton = ( e ) => {

    }

    return (
        <>
            <div 
                wlist={ JSON.stringify(dataList) }
                type={"object-list"}
                title={ specViewLayout.title }
                className="layout-object-grid-li"
            >
                <div className="layout-header_object-grid-li" >
                    <label className="layout-header-title-object-grid-li">{ specViewLayout.title }</label> 
                    <hr/>
                </div>                            
                <div className="group-li">
                    {   
                        <div className="button-bar-li">
                            { createNewButton(  handleClickNewButton ) }
                            { createDeleteButton( handleClickDeleteButton ) }
                        </div>
                    }
                    <div id="base-li">
                        <table id="common-grid-li">                     
                            <tbody id="body-grid-li">
                            { dataList.map( item => (

                                <tr id="row-grid-data-li" 
                                    className="row-grid-data-li"
                                    key={1} 
                                    value={item}                                  
                                    onClick={ (e) => handleRowClick( e, item ) } 
                                    >                                        
                                    <td id="col-grid-data-li">
                                        { ObjectUtils.getPropertyValue( item, 'option_description' ) }
                                    </td>                                                         
                                </tr>                                          
                            ))}
                            </tbody>   
                        </table>
                    </div>   

                </div>

            </div>
        </>      
    )

}

//return ButtonFactory( 'small', className, () => handler( handler, param ), iconName );

function createDeleteButton( event, eventParam ) {

    if( event )
        return ButtonFactory( 'small', 'grid-button-remove', () => event( eventParam ), 'remove' );
    else
        return undefined;    
        
}

function createNewButton( event, eventParam ) {

    if( event )
        return ButtonFactory( 'small', 'button-new', () => event( eventParam ), 'add' );
    else
        return undefined;    
        
}