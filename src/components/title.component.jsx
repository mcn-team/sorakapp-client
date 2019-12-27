import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FG_TEXT_HIGH } from '../constants/styles.js';

export const Title = styled((props) => {
    return (
        <h1 className={props.className}>
            {props.children}
        </h1>
    );
})`
  color: ${FG_TEXT_HIGH};
  display: inline-flex;
  ${(props) => props.withSubtitle && { marginBottom: 0 }}
`;

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    withSubtitle: PropTypes.bool
};
