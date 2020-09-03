import React from 'react';
import Edit from '../../components/Edit';
import { SpecViewLayout, LayoutType } from '../../infra/specview/SpecViewLayout';
import { SpecViewRoute, SpecViewBestTravel } from './specview';

export default function BestTravel ( props ) {

    let layoutRoute = new SpecViewLayout( SpecViewRoute );
    layoutRoute.layoutType = LayoutType.DUPLE;

    let layoutBestTravel = new SpecViewLayout( SpecViewBestTravel );
    layoutBestTravel.layoutType = LayoutType.SINGLE;
    
    let layouts = [];
    layouts.push( layoutRoute );
    layouts.push( layoutBestTravel );
    
    return (
        <div id="best-travel" className="container" >
            <Edit 
                urn={'bestTravel'}
                keyProps={['origin', 'destination']}  
                layouts={layouts} 
                layoutType={LayoutType.SINGLE}
                title={'Encontre a melhor opção para sua viagem'}
            />  
        </div>  
    );

}