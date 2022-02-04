import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  * {
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-family: sans-serif;
    font-size: 1.6rem;
    line-height: 1.4;
    color:${(props) => props.theme.textColor};
    line-height: 1.2;
    background-color: ${(props) => props.theme.bgColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
