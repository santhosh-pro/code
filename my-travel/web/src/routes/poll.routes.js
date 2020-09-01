import React from 'react';
import { Route, Switch } from 'react-router-dom';

import PollBrowser from '../pages/poll/browser';
import PollEdit from '../pages/poll/edit'

export default function PollRouter() {

    return (
        <Switch>
            <Route exact path="/poll" component={PollBrowser} />
            <Route path="/poll/new" component={PollEdit} />
            <Route path="/poll/:id" component={PollEdit} />
        </Switch>
    );

}
