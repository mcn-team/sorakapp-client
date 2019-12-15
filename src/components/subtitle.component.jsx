import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Title } from './title.component';

import { TEXT_STYLE_MEDIUM_DEFAULT } from '../constants/styles.js';

export const Subtitle = styled((props) => {
    const { className, noMargin, children } = props;
    const H3 = styled.h3({
        ...(noMargin && { marginTop: 0 })
    });

    return (
        <H3 className={className}>
            {children}
        </H3>
    );
})({
    ...TEXT_STYLE_MEDIUM_DEFAULT,
    display: 'inline-flex'
});

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    noMargin: PropTypes.bool
};
