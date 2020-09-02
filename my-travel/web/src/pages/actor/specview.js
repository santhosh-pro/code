import { SpecViewType } from '../../infra/specview/SpecView';
import { SpecDataView } from '../../infra/specview/SpecDataView';

const SVActorBrowser = () => {

    let svBrowser = new SpecDataView( 'route', '', SpecViewType.OBJECT );  
    svBrowser.addString( 'origin', 'Origem' );  
    svBrowser.addString( 'destination', 'Destino' );
    svBrowser.addNumber( 'value', 'Valor' );
    
    return svBrowser;

}


const SVRouteEdit = () => {

    let svRoute = new SpecDataView( 'route', '', SpecViewType.OBJECT );
    svRoute.addString( 'origin', 'Origem', true, 3, 3 );  
    svRoute.addString( 'destination', 'Destino', true, 3, 3 );
    svRoute.addNumber( 'value', 'Valor', true );    

    return svRoute;

}

export const SpecViewActorBrowser = SVActorBrowser();
export const SpecViewRouteEdit = SVRouteEdit();