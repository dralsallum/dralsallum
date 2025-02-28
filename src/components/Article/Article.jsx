import React from "react";
import styled from "styled-components";
import Example from "../../assets/iphone-menu.png";
import Example2 from "../../assets/productivity_lab.png";
import Example3 from "../../assets/youtuber_academy.png";

// Outer container with a themed background, RTL direction, and centered on computer screens
const OuterContainer = styled.div`
  direction: rtl;
  max-width: 1200px;
  margin: 10px auto; /* Centered horizontally on smaller screens */
  padding: 2rem;
  background-color: #ffffff;
  border-radius: 16px;
  overflow: hidden;

  @media (min-width: 1024px) {
    width: 90%; /* Responsive width for computer screens */
    margin: 5px auto; /* Ensures the container remains centered on computer screens */
  }
`;

// Title on top of the grid
const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
  color: #333;
`;

// Grid layout for the cards with centered alignment
const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  justify-content: center;
`;

// Card component styling remains similar to the original code
const Card = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  padding: 1.5rem;
  border-radius: 16px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease;
  max-width: 320px;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  background-color: #f8f6f2;

  &:hover {
    transform: scale(1.05) translateY(-5px);
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: scale(0.98);
  }
`;

// Anchor wrapping the card content
const CardLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

// Styled image with a subtle zoom effect on hover and active click, and without any border
const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  margin-bottom: 1rem;
  border-radius: 12px;
  border: none;
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }

  ${Card}:active & {
    transform: scale(0.98);
  }
`;

// Card title with an underline and color change on hover
const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  text-align: right;
  transition: color 0.3s;

  ${CardLink}:hover & {
    text-decoration: underline;
    color: #87ceeb;
  }
`;

// Card description styling
const CardDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.5;
  text-align: right;
`;

// Individual ProductCard component
const ProductCard = ({ title, description, image, link }) => (
  <Card>
    <CardLink href={link}>
      <CardImage src={image} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardLink>
  </Card>
);

// Main ProductCards component that renders a grid of cards with Arabic text and a title on top
const ProductCards = () => {
  const products = [
    {
      title: "أكاديمية الدراسة",
      description:
        "دورة تساعد الطلاب على تحسين أساليب الدراسة وتنمية مهارات التعلم الفعّالة لتحقيق النجاح الأكاديمي.",
      image: Example3,
      link: "/job",
    },
    {
      title: "تطبيقي لتعليم الإنجليزي",
      description:
        "استكشف أسلوباً مبتكراً لتعلم اللغة الإنجليزية عبر تطبيق فلونت فوكس، الذي يجمع بين التقنيات الحديثة والتفاعل العملي لجعل التعلم ممتعاً وفعّالاً.",
      image: Example,
      link: "/personality",
    },
    {
      title: "بودكاست تعلم الإنجليزية عبر القصص",
      description:
        "استمع إلى قصص مشوّقة تُثري مهاراتك اللغوية مع فلونت فوكس بودكاست، حيث يتحول التعلم إلى رحلة مسلية وممتعة.",
      image: Example2,
      link: "/audio",
    },
  ];

  return (
    <OuterContainer>
      <Title>المنتجات</Title>
      <CardsGrid>
        {products.map((product, index) => (
          <ProductCard key={index} {...product} />
        ))}
      </CardsGrid>
    </OuterContainer>
  );
};

export default ProductCards;
