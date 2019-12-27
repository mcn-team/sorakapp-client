import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { FG_ERROR_MEDIUM } from '../constants/styles';

export const Error = styled(({ children, className }) => {
    return <div className={className}>{children}</div>;
})`
  font-size: 10px;
  color: ${FG_ERROR_MEDIUM};
  padding-top: 5px;
  height: 20px;
  text-align: ${props => props.centered ? 'center' : 'left' };
  word-break: break-word;
`;

Error.propTypes = {
    centered: PropTypes.bool
};
