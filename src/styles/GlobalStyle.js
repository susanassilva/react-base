import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.75;
    width: 80%;
    margin: 50px auto;
  }

  div {
    background-color: lightcoral;
    padding: 10px;
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

  input {
    border: none;
    border-radius: 10px;
    margin: 20px 20px 20px 0;
    padding: 5px 20px;
  }

  button {
    background-color: #ffffff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    padding: 5px 40px;
  }

  a {
    padding: 20px 20px 20px 20px;
    border: 2px solid red;
  }

  `;

export default GlobalStyle;
