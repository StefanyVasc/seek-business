import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *{
    margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }
  html, body, #root {
  min-height: 100%;
}
body {
  background-color: #3c5268;
  -webkit-font-smoothing: antialiased !important;
}
`;

export default GlobalStyles;
