import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage, LoginPage, RegisterPage, FillerPage } from './pages';
import { Authentication } from './utils';

const PrivateRoute = ({ children, render, location, ...otherProps }) => {
    if (!Authentication.isAuthenticated()) {
        return (
            <Redirect to={{ pathname: '/login', state: { from: location } } } />
        );
    }

    return (
        <Route {...otherProps}>
            {render || children}
        </Route>
    );
};

export const Router = () => {
    return (
        <Switch>
            <PrivateRoute exact path="/">
                <HomePage />
            </PrivateRoute>
            <PrivateRoute path="/filler">
                <FillerPage />
            </PrivateRoute>
            <Route path="/login">
                <LoginPage />
            </Route>
            <Route path="/register">
                <RegisterPage />
            </Route>
        </Switch>
    );
};
