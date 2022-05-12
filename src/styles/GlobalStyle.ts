import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }
  html{
    overflow-x: hidden
  }
  html, body {
    height: 100vh;
  }
  h1,h2,h3,h4,h5, p, span, input, a, button, table, strong{
    font-family: 'Montserrat', serif;
  }
`;

export default GlobalStyle;
