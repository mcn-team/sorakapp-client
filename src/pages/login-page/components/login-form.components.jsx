import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-final-form';

import { Input, Button } from '../../../components';
import { authenticate } from '../../../services/authentication.services';

import { Authentication } from '../../../utils';

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
        <Form
            keepDirtyOnReinitialize
            onSubmit={onSubmit}
            render={({ handleSubmit, submitting }) => {
                return (
                    <form onSubmit={handleSubmit}>

                        <Input name="username" placeholder="Username" />
                        <Input name="password" placeholder="Password" />

                        <Button
                            disabled={submitting}
                            type="submit"
                        >
                            <span>Submit</span>
                        </Button>

                    </form>
                );
            }}
        />
    );
};
