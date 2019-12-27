import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const CenteringContainer = styled(({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    );
})`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

CenteringContainer.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};
