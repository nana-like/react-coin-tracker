import { createGlobalStyle } from 'styled-components';
import Normalize from 'styled-normalize';

const GlobalStyle = createGlobalStyle`
  ${Normalize};

  * {
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f0f0f0;
  }
`;

export default GlobalStyle;
