import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/drslallum.png";

/* ====== Styled Components for Navigation Bar ====== */
const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f8f6f2;
  direction: rtl;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); /* 🌟 Downward subtle shadow */
  position: relative;
  z-index: 1000;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-decoration: none;
`;

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
    display: none; /* Hidden on mobile */
  }
`;

const NavLinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const SubscribeButton = styled(Link)`
  background: #ff7143;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;

  @media (max-width: 768px) {
    display: none;
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
    top: 70px;
    right: 1rem;
    left: 1rem;
    z-index: 1000;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MobileMenuItem = styled.li`
  margin: 0.5rem 0;
`;

const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
  }
`;

const NavTech = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <Header>
        <Logo to="/">
          <LogoImage src={logo} alt="شعار درس السلوم" />
        </Logo>

        <NavLinks>
          <NavLinkStyled to="/job">تطبيق الانجليزي</NavLinkStyled>
          <NavLinkStyled to="/audio">بودكاست</NavLinkStyled>
          <NavLinkStyled to="/personality">أكاديمية التعلم</NavLinkStyled>
          <NavLinkStyled to="/main/طرق%20جني%20الأموال%20عبر%20الإنترنت:%20استراتيجيات%20لتحقيق%20الدخل%20الرقمي">
            دخل الانترنت
          </NavLinkStyled>
          <NavLinkStyled to="/main/إنتاجية%20عالية:%20مفتاح%20النجاح%20والتوازن%20في%20الحياة">
            الانتاجية
          </NavLinkStyled>
        </NavLinks>

        <SubscribeButton to="/login">
          انضم إلى أكثر من 260 ألف مشترك
        </SubscribeButton>

        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </Header>

      {isMenuOpen && (
        <MobileMenuContainer>
          <MobileMenuList>
            <MobileMenuItem>
              <MobileMenuLink to="/job">تطبيق الانجليزي</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink to="/audio">بودكاست</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink to="/personality">أكاديمية التعلم</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink to="/main/طرق%20جني%20الأموال%20عبر%20الإنترنت:%20استراتيجيات%20لتحقيق%20الدخل%20الرقمي">
                دخل الانترنت
              </MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink to="/main/إنتاجية%20عالية:%20مفتاح%20النجاح%20والتوازن%20في%20الحياة">
                الانتاجية
              </MobileMenuLink>
            </MobileMenuItem>
          </MobileMenuList>
        </MobileMenuContainer>
      )}
    </>
  );
};

export default NavTech;
