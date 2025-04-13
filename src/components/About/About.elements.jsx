import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding: 3.5rem 0.8rem;
  background-color: #ffffff;
  margin-bottom: 1.5rem;

  @media screen and (max-width: 991px) {
    padding: 2.5rem 0.8rem;
  }
`;

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4rem;
`;

export const AboutContainerTop = styled.div`
  font-size: 1.6rem;
`;

export const AboutContainerBottom = styled.div`
  display: flex;
  gap: 4.2rem;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 991px) {
    gap: 2rem;
  }
`;

export const AboutContainerBottomContainer = styled.div`
  height: 15rem;
  width: 15rem;
  border: none;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  @media screen and (max-width: 991px) {
    height: 8rem;
    width: 8rem;
  }
`;

export const AboutContainerBottomHeader = styled.h3`
  font-size: 1.2rem;

  @media screen and (max-width: 991px) {
    font-size: 1rem;
  }
`;

export const AboutContainerBottomPara = styled.p`
  font-size: 1rem;

  @media screen and (max-width: 991px) {
    font-size: 0.8rem;
  }
`;

export const AboutContainerImg = styled.img`
  width: 100%;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 50%;
`;
