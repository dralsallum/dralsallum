import styled from "styled-components";
import { MainButton, SecondaryText } from "../../globalStyles";

export const HeaderWrapper = styled.div`
  color: black;
  position: relative;
  direction: rtl;
  margin-top: 3rem;
  @media screen and (max-width: 960px) {
    margin-top: 1rem;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  padding: 2.5rem 1.5rem;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1.1rem;
`;

export const HeaderContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.4rem;
`;

export const HeaderContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HeaderLeftTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
export const HeaderSearch = styled.button`
  display: flex;
  background-color: #759159;
  color: white;
  border-radius: 16px;
  border: none;
  padding: 0.5rem 1rem;
  justify-content: center;
  width: 15rem;
  align-items: center;
  transition: all 0.3s ease-out;
  cursor: pointer;
`;
export const HeaderSearchButton = styled(MainButton)``;
export const HeaderSearchInput = styled.div`
  border: none;
  outline: none;
  background-color: #759159;
  font-size: 1.2rem;
`;
export const HeaderOrangeCircle = styled.div`
  height: 4rem;
  width: 4rem;
  background-color: orange;
  border-radius: 999px;
  position: absolute;
  right: 28%;
  top: 25%;
  z-index: -1;
`;

export const HeaderMainHeader = styled.h2`
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 3.4rem;
  font-style: italic;

  @media screen and (max-width: 960px) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`;

export const HeaderMainHeaderSpan = styled.span`
  font-weight: 600;
  font-size: 2.6rem;
  line-height: 3.4rem;
  color: #9d5655;

  @media screen and (max-width: 960px) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`;

export const HeaderSubHeader = styled.h2`
  font-weight: 600;
  font-size: 1.6 rem;
  font-style: italic;

  @media screen and (max-width: 960px) {
    font-size: 1.4rem;
    text-align: start;
  }
`;
export const HeaderSubHeaderSpan = styled(SecondaryText)``;

export const HeaderImgContainer = styled.div`
  width: 30rem;
  height: 35rem;
  overflow: hidden;
  border: 8px solid rgba(255, 255, 255, 0.12);
  border-radius: 15rem 15rem 0 0;
`;
export const HeaderImgRight = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
