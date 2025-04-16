import React from "react";
import styled from "styled-components";
import { Woman, Scale, Routine } from "../../assets/index";

// Enhanced styled components with improved mobile responsiveness
const AboutWrapper = styled.div`
  padding: 4rem 1.5rem;
  background-color: #ffffff;
  margin-bottom: 2rem;
  width: 100%;

  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
    margin-bottom: 1rem;
  }
`;

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    gap: 2.5rem;
  }
`;

const AboutContainerTop = styled.h2`
  font-size: 2.2rem;
  font-weight: 700;
  text-align: center;
  margin: 0;
  color: #333;

  @media screen and (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AboutContainerBottom = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: stretch;
  width: 100%;

  @media screen and (max-width: 991px) {
    gap: 2rem;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
`;

const AboutContainerBottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 18rem;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media screen and (max-width: 768px) {
    max-width: 100%;
    width: 100%;
  }
`;

const ImageContainer = styled.div`
  width: 15rem;
  height: 15rem;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 1.5rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 991px) {
    width: 12rem;
    height: 12rem;
  }

  @media screen and (max-width: 768px) {
    width: 10rem;
    height: 10rem;
    margin-bottom: 1rem;
  }
`;

const AboutContainerImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
`;

const AboutContainerBottomHeader = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0 0 0.8rem;
  color: #333;

  @media screen and (max-width: 991px) {
    font-size: 1.2rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
  }
`;

const AboutContainerBottomPara = styled.p`
  font-size: 1.1rem;
  line-height: 1.5;
  color: #666;
  margin: 0;

  @media screen and (max-width: 991px) {
    font-size: 1rem;
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutContainerTop>كيف فيتاميناتنا تعمل</AboutContainerTop>
        <AboutContainerBottom>
          <AboutContainerBottomContainer>
            <ImageContainer>
              <AboutContainerImg src={Woman} alt="Woman illustration" />
            </ImageContainer>
            <AboutContainerBottomHeader>
              أخبرنا عن نفسك
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              قم بإجراء اختبارنا وأخبرنا عن أهدافك ونمط حياتك وقيمك.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>

          <AboutContainerBottomContainer>
            <ImageContainer>
              <AboutContainerImg src={Scale} alt="Scale illustration" />
            </ImageContainer>
            <AboutContainerBottomHeader>
              أخبرنا عن نفسك
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              قم بإجراء اختبارنا وأخبرنا عن أهدافك ونمط حياتك وقيمك.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>

          <AboutContainerBottomContainer>
            <ImageContainer>
              <AboutContainerImg src={Routine} alt="Routine illustration" />
            </ImageContainer>
            <AboutContainerBottomHeader>
              أخبرنا عن نفسك
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              قم بإجراء اختبارنا وأخبرنا عن أهدافك ونمط حياتك وقيمك.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>
        </AboutContainerBottom>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
