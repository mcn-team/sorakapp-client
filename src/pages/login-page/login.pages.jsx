import React from 'react';
import styled from 'styled-components';

import { LoginForm } from './components/login-form.components';

const PageTitle = styled.h2`
  text-align: center;
`;

export const LoginPage = () => {
    return (
        <>
            <PageTitle>Login Page</PageTitle>
            <LoginForm />
        </>
    );
};
