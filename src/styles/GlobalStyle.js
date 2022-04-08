import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: lightgray;
    padding: 20px;
  }

  `;

export default GlobalStyle;
