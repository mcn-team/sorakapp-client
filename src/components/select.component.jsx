import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Error } from './input-error.component';
import { Field } from 'react-final-form';
import { FG_ERROR_HIGH, FG_TEXT_HIGH, FG_TEXT_MEDIUM, DEFAULT_FONT } from '../constants/styles';

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

const StyledSelect = styled.select`
  flex: 1;
  padding: 3px 5px;
  font-size: 1em;
  border: none;
  border-bottom: 1px solid ${props => props.error ? FG_ERROR_HIGH : FG_TEXT_HIGH};
  background-color: transparent;
  color: ${FG_TEXT_HIGH};
  border-radius: 3px;
  width: 100%;
  min-height: 25px;
`;

const composeValidators = (...validators) => {
    return (value) => {
        return validators.reduce((error, validator) => {
            return error || validator(value);
        }, undefined);
    };
};

export const Select = styled(({ validate, children, label, placeholder, name, className }) => {
    const validations = Array.isArray(validate) ? composeValidators(...validate) : composeValidators(validate);
    const DefaultOption = styled.option`
      color: ${FG_TEXT_MEDIUM};
      font-family: ${DEFAULT_FONT};
    `;

    return (
        <div className={className}>
            {label && <label>{label}</label>}
            <StyledField validate={validations} name={name}>
                {({ input, meta }) => {
                    return (
                        <div>
                            <StyledSelect
                                style={{ fontFamily: DEFAULT_FONT }}
                                error={meta.error && meta.touched}
                                {...input}
                                placeholder={placeholder}
                            >
                                <DefaultOption value="" disabled>{placeholder}</DefaultOption>
                                {React.Children.map(children, child => child)}
                            </StyledSelect>
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

Select.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string
};

Select.defaultProps = {
    label: '',
    placeholder: ''
};
