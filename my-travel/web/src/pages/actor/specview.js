import { SpecViewType } from '../../infra/specview/SpecView';
import { SpecDataView } from '../../infra/specview/SpecDataView';

const SVActorBrowser = () => {

    let svBrowser = new SpecDataView( 'actor', '', SpecViewType.OBJECT );  
    svBrowser.addString( 'id', '' );  
    svBrowser.addString( 'person.fullName', '' );
    
    return svBrowser;

}

export const SpecViewActorBrowser = SVActorBrowser();