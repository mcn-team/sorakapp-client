import React from 'react';
import styled from 'styled-components';

export const Error = styled(({ children, className }) => {
    return <div className={className}>{children}</div>;
})`
  font-size: 10px;
  color: red;
  padding-top: 5px;
  height: 20px;
`;
