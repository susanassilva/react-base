import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 20px;
  }

  body {
    background-color: lightgray;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.75;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  li {
    padding: 0;
    margin: 0;
  }


  `;

export default GlobalStyle;
