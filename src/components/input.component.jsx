import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';
import styled from 'styled-components';

import { TEXT_STYLE_HIGH_DEFAULT } from '../constants/styles';

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

export const Input = styled(({ label, placeholder, name, className, type }) => {
    return (
        <div className={className}>
            {label && <label>{label}</label>}
            <StyledField
                name={name}
                component="input"
                type={type}
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
    placeholder: PropTypes.string,
    type: PropTypes.string
};

Input.defaultProps = {
    label: '',
    placeholder: '',
    type: 'text'
};
