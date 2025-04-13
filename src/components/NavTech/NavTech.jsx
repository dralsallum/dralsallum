import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../globalStyles";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./NavTech.elements";

const NavTech = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <IconContext.Provider value={{ color: "#000000" }}>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon />
              هاي / فيتامينز
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to="/">الصفحة الرئسية</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/services">خدماتنا</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="/products">منتجاتنا</NavLinks>
              </NavItem>
              <NavItemBtn>
                {button ? (
                  <NavBtnLink to="/sign-up">
                    <Button primary>سجل الان</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to="/sign-up">
                    <Button fontBig primary>
                      سجل الان
                    </Button>
                  </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavTech;
