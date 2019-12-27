import styled from 'styled-components';

import {
    BG_ELEVATED_01,
    BG_ELEVATED_06,
    FG_PRIMARY_MEDIUM,
    FG_PRIMARY_HIGH,
    FG_TEXT_MEDIUM
} from '../constants/styles';

export const Button = styled.button`
  margin-top: 20px;
  font-size: 1em;
  padding: 15px;
  border-radius: 2px;
  font-family: 'Stalinist One', cursive;
  background-color: ${props => props.disabled ? BG_ELEVATED_01 : BG_ELEVATED_06};
  border: 1px solid ${props => props.disabled ? FG_TEXT_MEDIUM : FG_PRIMARY_MEDIUM};
  color: ${props => props.disabled ? FG_TEXT_MEDIUM : FG_PRIMARY_HIGH};
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};

  & > span {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
  }
`;
