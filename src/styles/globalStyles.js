import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";
import colors from "./constants/colors";
import fonts from "./constants/fonts";

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
      font-family: "dangdanghae";
      src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.2/Cafe24Dangdanghae.woff') format('woff');
  }

  /* Additional Customizing reset CSS */
  * {
    margin: 0;
    font-family: ${fonts.kr.primary}, sans-serif;
    box-sizing: border-box;
    }
  
  html {
    font-family: ${fonts.kr.primary}, sans-serif;
    font-size: 16px;
  }

  body {
    font-family: ${fonts.kr.primary}, sans-serif;
    padding-top: 60px;
    color: ${colors.darkGray};
    background-color: ${colors.white};

    

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1 {
    margin: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button,
  input,
  select,
  textarea {
    background-color: transparent;
    border: 0;
  }

  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
    box-shadow: none;
  }

  a,
  button {
    cursor: pointer;
  }

  button {
    padding: 0;
  }
  
  ul,
  ol {
    padding-left: 0;
    list-style: none;
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    }

  address {
    all: unset;
  }
`;

export default GlobalStyles;
