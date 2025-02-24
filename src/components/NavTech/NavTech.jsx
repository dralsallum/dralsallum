import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/drslallum.png";

/* ====== Styled Components for Navbar ====== */
const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f8f6f2;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

/* Make Logo a Link component so it navigates to /home */
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-decoration: none; /* Remove underline from link */
`;

// Styled component for the logo image
const LogoImage = styled.img`
  width: 200px;
  height: auto;
  margin-right: 0.5rem;

  @media (max-width: 768px) {
    width: 150px;
  }
`;

const NavLinks = styled.nav`
  display: flex;
  gap: 1.5rem;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile (we'll use the mobile menu button) */
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const SubscribeButton = styled.button`
  background: #ff7143;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none; /* Hide on mobile */
  }
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: #ff7143;
    color: #fff;
    border: none;
    width: 48px;
    height: 48px;
    border-radius: 8px;
    font-size: 1.5rem;
    cursor: pointer;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: #fff;
    position: absolute;
    top: 70px; /* Adjust based on header height */
    right: 1rem;
    left: 1rem;
    z-index: 999;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MobileMenuItem = styled.li`
  margin: 0.5rem 0;

  a {
    text-decoration: none;
    color: #333;
    font-size: 1.1rem;
    font-weight: 500;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const NavTech = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <Header>
        {/* Logo now wrapped in a Link */}
        <Logo to="/">
          <LogoImage src={logo} alt="Dralsallum Logo" />
        </Logo>

        {/* Desktop Nav */}
        <NavLinks>
          <NavLink href="#">My Book</NavLink>
          <NavLink href="#">Free Resources</NavLink>
          <NavLink href="#">YouTube Academy</NavLink>
          <NavLink href="#">Productivity Lab</NavLink>
          <NavLink href="#">LifeOS</NavLink>
        </NavLinks>

        {/* Subscribe & Mobile Toggle */}
        <SubscribeButton>Join 260k+ Subscribers</SubscribeButton>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </Header>

      {/* Mobile Menu (conditionally shown) */}
      {isMenuOpen && (
        <MobileMenuContainer>
          <MobileMenuList>
            <MobileMenuItem>
              <a href="#">My Book</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">Free Resources</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">YouTube Academy</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">Productivity Lab</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">LifeOS</a>
            </MobileMenuItem>
          </MobileMenuList>
        </MobileMenuContainer>
      )}
    </>
  );
};

export default NavTech;
