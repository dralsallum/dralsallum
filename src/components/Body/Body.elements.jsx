import styled from "styled-components";

export const BodyWrapper = styled.div`
  padding: 3.5rem 0.8rem;
  background-color: #759159;

  @media screen and (max-width: 991px) {
    padding: 2.5rem 0.8rem;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.8em;
`;

export const BodyContainerTop = styled.div`
  font-size: 2.8rem;
  font-weight: 200;
  font-style: italic;

  @media screen and (max-width: 991px) {
    font-size: 2.2rem;
  }
`;

export const BodyContainerBottom = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
  flex-wrap: wrap;
`;

export const BodyContainerBottomCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 0, 2rem;
`;
export const BodyContainerBottomCardsPercetage = styled.div`
  font-size: 2.8rem;
  font-weight: 200;
  font-style: italic;

  @media screen and (max-width: 991px) {
    font-size: 2.2rem;
  }
`;
export const BodyContainerBottomCardsCutomer = styled.div`
  font-size: 1.1rem;
  font-weight: 200;
  font-style: italic;

  @media screen and (max-width: 991px) {
    font-size: 1.1rem;
  }
`;
export const BodyContainerBottomCardsPara = styled.div`
  font-size: 1.3rem;
  font-weight: 200;
  font-style: italic;

  @media screen and (max-width: 991px) {
    font-size: 1.3rem;
  }
`;
