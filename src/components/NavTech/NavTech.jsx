import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/drslallum.png";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../../redux/userRedux";
import Menu from "../../assets/menu.png";

/* ====== Styled Components for Navigation Bar ====== */
const Header = styled.header`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: #f8f6f2;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
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
  width: 2000px;
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
    display: none;
  }
`;

const NavLinkStyled = styled(Link)`
  font-size: 18px;
  text-decoration: none;
  color: #000;
  font-weight: 500;
  &:hover {
    text-decoration: underline;
    color: #000;
  }
`;

const BrowseButton = styled.button`
  background: none;
  border: none;
  color: #000;
  font-weight: 500;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }

  &:focus {
    outline: none;
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
  text-decoration: none;
  display: inline-block;
  text-align: center;
  transition: background 0.2s ease;

  &:hover {
    background: #ff541bff;
    color: #fff;
  }

  &:focus {
    outline: none;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const SignOutButton = styled.button`
  background: #ff7143;
  color: #fff;
  padding: 0.6rem 1.2rem;
  border-radius: 999px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background 0.2s ease;

  &:hover {
    background: #ff541bff;
    color: #fff;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileButtonGroup = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;

const UploadButton = styled(Link)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    color: #ff7143;
    border: 2px solid #ff7143;
    height: 40px;
    padding: 0 0.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 800;
    white-space: nowrap;

    &:active {
      background: #f8f6f2;
      outline: none;
    }

    &:focus {
      outline: none;
      color: #ff7143;
    }
  }
`;

const MenuButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ff7143;
    color: #fff;
    border: none;
    width: 44px;
    height: 44px;
    border-radius: 8px;
    cursor: pointer;
    transition: background 0.2s ease;
    padding: 0;

    &:active {
      background: #ff541bff;
    }
  }
  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    width: 40px;
    height: 40px;
  }
`;

const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  filter: brightness(0) invert(1);
  transition: transform 0.2s ease;

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
  }
`;

const CloseIcon = styled.span`
  font-size: 1.3rem;
  line-height: 1;
  color: #fff;

  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`;

const MobileMenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    background: #fff;
    position: absolute;
    top: 65px;
    right: 1rem;
    left: 1rem;
    z-index: 999;
    padding: 1rem;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    max-height: calc(100vh - 90px);
    overflow-y: auto;
  }

  @media (max-width: 480px) {
    top: 60px;
    right: 0.5rem;
    left: 0.5rem;
    padding: 0.75rem;
  }
`;

const MobileBrowseButton = styled.button`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  padding: 0.875rem 0.5rem;
  transition: background 0.2s ease;
  background: none;
  border: none;
  width: 100%;
  text-align: right;
  cursor: pointer;

  &:hover {
    background: #f8f6f2;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background: #f0ede5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.75rem 0.5rem;
  }
`;

const MobileMenuList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MobileMenuItem = styled.li`
  margin: 0;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    border-bottom: none;
  }
`;

const MobileMenuLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  display: block;
  padding: 0.875rem 0.5rem;
  transition: background 0.2s ease;
  text-align: right;

  &:hover {
    background: #f8f6f2;
  }

  &:active {
    background: #f0ede5;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
    padding: 0.75rem 0.5rem;
  }
`;

const MobileAuthButton = styled(Link)`
  display: block;
  background: #ff7143;
  color: #fff;
  padding: 0.875rem 1rem;
  margin-top: 0.75rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  transition: background 0.2s ease;

  &:hover {
    background: #ff541bff;
    color: #fff;
  }

  &:active {
    background: #d4a903;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
  }
`;

const MobileSignOutButton = styled.button`
  display: block;
  width: 100%;
  background: #ff7143;
  color: #fff;
  padding: 0.875rem 1rem;
  margin-top: 0.75rem;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  font-size: 1rem;
  text-align: center;
  transition: background 0.2s ease;

  &:hover {
    background: #ff541bff;
    color: #fff;
  }

  &:active {
    background: #d4a903;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 480px) {
    padding: 0.75rem 1rem;
    font-size: 0.95rem;
  }
`;

/* ====== Improved Browse Modal Styled Components ====== */
const BrowseModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 5rem 1rem 1rem;
  overflow-y: auto;
  animation: fadeIn 0.25s ease-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    padding: 0rem;
    align-items: center;
  }
`;

