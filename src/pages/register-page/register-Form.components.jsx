import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Field } from 'react-final-form';
import { register } from '../../services/authentication.services';
import { LocalStorage } from '../../utils/storages.utils';

const onSubmit = async (values) => {
    await register(values);
};

const validate = () => {

};

const onLoginRedirect = () => {
    const token = LocalStorage.getItem('auth_token');

    if (token != null) {
        return (
            <Redirect to="/" />
        );
    }
};

export const RegisterForm = () => {

    onLoginRedirect();

    return (
        <Form
            onSubmit={ onSubmit }
            validate={ validate }
            render={({ handleSubmit }) => (
                <form onSubmit={ handleSubmit }>

                    <div>
                        <label>Username</label>
                        <Field name="username" component="input" type="text" placeholder="username" />
                    </div>

                    <div>
                        <label>Password</label>
                        <Field name="password" component="input" type="password" placeholder="password" />
                    </div>

                    <div>
                        <label>Role</label>
                        <Field name="role" component="select">
                            <option />
                            <option value="CLIENT">Client</option>
                            <option value="WORKER">Worker</option>
                            <option value="TRADER">Trader</option>
                        </Field>
                    </div>

                    <button type="submit">Submit</button>

                </form>
            )}
        />
    );
};
