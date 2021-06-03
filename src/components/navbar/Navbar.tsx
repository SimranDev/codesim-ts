import React from "react";
import styled from "styled-components";

const Navbar: React.FC = () => {
  return (
    <Container>
      <div>
        <ThemeSwitchContainer></ThemeSwitchContainer>
        <LogoContainer>CodeSim</LogoContainer>
        <NavLinksContainer></NavLinksContainer>
      </div>
    </Container>
  );
};
export default Navbar;

const Container = styled.nav`
  border: 1px dashed red;
  width: 100%;

  div {
    display: flex;
    max-width: 1200px;
    margin: auto;
    height: 60px;
  }
`;

const ThemeSwitchContainer = styled.div`
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
`;
