import styled from "styled-components";

export const StoreWtapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 43.75rem;
  min-height: 97px;
  margin: 30px auto;
  padding: 0px 0.938rem;
`;
export const StoreTimeBoost = styled.div`
  visibility: visible;
  max-width: 43.75rem;
  min-height: 97px;
  margin-bottom: 1rem;
`;
export const StoreTimeKeyContainer = styled.div`
  width: 100%;
  position: relative;
  background-image:  url(${"https://alsallum.s3.eu-north-1.amazonaws.com/wallet.jpeg"})
  background-size: cover; // Cover the entire div
  background-repeat: no-repeat; // Prevents the image from repeating
  background-position: center; // Centers the image
`;
export const StoreTimeKey = styled.div`
  width: 100%;
  cursor: pointer;
`;

export const StoreBannerArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image:  url(${"https://alsallum.s3.eu-north-1.amazonaws.com/wallet.jpeg"})
  background-size: cover; // Cover the entire div
  background-repeat: no-repeat; // Prevents the image from repeating
  background-position: center; // Centers the image
`;
export const StoreBannerArrowContain = styled.div`
  color: white;
`;
export const StoreBanner = styled.div`
  background-image: url(${"https://alsallum.s3.eu-north-1.amazonaws.com/wallet.jpeg"});
  background-size: cover; // Cover the entire div
  background-repeat: no-repeat; // Prevents the image from repeating
  background-position: center; // Centers the image
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  color: rgb(255, 255, 255);
  width: 100%; // Add width
  height: 100px; // Add height
`;

export const StoreBannerMain = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const StoreBannerSub = styled.div`
  @media screen and (max-width: 31.25rem) {
    margin-left: 0.5rem;
  }
`;
export const StoreBannerLast = styled.div`
  width: 100%;

  @media screen and (max-width: 31.25rem) {
    height: 32px;
  }
`;

export const StoreTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
`;
export const StoreTextContainerSub = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;
export const StoreTextContainerSec = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const StoreTextContainerThi = styled.div`
  color: inherit;
`;

export const StoreTextHeader = styled.h6`
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
  font-size: 1.25rem;
  font-weight: 800;
  line-height: 1.3em;
  text-align: right;
  @media screen and (max-width: 31.25rem) {
    font-size: 1rem;
  }
`;