const BrowseModalContent = styled.div`
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  max-width: 950px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
  animation: slideDown 0.35s cubic-bezier(0.16, 1, 0.3, 1);

  /* Custom scrollbar for desktop */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: #d0d0d0;
    border-radius: 10px;

    &:hover {
      background: #b0b0b0;
    }
  }

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-30px) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem);
    max-width: 500px;
    border-radius: 16px;
    padding: 2rem 1.5rem 2.5rem;
    max-height: 80vh;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
    animation: popIn 0.35s cubic-bezier(0.16, 1, 0.3, 1);

    @keyframes popIn {
      from {
        opacity: 0;
        transform: scale(0.9);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }
  }

  @media (max-width: 480px) {
    padding: 1.75rem 1.25rem 2rem;
    width: calc(100% - 2rem);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1.25rem;
  left: 1.25rem;
  background: #f5f5f5;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: all 0.2s ease;
  z-index: 10;

  &:hover {
    background: #e8e8e8;
    color: #333;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    top: 1rem;
    left: 1rem;
    width: 40px;
    height: 40px;
    font-size: 1.4rem;
  }
`;

const BrowseTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  text-align: right;
  color: #1a1a1a;
  letter-spacing: -0.02em;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 1.25rem;
  }

  @media (max-width: 480px) {
    font-size: 1.35rem;
  }
`;

const TabContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  border-bottom: 2px solid #e8e8e8;
  margin-bottom: 2rem;
  justify-content: flex-end;

  @media (max-width: 768px) {
    gap: 2rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    gap: 1.5rem;
  }
`;

const Tab = styled.button`
  background: none;
  border: none;
  font-size: 1.05rem;
  font-weight: 600;
  padding: 0.75rem 0.25rem;
  cursor: pointer;
  color: ${(props) => (props.active ? "#000" : "#999")};
  border-bottom: 3px solid
    ${(props) => (props.active ? "#ff7143" : "transparent")};
  margin-bottom: -2px;
  transition: all 0.25s ease;
  position: relative;

  &:hover {
    color: #000;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    right: 0;
    height: 3px;
    background: #ff7143;
    transform: scaleX(${(props) => (props.active ? "1" : "0")});
    transition: transform 0.25s ease;
  }

  &:focus {
    outline: none;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.65rem 0.25rem;
  }

  @media (max-width: 480px) {
    font-size: 0.95rem;
  }
`;

const SpecialtiesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.75rem 2.5rem;
  padding: 0.5rem 0;

  @media (max-width: 968px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.5rem 2rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem 1.5rem;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const SpecialtyLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-size: 0.975rem;
  font-weight: 500;
  text-align: right;
  padding: 0.65rem 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;

  &:hover {
    color: #000;
    background: #f8f6f2;
    transform: translateX(-2px);
  }

  &:active {
    transform: translateX(-1px);
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75rem 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.85rem 0.75rem;
  }
`;

const SeeMoreLink = styled(Link)`
  text-decoration: none;
  color: #ff7143;
  font-size: 0.975rem;
  font-weight: 600;
  text-align: right;
  padding: 0.65rem 0.5rem;
  border-radius: 6px;
  transition: all 0.2s ease;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: "←";
    transition: transform 0.2s ease;
  }

  &:hover {
    color: #ff541bff;
    background: #fff9e6;
    transform: translateX(-2px);

    &::before {
      transform: translateX(-3px);
    }
  }

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 0.75rem 0.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    padding: 0.85rem 0.75rem;
  }
