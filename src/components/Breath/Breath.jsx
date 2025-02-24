// AboutAli.jsx
import React from "react";
import styled from "styled-components";
import Charcter from "../../assets/hero-ali.webp";

const AboutContainer = styled.section`
  background: #edf4f7;
  margin: 20px 30px;
  padding: 3rem 2rem;
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 10px 15px;
    border-radius: 10px;
    flex-direction: column;
    text-align: center; /* On mobile, text will center-align */
  }
`;

/* Circle image wrapper */
const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
    margin: 0 auto 1rem;
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

/* 
  Text content: remove `flex: 1;` so it doesn't stretch, 
  give it a max width, and center it within the flex layout 
*/
const TextContent = styled.div`
  max-width: 600px;

  /* If you'd like text centered on desktop too, uncomment:
     text-align: center; 
   */
`;

const SubTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #000;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #333;
  line-height: 1.7;
  margin-bottom: 1rem;
`;

export default function AboutAli() {
  return (
    <AboutContainer>
      <ImageWrapper>
        <ProfileImage src={Charcter} alt="Profile" />
      </ImageWrapper>

      <TextContent>
        <SubTitle>
          A YouTube Channel Can Completely Change Your Life – It Changed Mine
        </SubTitle>

        <Paragraph>
          I started making YouTube videos in 2017, while in my final year of
          medical school at Cambridge University.
        </Paragraph>
        <Paragraph>
          I started off with <strong>0 views</strong>,{" "}
          <strong>0 subscribers</strong> and <strong>$0</strong> in revenue. I
          knew absolutely nothing about filming, editing, or publishing videos.
        </Paragraph>
        <Paragraph>
          But after watching hundreds of tutorials on YouTube, I figured out the
          basics. 18 months later, my channel reached{" "}
          <strong>100,000 subscribers</strong> and was making as much money as
          my full-time job working as a doctor.
        </Paragraph>
        <Paragraph>
          Two years later, I hit <strong>1 million subscribers</strong>,{" "}
          <strong>$1m in annual revenue</strong>, and finally made the leap to
          go all-in on YouTube.
        </Paragraph>
      </TextContent>
    </AboutContainer>
  );
}
