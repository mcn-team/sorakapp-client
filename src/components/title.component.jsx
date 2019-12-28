import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FG_TEXT_HIGH, TITLE_FONT } from '../constants/styles.js';
import { Subtitle } from './subtitle.component';

const StyledSubtitle = styled(Subtitle)`
  margin-top: 0;
`;

export const Title = styled(({ children, className, subtitle }) => {
    return (
        <>
            <h1 className={className}>
                {children}
            </h1>
            {
                subtitle && (
                    <StyledSubtitle>{subtitle}</StyledSubtitle>
                )
            }
        </>
    );
})`
  color: ${FG_TEXT_HIGH};
  display: inline-flex;
  margin-bottom: ${(props) => props.subtitle && '0'};
  font-family: ${TITLE_FONT};
`;

Title.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
    subtitle: PropTypes.string
};
