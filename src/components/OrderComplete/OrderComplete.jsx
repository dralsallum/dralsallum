import React from "react";
import styled, { keyframes } from "styled-components";

// Bounce animation for the checkmark icon
const bounce = keyframes`
  0% {
    transform: scale(0.5);
    opacity: 0;
  }
  60% {
    transform: scale(1.1);
    opacity: 1;
  }
  100% {
    transform: scale(1);
  }
`;

// Container for the entire page
const PageContainer = styled.div`
  background: #edf4f7;
  min-height: 80vh;
  padding: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

// Checkmark wrapper with a colored background and animation
const CheckmarkWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: #ff7143;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  animation: ${bounce} 0.5s ease-out;
`;

// SVG Checkmark icon
const Checkmark = styled.svg`
  width: 50px;
  height: 50px;
  fill: #fff;
`;

// Title / Heading style
const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

// Paragraph style
const Message = styled.p`
  font-size: 1.2rem;
  color: #555;
  max-width: 600px;
  text-align: center;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0 10px;
  }
`;

const OrderComplete = () => {
  return (
    <PageContainer>
      <CheckmarkWrapper>
        <Checkmark viewBox="0 0 52 52">
          <path d="M26,0C11.664,0,0,11.664,0,26s11.664,26,26,26s26-11.664,26-26S40.336,0,26,0z M21.5,39.5l-12-12L11,26l10.5,10.5L41,16l1.5,1.5L21.5,39.5z" />
        </Checkmark>
      </CheckmarkWrapper>
      <Title>Thank you for your purchase!</Title>
      <Message>
        Your order has been successfully placed. A confirmation email with your
        order details will be sent to you shortly. We appreciate your business
        and hope to serve you again soon!
      </Message>
    </PageContainer>
  );
};

export default OrderComplete;
