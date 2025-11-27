import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    background-color: ${theme.colors.bgDark};
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.primary};
    color: ${theme.colors.textWhite};
    overflow-x: hidden;
    line-height: 1.6;
    cursor: none;
  }

  h1, h2, h3, h4 {
    font-family: ${theme.fonts.heading};
  }
`;

