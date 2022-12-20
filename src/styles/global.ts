import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.blue}
  }

  body {
    background-color: ${({ theme }) => theme.colors.base.background};
    color: ${({ theme }) => theme.colors.base.text};
  }
  
  body, input, textarea, button {
    font: 400 1rem 'Nunito';
    --webkit-font-smoothing: antialiased;
    line-height: 160%;
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.colors.base.title}
  }
`;