import React from 'react';
import Edit from '../../components/Edit';
import { SpecViewLayout, LayoutType } from '../../infra/specview/SpecViewLayout';
import { SpecViewRouteEdit } from './specview';

export default function RouteEdit ( props ) {

    let layoutRoute = new SpecViewLayout( SpecViewRouteEdit );
    layoutRoute.layoutType = LayoutType.TRIPLE;
    
    let layouts = [];
    layouts.push( layoutRoute );
    
    return (
        <div id="route-edit" className="container" >
            <Edit 
                urn={'travelRoute'}
                keyProps={['origin', 'destination', 'value']}  
                layouts={layouts} 
                layoutType={LayoutType.DUPLE}
                title={'Edição de Rota'}
            />  
        </div>  
    );

}