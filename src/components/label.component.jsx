import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { TEXT_STYLE_HIGH_DEFAULT } from '../constants/styles';
import { Title } from './title.component';

export const Label = styled((props) => {
    return (
        <div className={props.className}>{props.children}</div>
    );
})`
  ${TEXT_STYLE_HIGH_DEFAULT};
`;

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};
