import React from 'react';
import Edit from '../../components/Edit';
import { SpecViewLayout, LayoutType } from '../../infra/specview/SpecViewLayout';
import { SpecViewPoll, SpecViewOptions } from './specview';


import './styles.scss';
import EntityInstance from '../../infra/entity/EntityInstance';

function PollEdit ( props ) {
    
    let layoutPoll = new SpecViewLayout( SpecViewPoll );
    layoutPoll.layoutType = LayoutType.DUPLE;

    let layoutOptions = new SpecViewLayout( SpecViewOptions );
    layoutOptions.layoutType = LayoutType.DUPLE;

    let layouts = [];
    layouts.push( layoutPoll );
    layouts.push( layoutOptions );

    return (
        <div id="poll-edit" className="container" >
            <Edit 
                urn={'poll'}
                keyProp={'poll_id'}  
                layouts={layouts} 
                layoutType={LayoutType.DUPLE}
            />  
        </div>  
    )

}

export default PollEdit;