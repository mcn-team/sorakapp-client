import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const FlexCell = styled(({ children, className }) => {
    return <div className={className}>{children}</div>;
})`
  flex: ${props => props.widthProportion};
  padding: 10px;
`;

FlexCell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    widthProportion: PropTypes.number
};

FlexCell.defaultProps = {
    widthProportion: 1
};
