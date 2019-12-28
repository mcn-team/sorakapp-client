import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import styled from 'styled-components';

import { CenteringContainer } from '../../components';
import { LoginForm } from './components/login-form.components';
import { Authentication } from '../../utils';

export const LoginPage = styled((props) => {
    if (Authentication.isAuthenticated()) {
        return <Redirect to="/" />;
    }

    return (
        <CenteringContainer className={props.className}>
            <LoginForm onLogin={props.onLogin} />
        </CenteringContainer>
    );
})`
  width: 40%;
  height: 100%;
  padding-bottom: 10%;
`;

LoginPage.propTypes = {
    onLogin: PropTypes.func.isRequired
};
