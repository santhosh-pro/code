import { SpecViewType } from '../../infra/specview/SpecView';
import { SpecDataView } from '../../infra/specview/SpecDataView';

const SVActorBrowser = () => {

    let svBrowser = new SpecDataView( 'travelRoute', '', SpecViewType.OBJECT );  
    svBrowser.addString( 'origin', 'Origem' );  
    svBrowser.addString( 'destination', 'Destino' );
    svBrowser.addNumber( 'value', 'Valor' );
    
    return svBrowser;

}

export const SpecViewActorBrowser = SVActorBrowser();