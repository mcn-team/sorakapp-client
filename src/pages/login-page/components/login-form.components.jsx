import React from 'react';
import { Redirect, Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import styled from 'styled-components';

import { Input, Button } from '../../../components';
import { authenticate } from '../../../services/authentication.services';

import { Authentication, Validation } from '../../../utils';

const PASSWORD_MIN_LENGTH = 8;
const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
`;
const CenteringDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoginForm = () => {
    const onSubmit = async (values) => {
        const response = await authenticate(values);

        if (response.error) {
            console.error(response);
        }
    };

    if (Authentication.isAuthenticated()) {
        return <Redirect to="/" />;
    }

    return (
        <CenteringDiv>
            <Form
                keepDirtyOnReinitialize
                onSubmit={onSubmit}
                render={({ handleSubmit, submitting }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <Input
                                name="username"
                                placeholder="Username"
                                validate={Validation.isRequired}
                            />
                            <Input
                                name="password"
                                placeholder="Password"
                                validate={[ Validation.isRequired, Validation.isMinimumLength(PASSWORD_MIN_LENGTH) ]}
                            />

                            <div>
                                <StyledButton
                                    disabled={true}
                                    type="submit"
                                >
                                    <span>Submit</span>
                                </StyledButton>
                                <Link to="/register">
                                    <StyledButton
                                        type="button"
                                    >
                                        <span>Register</span>
                                    </StyledButton>
                                </Link>
                            </div>
                        </form>
                    );
                }}
            />
        </CenteringDiv>
    );
};
