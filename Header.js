// src/components/Header.js
import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 50px;
  background-color: #1013;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 2px -2px gray;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: bold;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>RANJANA JHA</Logo>
      <Nav>
        <NavLink href="#home">Home</NavLink>
        <NavLink href="#about">Contact</NavLink>
        <NavLink href="#projects">Projects</NavLink>
        <NavLink href="#contact"> About</NavLink>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
