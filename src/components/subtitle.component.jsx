import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FG_TEXT_MEDIUM, TITLE_FONT } from '../constants/styles.js';

export const Subtitle = styled(({ className, children }) => {
    return (
        <h3 className={className}>
            {children}
        </h3>
    );
})`
  color: ${FG_TEXT_MEDIUM};
  display: inline-flex;
  font-family: ${TITLE_FONT};

`;

Subtitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    noMargin: PropTypes.bool
};
