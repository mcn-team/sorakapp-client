import React from 'react';

import { CenteringContainer } from '../../components';
import { LoginForm } from './components/login-form.components';

export const LoginPage = () => {
    return (
        <CenteringContainer>
            <h2>Login Page</h2>
            <LoginForm />
        </CenteringContainer>
    );
};
