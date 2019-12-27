import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import { Error } from './input-error.component';

import { FG_TEXT_HIGH, FG_TEXT_MEDIUM, FG_ERROR_HIGH } from '../constants/styles';

const StyledField = styled(Field)`
  flex: 1;
  padding: 3px 5px;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid white;
  background-color: transparent;
  color: ${FG_TEXT_HIGH};
  border-radius: 3px;
`;

const StyledInput = styled.input`
  flex: 1;
  padding: 3px 5px;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid ${props => props.error ? FG_ERROR_HIGH : FG_TEXT_HIGH};
  background-color: transparent;
  color: ${FG_TEXT_HIGH};
  border-radius: 3px;
  width: 100%;
  ::placeholder {
    color: ${FG_TEXT_MEDIUM};
  }
`;

const composeValidators = (...validators) => {
    return (value) => {
        return validators.reduce((error, validator) => {
            return error || validator(value);
        }, undefined);
    };
};

export const Input = styled(({ validate, label, placeholder, name, className, type }) => {
    const validations = Array.isArray(validate) ? composeValidators(...validate) : composeValidators(validate);

    return (
        <div className={className}>
            {label && <label>{label}</label>}
            <StyledField validate={validations} name={name}>
                {({ input, meta }) => {
                    return (
                        <div>
                            <StyledInput
                                error={meta.error && meta.touched}
                                {...input}
                                type={type}
                                placeholder={placeholder}
                            />
                            <Error>{meta.error && meta.touched ? meta.error : ''}</Error>
                        </div>
                    );
                }}
            </StyledField>
        </div>
    );
})`
  padding: 10px 0 10px 0;
`;

Input.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    validate: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.arrayOf(PropTypes.func)
    ]),
    type: PropTypes.string
};

Input.defaultProps = {
    label: '',
    placeholder: '',
    validate: () => {},
    type: 'text'
};
