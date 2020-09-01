import { SpecViewType } from '../../infra/specview/SpecView';
import { SpecDataView, SpecDataViewList } from '../../infra/specview/SpecDataView';

const SVPollBrowser = () => {

    let svBrowser = new SpecDataView( 'poll', '', SpecViewType.OBJECT );  
    svBrowser.addNumber( 'poll_id', 'poll', '' );  
    svBrowser.addString( 'poll_description', 'poll', '' );
    
    return svBrowser;

}

const SVPoll = () => {

    let svPoll = new SpecDataView( 'poll', '', SpecViewType.OBJECT );
    svPoll.addString( 'poll_description', 'poll', '', true, 0, 50 );

    return svPoll;

}

const SVOptions = () => {

    let svOptions = new SpecDataViewList( 'options', '', 'option', 'option_description', '', 'poll.options', true );
    svOptions.addString( 'option_description', 'poll.options', '', true, 0, 50 );

    return svOptions;

}

export const SpecViewPollBrowser = SVPollBrowser();
export const SpecViewPoll = SVPoll();
export const SpecViewOptions = SVOptions();



