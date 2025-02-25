import React, { useState } from "react";
import styled from "styled-components";
import Charcter from "../../assets/hero-saud.png";
import Avatar from "../../assets/Avatars.png";
import Plan from "../../assets/plane.png"; // New import for the plan image
import NavTech from "../NavTech/NavTech";
import { publicRequest } from "../../requestMethods";

const ContainerAll = styled.div`
  direction: rtl;
  margin: 20px 30px;
  background: #f8f6f2;
  border-radius: 16px;
  overflow: hidden;
  position: relative; /* Needed for the mobile menu positioning */

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
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 1rem;
    text-align: center;
    max-width: 100%;
    gap: 1rem;
  }
`;

const ContentSection = styled.div`
  flex: 1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ProfileImageWrapper = styled.div`
  @media (max-width: 768px) {
    position: relative;
    width: 260px;
    height: 260px;

    &:before {
      content: "";
      position: absolute;
      top: -20px;
      left: -20px;
      right: -20px;
      bottom: -20px;
      border-radius: 50%;
      z-index: 0;
    }
  }
`;

const ProfileImage = styled.img`
  width: 350px;
  height: 350px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
    position: relative;
    z-index: 1;
  }
`;

const Heading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  font-family: serif;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`;

const Underline = styled.span`
  display: inline-block;
  border-bottom: 2px solid #87ceeb;
`;

const Description = styled.p`
  font-size: 1.25rem;
  margin-bottom: 2rem;
  line-height: 1.6;
  text-align: right;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1rem;
  }
`;

const NewsletterSection = styled.section`
  background: #fff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const NewsletterTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-align: right;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const PlanIcon = styled.img`
  width: 60px;
  height: 60px;
`;

const ReviewSection = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin: 1rem 0;
  }
`;

const ReviewImages = styled.div`
  display: flex;
  margin-left: 0.5rem;

  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin-left: -8px;
    border: 2px solid white;
  }
`;

const Stars = styled.div`
  color: #ffd700;
`;

const NewsletterDescription = styled.p`
  color: #666;
  margin-bottom: 1rem;
  text-align: right;
`;

const SubscriberCount = styled.p`
  color: #666;
  font-size: 0.9rem;
  text-align: right;
`;

const EmailInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 2rem;
  width: 100%;
  margin-bottom: 1rem;
  background: #f5f5f5;
  font-size: 1rem;
  color: #666;

  &::placeholder {
    color: #666;
  }
`;

const SubscribeBtn = styled.button`
  width: 100%;
  padding: 1rem;
  border: none;
  border-radius: 2rem;
  background: #87ceeb;
  color: #000;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  margin-bottom: 1rem;
`;

const PrivacyText = styled.p`
  color: #666;
  font-size: 0.9rem;
  line-height: 1.5;
  text-align: right;

  a {
    color: #666;
    text-decoration: underline;
  }
`;

const Very = () => {
  // State to hold the email input
  const [email, setEmail] = useState("");

  // Toggle for your nav menu (not directly related to the email submission)
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Handler function when user clicks "اشترك"
  const handleSubscribe = async () => {
    if (!email) return alert("الرجاء إدخال بريد إلكتروني");

    try {
      // Make a POST request to /apply with the email
      const response = await publicRequest.post("/applies", { email });
      console.log("Email saved:", response.data);

      // Optionally, clear the email input and show success
      setEmail("");
      alert("تم الاشتراك بنجاح! شكراً لك.");
    } catch (error) {
      console.error("Error saving email:", error);
      alert("حدث خطأ أثناء الاشتراك. يرجى المحاولة لاحقًا.");
    }
  };

  return (
    <ContainerAll>
      <NavTech />

      <MainContent>
        <ProfileImageWrapper>
          <ProfileImage src={Charcter} alt="Profile" />
        </ProfileImageWrapper>

        <ContentSection>
          <Heading>
            مرحبًا أصدقائي! <Underline></Underline>
          </Heading>
          <Description>
            أنا سعود. طبيب رائد أعمال، وصانع محتوى على يوتيوب، ومؤلف أكثر الكتب
            مبيعًا في نيويورك تايمز "إنتاجية تبعث على الشعور بالراحة".
          </Description>

          <NewsletterSection>
            <NewsletterTitle>
              اشترك في لايف نوتس <PlanIcon src={Plan} alt="Plan Icon" />
            </NewsletterTitle>
            <SubscriberCount>
              انضم إلى مجتمع متنامٍ يضم أكثر من 260,000 قارئ ودود.
            </SubscriberCount>

            <ReviewSection>
              <ReviewImages>
                <img src={Avatar} alt="Reviewer 1" />
                <img src={Avatar} alt="Reviewer 2" />
                <img src={Avatar} alt="Reviewer 3" />
              </ReviewImages>
              <Stars>★★★★★</Stars>
              <span>200+ مراجعات</span>
            </ReviewSection>

            <NewsletterDescription>
              أشارك نصائح عملية للإنتاجية، ونصائح حياتية مفيدة، ورؤى عالية
              الجودة من جميع أنحاء الويب مباشرة إلى بريدك الإلكتروني.
            </NewsletterDescription>

            {/* Bind the input value to `email` and update onChange */}
            <EmailInput
              type="email"
              placeholder="بريدك الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Call handleSubscribe on button click */}
            <SubscribeBtn onClick={handleSubscribe}>اشترك</SubscribeBtn>

            <PrivacyText>
              من خلال تقديم هذا النموذج، ستقوم بالاشتراك في النشرة الإخبارية
              المجانية. قد أرسل لك أيضًا رسائل بريد إلكتروني أخرى حول دوراتي.
              يمكنك إلغاء الاشتراك في أي وقت. لمزيد من المعلومات، راجع{" "}
              <a href="#">سياسة الخصوصية</a>.
            </PrivacyText>
          </NewsletterSection>
        </ContentSection>
      </MainContent>
    </ContainerAll>
  );
};

export default Very;
