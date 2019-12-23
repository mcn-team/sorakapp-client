import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { HomePage, LoginPage, FillerPage } from './pages';
import { LocalStorage } from './utils';

const renderPrivatePage = (component) => {
    const isLogged = LocalStorage.getItem('auth_token');

    if (!isLogged) {
        return (props) => {
            return (
                <Redirect to={{ pathname: '/login', state: { from: props.location } } } />
            );
        };
    }

    return () => {
        return component;
    };
};

export const Router = () => {
    return (
        <Switch>
            <Route exact path="/" render={renderPrivatePage(<HomePage />)} />
            <Route path="/filler" render={renderPrivatePage(<FillerPage />)} />
            <Route path="/login">
                <LoginPage />
            </Route>
        </Switch>
    );
};
