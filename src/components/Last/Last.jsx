import React from "react";
import styled from "styled-components";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

// Import icon images from assets
import laptopIcon from "../../assets/laptop.png";
import gearsIcon from "../../assets/gears.png";
import moneyIcon from "../../assets/money.png";

const Container = styled.div`
  direction: rtl;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;
`;

const Heading = styled.h1`
  font-size: 45px;
  font-family: serif;
  margin-bottom: 1rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 35px;
  }
`;

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

// Create a styled Link that behaves like a card
const CardLink = styled(Link)`
  background-color: #f8f6f2;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
  cursor: pointer;
  text-decoration: none;
  display: block;
  color: inherit;

  &:hover {
    transform: scale(1.05);
    background-color: #edf2f7;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const IconContainer = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-family: serif;
  margin-bottom: 0.75rem;
  text-align: right;
`;

const CardDescription = styled.p`
  color: #4a5568;
  margin-bottom: 1.5rem;
  text-align: right;
`;

const ActionText = styled.div`
  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
  gap: 0.5rem;
  color: #1a202c;
  font-weight: 500;
  transition: color 0.2s ease-in-out;
`;

const getIcon = (icon) => {
  switch (icon) {
    case "laptop":
      return (
        <IconContainer>
          <img src={laptopIcon} alt="laptop icon" width="60" height="60" />
        </IconContainer>
      );
    case "gears":
      return (
        <IconContainer>
          <img src={gearsIcon} alt="gears icon" width="60" height="60" />
        </IconContainer>
      );
    case "money":
      return (
        <IconContainer>
          <img src={moneyIcon} alt="money icon" width="60" height="60" />
        </IconContainer>
      );
    default:
      return null;
  }
};

const Last = () => {
  const cards = [
    {
      title: "أنشئ قناة يوتيوب",
      description: "تعلم كيف تبدأ قناة يوتيوب بناءً على سنوات خبرتي.",
      icon: "laptop",
      href: "/main/رحلة النجاح على يوتيوب: خطوات لصناعة قناة ناجحة",
    },
    {
      title: "كن أكثر إنتاجية",
      description:
        "تعلم كيف تنفذ بكفاءة، وتوفر وقتك للأشياء المهمة وتستمتع في العملية.",
      icon: "gears",
      href: "/main/إنتاجية%20عالية:%20مفتاح%20النجاح%20والتوازن%20في%20الحياة",
    },
    {
      title: "أنشئ دخلًا عبر الإنترنت",
      description: "تعلم استراتيجيات لإنشاء مصادر دخل عبر الإنترنت مستدامة.",
      icon: "money",
      href: "/main/طرق%20جني%20الأموال%20عبر%20الإنترنت:%20استراتيجيات%20لتحقيق%20الدخل%20الرقمي",
    },
  ];

  return (
    <Container>
      <Heading>كيف يمكنني مساعدتك؟</Heading>
      <Grid>
        {cards.map((card, index) => (
          <CardLink key={index} to={card.href}>
            <CardContent>
              {getIcon(card.icon)}
              <CardTitle>{card.title}</CardTitle>
              <CardDescription>{card.description}</CardDescription>
              <ActionText>
                <span>ابدأ الآن</span>
                <ArrowRight size={16} style={{ transform: "scaleX(-1)" }} />
              </ActionText>
            </CardContent>
          </CardLink>
        ))}
      </Grid>
    </Container>
  );
};

export default Last;
