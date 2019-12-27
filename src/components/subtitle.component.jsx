import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Title } from './title.component';

import { FG_TEXT_MEDIUM } from '../constants/styles.js';

export const Subtitle = styled(({ className, children }) => {
    return (
        <h3 className={className}>
            {children}
        </h3>
    );
})`
  color: ${FG_TEXT_MEDIUM};
  display: inline-flex;
  margin-top: ${props => props.noMargin && '0'}
`;

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    noMargin: PropTypes.bool
};
