import React from 'react';
import { LayoutType, SpecViewLayout } from '../../infra/specview/SpecViewLayout';
import Input from '../Input';
import { ObjectPropertyType } from '../../infra/specview/SpecViewObjectProp';
import ObjectUtils from '../../utils/ObjectUtils';
import ObjectListView from '../ObjectListView';

import './styles.scss';

export default function ObjectView ( props ) {

    const { specViewLayout, dataObject } = props; 
    let cmps = [];

    if ( ( specViewLayout instanceof SpecViewLayout ) === false ) {
        throw new Error( 
            `The Edit visualization component waits to receive an instance of the SpecViewLayout class and received ${specViewLayout}` );
    } 

    let title = specViewLayout.title;    
    let templateColumns = '';

    switch ( specViewLayout.layoutType ) {

        case LayoutType.SINGLE    : templateColumns = '1fr'
        break;

        case LayoutType.DUPLE     : templateColumns = '1fr 1fr'
        break;

        case LayoutType.TRIPLE    : templateColumns = '1fr 1fr 1fr'
        break;

        case LayoutType.QUADRUPLE : templateColumns = '1fr 1fr 1fr 1fr'
        break;
        
        default : templateColumns = '1fr'
        break;

    }


    const drawCmp = ( svProp, data, index ) => {

        switch ( svProp.dataType ) {

            case 'string':  
                return <Input key={index} spec={svProp} data={data} />

            case 'number':  
                return <Input key={index} spec={svProp} data={data} />    

            default: 
                break;

        }

    }

    const drawObject = ( specViewLayout, dataObject, index ) => {

        let viewObject = undefined;
    
        if ( specViewLayout ) {

            viewObject = <ObjectView
                             key={index}
                             dataObject={dataObject} 
                             specViewLayout={specViewLayout} 
                         />                        
                
        } 

        return viewObject;

    }

    const drawObjectList = ( specViewLayout, dataObjectList, svOProp, index ) => {

        let viewObjectList = undefined;

        viewObjectList = <ObjectListView 
                            specLayout={specViewLayout} 
                            dataList={dataObjectList} 
                            svOProp={svOProp} 
                        />
    
        
        return viewObjectList;


    }


    if ( specViewLayout.specDTV ) {

        const specDTV = specViewLayout.specDTV;
        const svProps = specDTV.svOProps; 
        let cmp = null;

        for ( let i = 0 ; i < svProps.length; i++ ) {

            const svProp = svProps[ i ];
            console.log( i );

            switch ( svProp.propertyType ) {

                case ObjectPropertyType.COMMON : 
                
                    cmp = drawCmp( svProp, dataObject, i );

                break;

                case ObjectPropertyType.OBJECT : 
                
                    const dataObjectProp = ObjectUtils.getPropertyValue( dataObject, svProp.name ); 
                    let layObjectProp = specViewLayout.findLayout( svProp.specDTVObject.objectName );
                
                    cmp = drawObject( layObjectProp, dataObjectProp );

                break;

                case ObjectPropertyType.LIST :

                    const dataObjectList = dataObject[svProp.name]; 
                    let layObjectListProp = specViewLayout.findLayout( svProp.specDTVObject.objectName );
                    
                    cmp = drawObjectList( layObjectListProp, dataObjectList, svProp, i );

                break;

                default:
                    break;
            }

            cmps.push( cmp );  
            
        }

    }


    return (

        <div className="layout">   
            { specViewLayout.headerVisible &&            
                <header className="layout-header" >
                    <label className="layout-header-title">{ title }</label> 
                    <hr/>
                </header>    
            }
            <div
                className="layout-content"
                style={{
                        display: 'grid', 
                        gridTemplateColumns : templateColumns,                       
                        gridColumnGap : '10px',
                        gridRowGap: '20px',
                        paddingLeft: '8px',
                        paddingRight: '8px',
                      }}
            >                      
            { cmps }                            
            </div>
        </div>

    );

}



