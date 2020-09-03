import { createGlobalStyle } from 'styled-components';
import color from '../settings/colors';

const Base = createGlobalStyle`
  :root {
    background-color: ${color.background};
    font-family: 'Raleway', sans-serif;
  }
`;

export default Base;
