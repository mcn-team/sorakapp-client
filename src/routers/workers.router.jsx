import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';

import { PrivateRoute } from './';

import { WorkerHome } from '../pages/home-page/components/worker-home.component';

export const WorkersRouter = () => {
    const match = useRouteMatch();

    return (
        <Switch>
            <PrivateRoute path={`${match.url}/add-component`}>
                Coming soon!
            </PrivateRoute>
            <PrivateRoute path={`${match.url}/add-product`}>
                Coming soon!
            </PrivateRoute>
            <PrivateRoute path={`${match.url}`}>
                <WorkerHome />
            </PrivateRoute>
        </Switch>
    );
};
