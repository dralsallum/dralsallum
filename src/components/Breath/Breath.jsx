// AboutAli.jsx
import React from "react";
import styled from "styled-components";
import Character from "../../assets/hero-saud.png";

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
  direction: rtl;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    margin: 10px 15px;
    border-radius: 10px;
    flex-direction: column;
    text-align: center;
  }
`;

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

const TextContent = styled.div`
  max-width: 600px;
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

const Breath = () => {
  return (
    <AboutContainer>
      <ImageWrapper>
        <ProfileImage src={Character} alt="الملف الشخصي" />
      </ImageWrapper>

      <TextContent>
        <SubTitle>تمكين الابداع من خلال المعرفة والابتكار</SubTitle>

        <Paragraph>
          أنا طبيب ومبرمج اتجهت لإنشاء المحتوى كوسيلة لمساعدة الناس على التعلم
          وتطوير أنفسهم.
        </Paragraph>
        <Paragraph>
          تخرجت من جامعة الملك سعود في عام 2017، ومنذ ذلك الحين، كرست نفسي لدمج
          خبرتي في الطب والتكنولوجيا لإلهام وتعليم الآخرين.
        </Paragraph>
        <Paragraph>
          هدفي هو إنشاء محتوى جذاب ومفيد يمكِّنك من النمو، وتعلم مهارات جديدة،
          وإحداث تغيير إيجابي في حياتك.
        </Paragraph>
      </TextContent>
    </AboutContainer>
  );
};

export default Breath;
