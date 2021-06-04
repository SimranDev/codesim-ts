import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";

const Navbar: React.FC = () => {
  return (
    <Container>
      <section>
        <ThemeSwitchContainer>
          <ThemeSwitch />
        </ThemeSwitchContainer>
        <LogoContainer>CodeSim</LogoContainer>
        <NavLinksContainer>
          <ul>
            <li>
              <Link to="/">Playground</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
          </ul>
        </NavLinksContainer>
      </section>
    </Container>
  );
};
export default Navbar;

const Container = styled.nav`
  border: 1px dashed red;
  width: 100%;

  section {
    display: flex;
    max-width: 1200px;
    margin: auto;
    height: 50px;
  }
`;

const ThemeSwitchContainer = styled.div`
  display: flex;
  border: 1px dashed pink;
  width: 35%;
`;

const LogoContainer = styled.div`
  border: 1px dashed green;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--logo-font);
  font-size: 42px;
`;

const NavLinksContainer = styled.div`
  border: 1px dashed pink;
  width: 35%;
  display: flex;

  ul {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    /* border: 1px dashed red; */
    width: 100%;
  }

  li {
    list-style: none;
    border: 1px dashed red;
  }

  a {
    text-decoration: none;
  }
`;
