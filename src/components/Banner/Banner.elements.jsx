import styled from "styled-components";

export const BannerWrapper = styled.div`
  display: flex;
  background-color: #759159;
  width: 100%;
  min-height: 2.75rem;
  z-index: 9999;
  position: sticky;
  top: 0px;
  left: 0px;
  justify-content: center;
  align-items: center;
  padding: 0.5rem 0;
  line-height: 1.1875rem;
  text-align: center;
  transition-property: transform;
  transition-duration: 300ms;
  transform: translateY(0px);
  color: white;
  gap: 0.4rem;
`;

export const BannerPictureContainer = styled.a`
  height: 40px;
  width: 40px;
`;
export const BannerPicture = styled.img`
  object-fit: contain;
  width: 100%;

  &:hover {
    cursor: pointer;
  }
`;
export const BannerPara = styled.div`
  font-size: 1rem;

  &:hover {
    cursor: pointer;
  }
`;
