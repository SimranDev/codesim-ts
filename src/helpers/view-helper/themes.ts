import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  body: "#FFF",
  text: "#363537",
  background: "var(--bg-dark)",
  descriptionText: "#616161",
};
export const darkTheme: DefaultTheme = {
  body: "#363537",
  text: "#FAFAFA",
  background: "#999",
  descriptionText: "#BDBDBD",
};

export const GlobalStyles = createGlobalStyle`
     body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }

  nav {
    background: ${({ theme }) => theme.body};
  }

  a{
    color: ${({ theme }) => theme.text};
  }

  span{
    background: ${({ theme }) => theme.body};
    box-shadow: ${({ theme }) => theme.body};
  }

  section{
    background: ${({ theme }) => theme.body};
  }

`;
