import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form, Field } from 'react-final-form';

import { TEXT_STYLE_HIGH_DEFAULT, TEXT_STYLE_HIGH_PRIMARY, ELEVATED_04, ELEVATED_01 } from '../../constants/styles.js';

const onSubmit = (values) => {

};

const StyledField = styled(Field)`
  flex: 1;
  padding: 3px 5px;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  ${TEXT_STYLE_HIGH_DEFAULT};
  font-family: 'Stalinist One', cursive;
  border-radius: 3px;
`;

const Input = styled(({ label, placeholder, name, className }) => {
    return (
        <div className={className}>
            {label && <label>{label}</label>}
            <StyledField
                name={name}
                component="input"
                type="text"
                placeholder={placeholder}
            />
        </div>
    );
})`
  padding: 20px 0 20px 0;
`;

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

const StyledButton = styled.button`
  margin-top: 20px;
  font-size: 1em;
  padding: 15px;
  border-radius: 2px;
  font-family: 'Stalinist One', cursive;
  ${ELEVATED_04};
  border: 1px solid rgba(255, 255, 255, 0.14);
  ${TEXT_STYLE_HIGH_PRIMARY};
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  
  & > span {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
  }
`;

export const LoginForm = (props) => {
    return (
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit }) => {
                return (
                    <form onSubmit={handleSubmit}>
                        <Input name="username" placeholder="Username" />
                        <Input name="password" placeholder="Password" />
                        <StyledButton type="submit"><span>Submit</span></StyledButton>
                    </form>
                );
            }}
        />
    );
};
