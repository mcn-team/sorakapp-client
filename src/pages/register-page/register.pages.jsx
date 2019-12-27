import React from 'react';

import { CenteringContainer } from '../../components';
import { RegisterForm } from './components/register-form.components';

export const RegisterPage = () => {
    return (
        <CenteringContainer>
            <h2>Register Page</h2>
            <RegisterForm />
        </CenteringContainer>
    );
};
