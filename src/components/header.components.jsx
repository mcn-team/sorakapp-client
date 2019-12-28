import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Title, Button } from './';

import { Authentication } from '../utils/authentication.utils';
import { BG_ELEVATED_01, FG_PRIMARY_MEDIUM } from '../constants/styles';

const ControlSection = styled.section`
  display: flex;
  flex-direction: row;
  width: min-content;
  height: min-content;
  flex: 1;
  justify-content: flex-end;

  & > button {
    margin-top: 20px;
    margin-left: 20px;
  }
`;

const TitleSection = styled.section`
  display: flex;
  flex-direction: column;
  width: min-content;
  cursor: pointer;
  flex: 1;
  font-size: 1.3rem;
`;

const HeaderLink = styled(Link)`
  flex-direction: column;
  display: inline-flex;
  width: fit-content;
`;

export const Header = styled((props) => {
    const onLogout = () => {
        Authentication.removeAuthentication();
        props.onLogout();
    };

    return (
        <header className={props.className}>
            <TitleSection>
                <HeaderLink to="/">
                    <Title subtitle="Chimaera Tool">OneOverNyne</Title>
                </HeaderLink>
            </TitleSection>
            {
                Authentication.isAuthenticated() && (
                    <ControlSection>
                        <Button onClick={onLogout}>
                            Déconnexion
                        </Button>
                    </ControlSection>
                )
            }
        </header>
    );
})`
  background-color: ${BG_ELEVATED_01};
  border-bottom: 1px solid ${FG_PRIMARY_MEDIUM};
`;
