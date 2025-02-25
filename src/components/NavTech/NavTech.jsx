import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/drslallum.png";

/* ====== المكونات المُنسقة لشريط التنقل ====== */
const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f8f6f2;
  direction: rtl;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

/* جعل الشعار عنصر Link للتنقل إلى الصفحة الرئيسية */
const Logo = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;
  color: #000;
  text-decoration: none; /* إزالة التسطير من الرابط */
`;

// مكون مُنسق لصورة الشعار
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
    display: none; /* إخفاؤها على الجوال (سيتم استخدام زر القائمة) */
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
    display: none; /* إخفاؤها على الجوال */
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
    top: 70px; /* تعديل وفقًا لارتفاع الهيدر */
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
        {/* الشعار مغلف الآن بعنصر Link */}
        <Logo to="/">
          <LogoImage src={logo} alt="شعار درس السلوم" />
        </Logo>

        {/* قائمة التنقل لسطح المكتب */}
        <NavLinks>
          <NavLink href="#">كتابي</NavLink>
          <NavLink href="#">موارد مجانية</NavLink>
          <NavLink href="#">أكاديمية يوتيوب</NavLink>
          <NavLink href="#">مختبر الإنتاجية</NavLink>
          <NavLink href="#">لايف أو إس</NavLink>
        </NavLinks>

        {/* زر الاشتراك وتبديل القائمة للجوال */}
        <SubscribeButton>انضم إلى أكثر من 260 ألف مشترك</SubscribeButton>
        <MenuButton onClick={toggleMenu}>☰</MenuButton>
      </Header>

      {/* قائمة الهاتف (تظهر بناءً على الشرط) */}
      {isMenuOpen && (
        <MobileMenuContainer>
          <MobileMenuList>
            <MobileMenuItem>
              <a href="#">كتابي</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">موارد مجانية</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">أكاديمية يوتيوب</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">مختبر الإنتاجية</a>
            </MobileMenuItem>
            <MobileMenuItem>
              <a href="#">لايف أو إس</a>
            </MobileMenuItem>
          </MobileMenuList>
        </MobileMenuContainer>
      )}
    </>
  );
};

export default NavTech;
