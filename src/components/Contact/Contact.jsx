import React from "react";
import styled from "styled-components";
import {
  Mail,
  MessageCircle,
  Twitter,
  Send,
  Clock,
  ArrowLeft,
  Phone,
} from "lucide-react";

const PageContainer = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%);
  margin: 1rem;
  padding: 1rem;
  direction: rtl;
  border-radius: 8px;

  @media (min-width: 768px) {
    margin: 1rem;
    padding: 1rem;
  }
`;

const MainWrapper = styled.div`
  max-width: 42rem;
  margin: 0 auto;
`;

const HeaderSection = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const HeaderIcon = styled.div`
  width: 5rem;
  height: 5rem;
  background: linear-gradient(135deg, #fb923c 0%, #ef4444 100%);
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #1f2937;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.125rem;
  color: #4b5563;
  line-height: 1.75;
  margin: 0;
`;

const ContactWrapper = styled.div`
  background: white;
  border-radius: 1rem;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
  padding: 2rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
`;

const ContactList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  border-radius: 0.75rem;
  border: 2px solid #f3f4f6;
  transition: all 0.3s ease;
  cursor: ${(props) => (props.available ? "pointer" : "not-allowed")};
  opacity: ${(props) => (props.available ? "1" : "0.6")};

  ${(props) =>
    props.available &&
    `
    &:hover {
      border-color: #fdba74;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
      transform: translateY(-2px);
    }
  `}

  ${(props) =>
    !props.available &&
    `
    background-color: #f9fafb;
  `}
`;

const IconContainer = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  transition: all 0.3s ease;
  background: ${(props) => props.bgColor || "#6b7280"};

  &:hover {
    background: ${(props) => props.hoverColor || props.bgColor || "#6b7280"};
  }
`;

const ContentSection = styled.div`
  flex: 1;
`;

const ItemTitle = styled.h3`
  font-size: 1.125rem;
  font-weight: 600;
  color: #1f2937;
  margin-bottom: 0.25rem;
`;

const ItemValue = styled.p`
  font-size: 0.875rem;
  color: ${(props) => (props.available ? "#4b5563" : "#9ca3af")};
  margin: 0;
`;

const ArrowIcon = styled.div`
  transition: all 0.3s ease;
  color: #9ca3af;

  ${ContactItem}:hover & {
    color: #fb923c;
    transform: translateX(0.25rem);
  }
`;

const BackButtonContainer = styled.div`
  text-align: center;
`;

const BackButton = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.75rem 2rem;
  background: linear-gradient(135deg, #fb923c 0%, #ef4444 100%);
  color: white;
  font-weight: 600;
  border-radius: 0.75rem;
  border: none;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  transition: all 0.3s ease;
  font-size: 1rem;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const FooterNote = styled.div`
  text-align: center;
  margin-top: 2rem;
`;

const FooterText = styled.p`
  font-size: 0.875rem;
  color: #6b7280;
  margin: 0;
`;

const Contact = () => {
  const contactItems = [
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      value: "draalsallum@gmail.com",
      action: () => (window.location.href = "mailto:draalsallum@gmail.com"),
      bgColor: "#3b82f6",
      hoverColor: "#2563eb",
      available: true,
    },
    {
      icon: Twitter,
      title: "تويتر",
      value: "@dralsallum",
      action: () => window.open("https://x.com/dralsallum", "_blank"),
      bgColor: "#0ea5e9",
      hoverColor: "#0284c7",
      available: true,
    },
    {
      icon: Send,
      title: "تليجرام",
      value: "@dralsallum",
      action: () => window.open("https://t.me/dralsallum", "_blank"),
      bgColor: "#60a5fa",
      hoverColor: "#3b82f6",
      available: true,
    },
    {
      icon: Phone,
      title: "واتساب",
      value: "قريباً...",
      action: null,
      bgColor: "#10b981",
      hoverColor: "#059669",
      available: false,
    },
  ];

  return (
    <PageContainer>
      <MainWrapper>
        <HeaderSection>
          <HeaderIcon>
            <Mail size={40} color="white" />
          </HeaderIcon>
          <Title>تواصل معنا</Title>
          <Subtitle>
            نحن هنا لمساعدتك في أي استفسار أو مشكلة قد تواجهها
          </Subtitle>
        </HeaderSection>

        <ContactWrapper>
          <ContactList>
            {contactItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <ContactItem
                  key={index}
                  available={item.available}
                  onClick={item.available ? item.action : undefined}
                >
                  <IconContainer
                    bgColor={item.bgColor}
                    hoverColor={item.hoverColor}
                  >
                    <IconComponent size={28} color="white" />
                  </IconContainer>

                  <ContentSection>
                    <ItemTitle>{item.title}</ItemTitle>
                    <ItemValue available={item.available}>
                      {item.value}
                    </ItemValue>
                  </ContentSection>

                  {item.available && (
                    <ArrowIcon>
                      <ArrowLeft size={20} />
                    </ArrowIcon>
                  )}
                </ContactItem>
              );
            })}

            {/* Working Hours */}
            <ContactItem available={false}>
              <IconContainer bgColor="#6b7280">
                <Clock size={28} color="white" />
              </IconContainer>

              <ContentSection>
                <ItemTitle>ساعات العمل</ItemTitle>
                <ItemValue available={false}>
                  الأحد - الخميس من 9:00 ص إلى 6:00 م
                </ItemValue>
              </ContentSection>
            </ContactItem>
          </ContactList>
        </ContactWrapper>

        <BackButtonContainer>
          <BackButton onClick={() => window.history.back()}>
            <ArrowLeft size={20} style={{ marginLeft: "0.5rem" }} />
            العودة للصفحة الرئيسية
          </BackButton>
        </BackButtonContainer>

        <FooterNote>
          <FooterText>سنرد عليك في أقرب وقت ممكن خلال ساعات العمل</FooterText>
        </FooterNote>
      </MainWrapper>
    </PageContainer>
  );
};

export default Contact;
