import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ThemeSwitch from "./ThemeSwitch";

const Navbar: React.FC = () => {
  const [check, setCheck] = useState(false);

  return (
    <Container>
      <section>
        <ThemeSwitchContainer>
          <ThemeSwitch />
        </ThemeSwitchContainer>
        <LogoContainer>CodeSim</LogoContainer>
        <NavLinksContainer>
          <MenuContainer>
            <input
              type="checkbox"
              id="menu_checkbox"
              onChange={() => setCheck(!check)}
            />
            <label htmlFor="menu_checkbox" id="menu_label">
              <div id="menu_text_bar"></div>
            </label>
          </MenuContainer>
          <MenuInput checked={check} />

          <Ul id="nav_ul">
            <li>
              <Link to="/">Playground</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li></li>
          </Ul>
        </NavLinksContainer>
      </section>
    </Container>
  );
};
export default Navbar;

const Container = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  section {
    display: flex;
    max-width: 1200px;
    margin: auto;
    height: 60px;
  }

  @media (max-width: 768px) {
    margin: 0 6px;

    section {
      height: 50px;
    }
  }
`;

const ThemeSwitchContainer = styled.div`
  display: flex;
  width: 35%;
`;

const LogoContainer = styled.div`
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: var(--logo-font);
  cursor: pointer;
  font-size: 46px;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  padding: 0;

  li {
    list-style: none;

    :hover {
      border-top: 1px solid ${(prop) => prop.theme.descriptionText};
    }
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    position: fixed;
    right: -100%;
    top: 34px;
    flex-direction: column;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    text-align: center;
    transition: 0.4s;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.12);
    li {
      padding: 20px 0 0 0;
    }
  }
`;

const MenuInput = styled.input.attrs({ type: "checkbox" })`
  display: none;

  :checked + ${Ul} {
    right: 0;
  }
`;

const MenuContainer = styled.div`
  width: 22px;
  overflow: hidden;
  display: none;
  position: absolute;
  @media (max-width: 768px) {
    display: block;
    position: absolute;
  }

  #menu_checkbox {
    display: none;
  }

  #menu_label {
    position: relative;
    display: block;
    height: 29px;
    cursor: pointer;
  }

  #menu_label:before,
  #menu_label:after,
  #menu_text_bar {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2.6px;
  }

  #menu_label:before,
  #menu_label:after {
    content: "";
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  #menu_label:before {
    top: 0;
  }

  #menu_label:after {
    top: 7px;
  }

  #menu_text_bar {
    top: 14px;
  }

  #menu_text_bar:before {
    content: "MENU";
    position: absolute;
    top: 16px;
    right: 0;
    left: 0;
    color: ${(props) => props.theme.text};
    font-size: 7px;
    font-weight: bold;
    font-family: "Montserrat", Arial, Helvetica, sans-serif;
    text-align: center;
  }

  #menu_checkbox:checked + #menu_label:before {
    left: -39px;
  }

  #menu_checkbox:checked + #menu_label:after {
    left: 39px;
  }

  #menu_checkbox:checked + #menu_label #menu_text_bar:before {
    animation: moveUpThenDown 0.8s ease 0.2s forwards,
      shakeWhileMovingUp 0.8s ease 0.2s forwards,
      shakeWhileMovingDown 0.2s ease 0.8s forwards;
  }

  @keyframes moveUpThenDown {
    0% {
      top: 0;
    }
    50% {
      top: -15px;
    }
    100% {
      top: -10px;
    }
  }

  @keyframes shakeWhileMovingUp {
    0% {
      transform: rotateZ(0);
    }
    25% {
      transform: rotateZ(-10deg);
    }
    50% {
      transform: rotateZ(0deg);
    }
    75% {
      transform: rotateZ(10deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }

  @keyframes shakeWhileMovingDown {
    0% {
      transform: rotateZ(0);
    }
    80% {
      transform: rotateZ(3deg);
    }
    90% {
      transform: rotateZ(-3deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }
`;

const NavLinksContainer = styled.div`
  width: 35%;
  display: flex;
  position: relative;

  div {
    position: fixed;
    right: 14px;
    top: 14px;
  }
`;
