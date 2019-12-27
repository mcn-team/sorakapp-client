import React, { useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import styled from 'styled-components';

import { Input, Button, Error } from '../../../components';
import { authenticate } from '../../../services/authentication.services';
import { Authentication, Validation } from '../../../utils';

const PASSWORD_MIN_LENGTH = 8;
const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
`;
const StyledForm = styled.form`
  width: min-content
`;

export const LoginForm = () => {
    const [ redirect, setRedirect ] = useState(false);
    const [ error, setError ] = useState(null);
    const onSubmit = async (values) => {
        const response = await authenticate(values);

        if (response.error) {
            setError(response.error);
            console.error(response.error);
        } else {
            setRedirect(Authentication.isAuthenticated());
        }
    };

    if (redirect) {
        return <Redirect to="/" />;
    }

    return (
        <Form
            keepDirtyOnReinitialize
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => {
                return (
                    <StyledForm onSubmit={handleSubmit}>
                        <Input
                            name="username"
                            placeholder="Username"
                            validate={Validation.isRequired}
                        />
                        <Input
                            name="password"
                            placeholder="Password"
                            type="password"
                            validate={[ Validation.isRequired, Validation.isMinimumLength(PASSWORD_MIN_LENGTH) ]}
                        />

                        <div>
                            <StyledButton
                                disabled={submitting}
                                type="submit"
                            >
                                <span>Submit</span>
                            </StyledButton>
                            <Link to="/register">
                                <StyledButton
                                    type="button"
                                    disabled={submitting}
                                >
                                    <span>Register</span>
                                </StyledButton>
                            </Link>
                        </div>
                        <Error centered>{error || ''}</Error>
                    </StyledForm>
                );
            }}
        />
    );
};
