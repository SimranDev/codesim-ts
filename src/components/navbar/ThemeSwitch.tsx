import styled, { ThemeProvider } from "styled-components";
import {
  darkTheme,
  GlobalStyles,
  lightTheme,
} from "../../helpers/view-helper/themes";
import { useTheme } from "../../hooks/useTheme";

const ThemeSwitch: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <SwitchContainer>
        <ThemeName>LIGHT</ThemeName>
        <SwitchLabel>
          <SwitchInput type="checkbox" onChange={toggleTheme} id="checkbox" />
          <SwitchSpan />
        </SwitchLabel>
        <ThemeName>DARK</ThemeName>
      </SwitchContainer>
    </ThemeProvider>
  );
};

export default ThemeSwitch;

const SwitchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SwitchLabel = styled.label`
  position: relative;
  width: 4.2em;
  height: 2em;

  & input {
    display: none;
  }

  @media (max-width: 760px) {
    width: 2.5em;
    height: 1.4em;
  }
`;

const SwitchSpan = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: white;
  transition: 0.5s;
  background-color: #424242;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);
  border-radius: 35px;

  &::before {
    position: absolute;
    content: "";
    top: 3.2px;
    left: 2.2px;
    background-color: gold;
    transition: 0.5s;
    border-radius: 250px;
    width: 1.7em;
    height: 1.6em;
    box-shadow: 0px 3px 5px rgb(0 0 0 / 30%);
  }

  @media (max-width: 760px) {
    &::before {
      top: 2.2px;
      left: 2px;
      width: 1.05em;
      height: 1.1em;
    }
  }
`;

const SwitchInput = styled.input`
  &:checked + ${SwitchSpan} {
    background-color: whitesmoke;
  }
  &:checked + ${SwitchSpan}::before {
    transform: translateX(40px) rotateZ(-50deg);
    background: grey;
    border-top-left-radius: 50px;
    border-top-right-radius: 50px;
    width: 1.8em;
    height: 1.1em;
    top: 10.4px;
    left: -0.5px;
    box-shadow: 0px 3px 5px rgb(0 0 0 / 30%);
  }

  @media (max-width: 768px) {
    &:checked + ${SwitchSpan}::before {
      top: 8px;
      left: -17.5px;
      width: 1.2em;
      height: 0.7em;
    }
  }
`;

const ThemeName = styled.span`
  font-size: 7px;
  font-weight: 900;
  transform: rotate(-90deg);
  width: 12px;
  line-height: 7px;
  letter-spacing: 1px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:nth-child(3) {
    transform: rotate(90deg);
  }

  @media (max-width: 768px) {
    font-size: 5px;
    width: 10px;
  }
`;
