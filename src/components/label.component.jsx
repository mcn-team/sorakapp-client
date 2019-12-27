import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { FG_TEXT_HIGH } from '../constants/styles';
import { Title } from './title.component';

export const Label = styled((props) => {
    return (
        <div className={props.className}>{props.children}</div>
    );
})`
  color: ${FG_TEXT_HIGH};
`;

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};
