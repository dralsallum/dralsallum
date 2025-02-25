// AboutAli.jsx
import React from "react";
import styled from "styled-components";
import Charcter from "../../assets/hero-saud.png";

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
    text-align: center; /* على الجوال، سيتم توسيط النص */
  }
`;

/* تغليف الصورة الدائرية */
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
  محتوى النص: إزالة `flex: 1;` حتى لا يتمدد،
  تحديد الحد الأقصى للعرض وتوسيطه داخل التخطيط المرن
*/
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

export default function AboutAli() {
  return (
    <AboutContainer>
      <ImageWrapper>
        <ProfileImage src={Charcter} alt="الملف الشخصي" />
      </ImageWrapper>

      <TextContent>
        <SubTitle>
          قناة يوتيوب يمكن أن تغير حياتك تمامًا – لقد غيرت حياتي
        </SubTitle>

        <Paragraph>
          بدأت في صنع فيديوهات يوتيوب في عام 2017، أثناء عامي الأخير في كلية
          الطب بجامعة كامبريدج.
        </Paragraph>
        <Paragraph>
          بدأت من الصفر: <strong>0 مشاهدة</strong>، <strong>0 مشترك</strong> و
          <strong>0 دولار</strong> كإيرادات. لم أكن أعرف شيئًا عن التصوير أو
          المونتاج أو نشر الفيديوهات.
        </Paragraph>
        <Paragraph>
          لكن بعد مشاهدة مئات الدروس على يوتيوب، تعلمت الأساسيات. بعد 18 شهرًا،
          وصل عدد مشتركي قناتي إلى <strong>100,000 مشترك</strong> وأصبحت أرباحها
          تعادل راتبي كطبيب بدوام كامل.
        </Paragraph>
        <Paragraph>
          وبعد عامين، تجاوز عدد المشتركين المليون، وبلغت الإيرادات السنوية{" "}
          <strong>مليون دولار</strong>، وأخيرًا قررت الالتزام الكامل بيوتيوب.
        </Paragraph>
      </TextContent>
    </AboutContainer>
  );
}
