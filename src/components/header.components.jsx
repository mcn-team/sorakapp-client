import React from 'react';
import styled from 'styled-components';

import { Title } from './title.component';
import { Subtitle } from './subtitle.component';

import { ELEVATED_01 } from '../constants/styles';

const LinkSection = styled.section`
    display: flex;
    justify-content: space-evenly;
    padding: 20px 0;
`;

const HeaderComponent = (props) => {
    return (
        <header className={props.className}>
            <Title withSubtitle>OneOverNyne</Title>
            <Subtitle noMargin subtitle="">Chimaera Tool</Subtitle>
            <LinkSection>
                {React.Children.map(props.children, (child, index) => {
                    return (
                        <div key={`hd-lk-${index}`}>{child}</div>
                    );
                })}
            </LinkSection>
        </header>
    );
};

export const Header = styled(HeaderComponent)`
  ${ELEVATED_01};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  cursor: pointer;
`;
