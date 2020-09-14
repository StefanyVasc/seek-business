import { createGlobalStyle } from 'styled-components';
import color from '../settings/colors';

const Base = createGlobalStyle`
  body {
    background-color: ${color.generalBgc};
    font-family: 'Raleway', sans-serif;
  }
`;

export default Base;