`;

const NavTech = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("specialties");
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.user.currentUser);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleBrowse = () => {
    setIsBrowseOpen(!isBrowseOpen);
    setIsMenuOpen(false);
  };

  const handleMobileBrowseClick = () => {
    setIsMenuOpen(false);
    setTimeout(() => {
      setIsBrowseOpen(true);
    }, 150);
  };

  const handleSignOut = () => {
    dispatch(signOut());
    setIsMenuOpen(false);
  };

  const specialties = [
    {
      name: "المعالجون بتقويم العمود الفقري",
      path: "/reservation/chiropractors",
    },
    { name: "أطباء الغدد الصماء", path: "/reservation/endocrinologists" },
    { name: "أخصائيو البصريات", path: "/reservation/optometrists" },
    { name: "أطباء نفسيون", path: "/reservation/psychiatrists" },
    { name: "أطباء الأسنان", path: "/reservation/dentists" },
    { name: "أطباء العيون", path: "/reservation/eye-doctors" },
    { name: "جراحو العظام", path: "/reservation/orthopedic-surgeons" },
    { name: "أخصائيو علم النفس", path: "/reservation/psychologists" },
    { name: "أطباء الجلدية", path: "/reservation/dermatologists" },
    { name: "أطباء التوليد وأمراض النساء", path: "/reservation/obgyns" },
    { name: "أطباء الأطفال", path: "/reservation/podiatrists" },
    {
      name: "المعالجون النفسيون والمستشارون",
      path: "/reservation/therapist-counselors",
    },
    { name: "أطباء الأنف والأذن والحنجرة", path: "/reservation/ent" },
    { name: "أطباء العيون", path: "/reservation/ophthalmologists" },
    { name: "أطباء الرعاية الأولية", path: "/reservation/primary-care" },
  ];

  return (
    <>
      <Header>
        <Logo to="/">
          <LogoImage src={logo} alt="شعار درس السلوم" />
        </Logo>

        <NavLinks>
          <BrowseButton onClick={toggleBrowse}>تصفّح</BrowseButton>
          <NavLinkStyled to="/support">المساعدة</NavLinkStyled>
          <NavLinkStyled to="/upload">أضف شركتك لطلب استثمار</NavLinkStyled>
          <NavLinkStyled to="/newsletter">النشرة البريدية</NavLinkStyled>
        </NavLinks>

        {currentUser ? (
          <SignOutButton onClick={() => dispatch(signOut())}>
            تسجيل الخروج
          </SignOutButton>
        ) : (
          <SubscribeButton to="/login">
            تسجيل الدخول / حساب جديد
          </SubscribeButton>
        )}

        <MobileButtonGroup>
          <MenuButton onClick={toggleMenu}>
            {isMenuOpen ? (
              <CloseIcon>✕</CloseIcon>
            ) : (
              <MenuIcon src={Menu} alt="Menu" />
            )}
          </MenuButton>
          <UploadButton to="/task">استثمر بشركات ناشئة</UploadButton>
        </MobileButtonGroup>
      </Header>

      {/* Browse Modal */}
      {isBrowseOpen && (
        <BrowseModalOverlay onClick={toggleBrowse}>
          <BrowseModalContent onClick={(e) => e.stopPropagation()}>
            <CloseButton onClick={toggleBrowse}>✕</CloseButton>

            <TabContainer>
              <Tab
                active={activeTab === "procedures"}
                onClick={() => setActiveTab("procedures")}
              >
                الإجراءات
              </Tab>
              <Tab
                active={activeTab === "specialties"}
                onClick={() => setActiveTab("specialties")}
              >
                التخصصات
              </Tab>
            </TabContainer>

            {activeTab === "specialties" && (
              <>
                <BrowseTitle>تصفح أفضل التخصصات</BrowseTitle>
                <SpecialtiesGrid>
                  {specialties.map((specialty, index) => (
                    <SpecialtyLink
                      key={index}
                      to={specialty.path}
                      onClick={toggleBrowse}
                    >
                      {specialty.name}
                    </SpecialtyLink>
                  ))}
                  <SeeMoreLink to="/" onClick={toggleBrowse}>
                    عرض المزيد من التخصصات
                  </SeeMoreLink>
                </SpecialtiesGrid>
              </>
            )}

            {activeTab === "procedures" && (
              <>
                <BrowseTitle>تصفح الإجراءات الطبية</BrowseTitle>
                <SpecialtiesGrid>
                  <p style={{ textAlign: "right", color: "#666" }}>
                    سيتم إضافة الإجراءات قريبًا
                  </p>
                </SpecialtiesGrid>
              </>
            )}
          </BrowseModalContent>
        </BrowseModalOverlay>
      )}

      {/* Mobile Menu */}
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
              <MobileMenuLink to="/task">استثمر بشركات ناشئة</MobileMenuLink>
            </MobileMenuItem>
            <MobileMenuItem>
              <MobileMenuLink to="/main/إنتاجية%20عالية:%20مفتاح%20النجاح%20والتوازن%20في%20الحياة">
                الانتاجية
              </MobileMenuLink>
            </MobileMenuItem>
          </MobileMenuList>

          {currentUser ? (
            <MobileSignOutButton onClick={handleSignOut}>
              تسجيل الخروج
            </MobileSignOutButton>
          ) : (
            <MobileAuthButton to="/login" onClick={toggleMenu}>
              تسجيل الدخول / حساب جديد
            </MobileAuthButton>
          )}
        </MobileMenuContainer>
      )}
    </>
  );
};

export default NavTech;
