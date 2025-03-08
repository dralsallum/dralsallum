import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Footer, NavTech } from "../components";
// If you have a NavTech component, uncomment and adjust the import path:
// import NavTech from "../NavTech/NavTech";

const ContainerAll = styled.div`
  direction: rtl;
  margin: 20px 30px;
  background: #f8f6f2;
  border-radius: 16px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    margin: 10px 15px;
    border-radius: 10px;
    min-height: 100vh;
    background: #f8f6f2;
    overflow: hidden;
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 1rem;
    max-width: 100%;
  }
`;

const SubscriptionBox = styled.div`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1rem;
  font-family: serif;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 0.5rem;
  font-size: 1rem;
  color: #fff;
  font-weight: 500;
  text-decoration: underline;
  cursor: pointer;
  padding: 0.75rem 1.5rem;
  background: #87ceeb;
  border-radius: 2rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #70bce0;
  }
`;

const SubscriptionPage = () => {
  return (
    <>
      <ContainerAll>
        <NavTech />

        <MainContent>
          <SubscriptionBox>
            <Title>ترقية اشتراكك</Title>
            <Description>
              للوصول إلى هذا المحتوى المتميز، أنت بحاجة إلى اشتراك مدفوع. قم
              بالترقية الآن لمتابعة الوصول إلى كل جديد.
            </Description>
            <StyledLink to="/job">ترقية الآن</StyledLink>
            <StyledLink to="/">العودة للصفحة الرئيسية</StyledLink>
          </SubscriptionBox>
        </MainContent>
      </ContainerAll>
      <Footer />
    </>
  );
};

export default SubscriptionPage;
