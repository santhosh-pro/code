import { SpecViewType } from '../../infra/specview/SpecView';
import { SpecDataView } from '../../infra/specview/SpecDataView';
import { get, api } from '../../service/api';

const SVActorBrowser = () => {

    let svBrowser = new SpecDataView( 'route', '', SpecViewType.OBJECT );  
    svBrowser.addString( 'origin', 'Origem' );  
    svBrowser.addString( 'destination', 'Destino' );
    svBrowser.addNumber( 'value', 'Valor' );
    
    return svBrowser;

}


const SVRouteEdit = () => {

    let svRouteEdit = new SpecDataView( 'route', '', SpecViewType.OBJECT );
    svRouteEdit.addString( 'origin', 'Origem', true, 3, 3 );  
    svRouteEdit.addString( 'destination', 'Destino', true, 3, 3 );
    svRouteEdit.addNumber( 'value', 'Valor', true );    

    return svRouteEdit;

}


const SVRoute = () => {

    let svRoute = new SpecDataView( 'route', '', SpecViewType.OBJECT );
    svRoute.addString( 'origin', 'Origem', true, 3, 3 );  
    let svDestination = svRoute.addString( 'destination', 'Destino', true, 3, 3 );

    svDestination.onAfterBlur = async ( ...params ) => {

        let dataObject = params[ 1 ];
        
        const origin = dataObject.origin;
        const destination = dataObject.destination;

        const response = await api.get( `travelRoute/bestRoute/${origin}-${destination}` );
        
        console.log( response );
                                           
        if ( response && response.data ) {

            const data = response.data;

            let bestRoute = data.bestRoute.reduce( ( bestRoute, item ) => {

                return bestRoute += ' - ' + item;

            });

            const price = data.price;
            bestRoute = bestRoute + ' - ' + price;
            dataObject.bestRoute = bestRoute;

        }

    }

    return svRoute;

}

const SVBestTravel = () => {

    let svBestTravel = new SpecDataView( 'route', '', SpecViewType.OBJECT );
    svBestTravel.addString( 'bestRoute', 'Melhor opção', true, 3, 3 );

    return svBestTravel;

}

export const SpecViewActorBrowser = SVActorBrowser();
export const SpecViewRouteEdit = SVRouteEdit();
export const SpecViewRoute = SVRoute();
export const SpecViewBestTravel = SVBestTravel();