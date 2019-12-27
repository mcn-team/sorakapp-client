import React, { useState } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { Form } from 'react-final-form';

import { Button, Error, Input, Select } from '../../../components';
import { register } from '../../../services/authentication.services';
import { Authentication, Validation } from '../../../utils';

const PASSWORD_MIN_LENGTH = 8;
const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
`;
const StyledForm = styled.form`
  width: min-content
`;


const validate = () => {

};

export const RegisterForm = () => {
    const [ redirect, setRedirect ] = useState(false);
    const [ error, setError ] = useState(null);
    const onSubmit = async (values) => {
        const response = await register(values);

        if (response.error) {
            setError(response.error);
            console.error(response.error);
        } else {
            setRedirect(Authentication.isAuthenticated());
        }
    };

    if (redirect) {
        return (
            <Redirect to="/" />
        );
    }

    return (
        <Form
            onSubmit={ onSubmit }
            validate={ validate }
            render={({ handleSubmit, submitting }) => {
                return (
                    <StyledForm onSubmit={ handleSubmit }>
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
                        <Select
                            name="role"
                            placeholder="Choose a role"
                            validate={Validation.isRequired}
                        >
                            <option value="CLIENT">Client</option>
                            <option value="WORKER">Worker</option>
                            <option value="TRADER">Trader</option>
                        </Select>
                        <div>
                            <StyledButton
                                disabled={submitting}
                                type="submit"
                            >
                                <span>Register</span>
                            </StyledButton>
                            <Link to="/register">
                                <StyledButton
                                    type="button"
                                    disabled={submitting}
                                >
                                    <span>Login Page</span>
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
