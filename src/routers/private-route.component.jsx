import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { Authentication } from '../utils/authentication.utils';

export const PrivateRoute = ({ children, render, location, ...otherProps }) => {
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

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    location: PropTypes.object,
    render: PropTypes.func
};
