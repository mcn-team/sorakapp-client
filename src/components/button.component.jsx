import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import {
    BG_ELEVATED_01,
    BG_ELEVATED_06,
    FG_PRIMARY_MEDIUM,
    FG_PRIMARY_HIGH,
    FG_SECONDARY_HIGH,
    FG_SECONDARY_MEDIUM,
    FG_TEXT_MEDIUM,
    DEFAULT_FONT
} from '../constants/styles';

const borderColorCallback = ({ disabled, secondary }) => {
    return disabled ? FG_TEXT_MEDIUM : secondary ? FG_SECONDARY_MEDIUM : FG_PRIMARY_MEDIUM;
};

const colorCallback = ({ disabled, secondary }) => {
    return disabled ? FG_TEXT_MEDIUM : secondary ? FG_SECONDARY_HIGH : FG_PRIMARY_HIGH;
};

const StyledButton = styled.button`
  font-size: 1em;
  padding: 15px;
  border-radius: 2px;
  font-family: ${DEFAULT_FONT};
  background-color: ${props => props.disabled ? BG_ELEVATED_01 : BG_ELEVATED_06};
  border: 1px solid ${borderColorCallback};
  color: ${colorCallback};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`;

export const Button = styled(({ children, disabled, to, ...otherProps }) => {
    const ButtonComponent = (
        <StyledButton disabled={disabled} {...otherProps}>
            {children}
        </StyledButton>
    );

    return to && !disabled ? (
        <Link to={to}>
            {ButtonComponent}
        </Link>
    ) : ButtonComponent;
})`

`;

Button.propTypes = {
    children: PropTypes.node,
    disabled: PropTypes.bool,
    to: PropTypes.string
};

Button.defaultProps = {
    children: '',
    disabled: false,
    to: null
};
