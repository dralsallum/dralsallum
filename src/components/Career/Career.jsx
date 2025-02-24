import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct } from "../../redux/cartRedux"; // <-- import your addProduct action
import NavTech from "../NavTech/NavTech";

/* Container (full page) */
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

/* ... other styled components unchanged ... */

const HeroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 2rem 3rem;
  text-align: center;
  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const HeroHeading = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #000;
  @media (max-width: 768px) {
    font-size: 2.3rem;
  }
`;

const HeroSubheading = styled.h2`
  font-size: 1.25rem;
  font-weight: 400;
  color: #555;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const EnrollButton = styled.button`
  background: #ff7143;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    opacity: 0.9;
  }
`;

const VideoWrapper = styled.div`
  margin-top: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  background: #eaeaea;
  border-radius: 8px;
  overflow: hidden;
  height: 340px; /* Approx aspect ratio for placeholder */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #777;
  font-weight: 600;
`;

const Career = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handler to add product to the cart (Redux) and navigate to checkout
  const handleEnroll = () => {
    // Example product object:
    const product = {
      _id: "PTYA001",
      title: "Part-Time YouTuber Academy",
      price: 995,
      quantity: 1,
    };

    // Dispatch to Redux
    dispatch(addProduct(product));

    // Optionally redirect to Checkout page
    navigate("/outcome");
  };

  return (
    <ContainerAll>
      <NavTech />

      {/* Hero Section */}
      <HeroSection>
        <HeroHeading>Join The Part-Time YouTuber Academy</HeroHeading>
        <HeroSubheading>
          Discover the proven strategies and techniques to thrive on YouTube —
          without <em>quitting your day job</em>
        </HeroSubheading>

        {/* Button triggers addProduct action & then navigates to Checkout */}
        <EnrollButton onClick={handleEnroll}>Enroll Now for $995</EnrollButton>

        {/* Placeholder for video or image */}
        <VideoWrapper>Video Placeholder</VideoWrapper>
      </HeroSection>
    </ContainerAll>
  );
};

export default Career;
