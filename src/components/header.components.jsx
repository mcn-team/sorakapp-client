import React from 'react';
import styled from 'styled-components';

import { Title } from './title.component';
import { Subtitle } from './subtitle.component';

import { BG_ELEVATED_01, FG_PRIMARY_MEDIUM } from '../constants/styles';

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
  background-color: ${BG_ELEVATED_01};
  border-bottom: 1px solid ${FG_PRIMARY_MEDIUM};
  min-height: 100px;
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  cursor: pointer;
`;
