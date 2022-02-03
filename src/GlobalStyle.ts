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
    background-color: ${(props) => props.theme.bgColor};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;

export default GlobalStyle;
