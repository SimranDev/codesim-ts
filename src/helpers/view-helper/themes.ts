import { createGlobalStyle } from "styled-components";
import { DefaultTheme } from "styled-components";

export const lightTheme: DefaultTheme = {
  body: "#FFF",
  text: "#363537",
  background: "var(--bg-dark-clr)",
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

  h4, h5, h6{
    color:${({ theme }) => theme.descriptionText}
  }

  #menu_label:before,
  #menu_label:after,#menu_text_bar{
        background-color: ${(props) => props.theme.descriptionText};

  }

  #nav_ul{
    background: ${({ theme }) => theme.body};
  }

  /* div{
    border: 1px dashed red;
  } */

`;
