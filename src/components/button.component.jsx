import styled from 'styled-components';

import { ELEVATED_04, TEXT_STYLE_HIGH_PRIMARY } from '../constants/styles';

export const Button = styled.button`
  margin-top: 20px;
  font-size: 1em;
  padding: 15px;
  border-radius: 2px;
  font-family: 'Stalinist One', cursive;
  ${ELEVATED_04};
  border: 1px solid rgba(255, 255, 255, 0.14);
  ${TEXT_STYLE_HIGH_PRIMARY};
  -ms-transform: skewX(-20deg);
  -webkit-transform: skewX(-20deg);
  transform: skewX(-20deg);
  
  :disabled {
    background-color: red;
  }
  
  & > span {
    -ms-transform: skewX(20deg);
    -webkit-transform: skewX(20deg);
    transform: skewX(20deg);
    display: inline-block;
  }
`;
