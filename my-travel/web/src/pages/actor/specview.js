import { SpecViewType } from '../../infra/specview/SpecView';
import { SpecDataView } from '../../infra/specview/SpecDataView';

const SVActorBrowser = () => {

    let svBrowser = new SpecDataView( 'travelRoute', '', SpecViewType.OBJECT );  
    svBrowser.addString( 'origin', '' );  
    svBrowser.addString( 'destination', '' );
    svBrowser.addString( 'value', '' );
    
    return svBrowser;

}

export const SpecViewActorBrowser = SVActorBrowser();