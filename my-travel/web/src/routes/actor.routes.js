import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ActorBrowser from '../pages/actor/browser';
import ActorEdit from '../pages/actor/edit';


export default function ActorRoutes() {

    return (
        <Switch>
            <Route exact path="/actor" component={ActorBrowser}/>
            <Route exact path="/actor/new" component={ActorEdit}/>
            <Route exact path="/actor/:id" component={ActorEdit}/>
        </Switch>
    );

}
