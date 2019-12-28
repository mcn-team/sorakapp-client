import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Form } from 'react-final-form';
import styled from 'styled-components';

import { Input, Button, Error } from '../../../components';
import { authenticate } from '../../../services/authentication.services';
import { Validation } from '../../../utils';

const PASSWORD_MIN_LENGTH = 8;
const StyledButton = styled(Button)`
  margin-left: 10px;
  margin-right: 10px;
`;
const StyledForm = styled.form`
  width: min-content
`;
const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px;
`;

export const LoginForm = (props) => {
    const [ error, setError ] = useState(null);
    const onSubmit = async (values) => {
        const response = await authenticate(values);

        if (response.error) {
            setError(response.error);
            console.error(response.error);
        } else {
            props.onLogin();
        }
    };

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

                        <ButtonContainer>
                            <StyledButton
                                disabled={submitting}
                                type="submit"
                            >
                                <span>Connexion</span>
                            </StyledButton>
                            <Link to="/register">
                                <StyledButton
                                    secondary
                                    type="button"
                                    disabled={submitting}
                                >
                                    <span>Créer un compte</span>
                                </StyledButton>
                            </Link>
                        </ButtonContainer>
                        <Error centered>{error || ''}</Error>
                    </StyledForm>
                );
            }}
        />
    );
};

LoginForm.propTypes = {
    onLogin: PropTypes.func.isRequired
};
