import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 20px;
  }

  body {
    background-color: lightgray;
    font-family: Arial, Helvetica, sans-serif;
  }

  ul {
    list-style: none;
  }

  `;

export default GlobalStyle;
