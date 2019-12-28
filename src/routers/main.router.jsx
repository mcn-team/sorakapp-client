import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';

import { HomePage, LoginPage, RegisterPage, OrdersPage } from '../pages';
import { Authentication } from '../utils';
import { WorkersRouter, PrivateRoute } from './';

export const MainRouter = (props) => {
    const role = Authentication.getRole() || 'WORKER'; //TODO: Remove mock

    return (
        <div className="App-content">
            <Switch>
                <PrivateRoute path="/workers">
                    <WorkersRouter />
                </PrivateRoute>
                <PrivateRoute path="/orders">
                    <OrdersPage />
                </PrivateRoute>
                <Route path="/login">
                    <LoginPage onLogin={props.onLogin} />
                </Route>
                <Route path="/register">
                    <RegisterPage />
                </Route>

                {/* This route MUST stay at the bottom of the pile */}
                <PrivateRoute path="/">
                    <HomePage type={role} />
                </PrivateRoute>
            </Switch>
        </div>
    );
};

MainRouter.propTypes = {
    onLogin: PropTypes.func.isRequired
};
