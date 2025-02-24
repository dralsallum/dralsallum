import styled from "styled-components";

export const SliderWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
`;

export const SliderArrowContainerAll = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const SliderArrowContainer = styled.div`
  position: relative;
  gap: 1rem;
  display: flex;
`;
export const SliderArrowContainer1 = styled.div`
  position: relative;
  gap: 1rem;
  display: flex;
  font-size: 1.6rem;
  font-weight: bold;
  color: #073c46;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
    padding-top: 0.4rem;
  }
`;

export const SliderArrowButtonRight = styled.button`
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  color: black;
  border: none;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3 ease-in-out;

  &:hover {
    background-color: black;
    color: #eeeeff;
  }
`;
export const SliderArrowButtonLeft = styled.button`
  font-size: 1rem;
  padding: 0.4rem 0.6rem;
  color: black;
  border: none;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 0.3 ease-in-out;

  &:hover {
    background-color: black;
    color: #eeeeff;
  }
`;

export const SliderContainer = styled.div`
  padding: 1.5rem 2.5rem;
  width: 100%;
  overflow: hidden;
  position: relative;

  @media (min-width: 1536px) {
    max-width: 1280px;
    margin: auto;
  }
`;

export const SliderHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const SliderHeaderSpan = styled.span`
  color: #000000;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (max-width: 960px) {
    font-size: 1.1rem;
  }
`;

export const SliderSubHeaderSpan = styled.span`
  color: #1f3e72;
  font-size: 1.8rem;
  font-weight: bold;

  @media screen and (max-width: 960px) {
    font-size: 1.3rem;
  }
`;

export const SliderCardContainer = styled.div`
  direction: ltr;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;
  padding: 1rem;
  border-radius: 10px;
  max-width: max-content;
  margin: auto;
  transition: all 0.5 ease-in-out;

  &:hover {
    scale: 1.025;
    cursor: pointer;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(136, 160, 255, 0.46) 217.91%
    );
    box-shadow: 0px 72px 49px -51px rgba(136, 160, 255, 0.21);
  }
`;

export const SliderCardImg = styled.img`
  width: 100%;
  max-width: 15rem;
  max-height: 15rem;
  border-radius: 8px;
`;
export const SliderCardSpan = styled.div`
  color: rgb(140 139 139);
  font-size: 1.1rem;

  @media screen and (max-width: 960px) {
    font-size: 1rem;
  }
`;
export const SliderCardSubSpan1 = styled.div`
  display: flex;
  align-items: center;
`;
export const SliderCardSubSpan2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SliderCardSubSpan3 = styled.div`
  color: #000000;
  font-weight: 600;
  font-size: 1rem;
  padding-right: 0.2rem;
  margin-left: 0.2rem;
  margin-bottom: 0.2rem;
  overflow: hidden;
  position: relative;
  max-height: 2.2em; // Assuming line-height of 1.1, thus 2 lines will be 2.2em
  line-height: 1.1em;

  &:after {
    content: "...";

    background-color: white; // Match this with your background color
  }

  @media screen and (max-width: 960px) {
    font-size: 0.9rem;
  }
`;

export const SliderCardSubSpan4 = styled.span`
  color: rgb(140 139 139);
  font-size: 0.7rem;
  width: 15rem;
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #073c46;
  white-space: nowrap;
  padding: 8px 14px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: #000000;
  }

  @media screen and (max-width: 960px) {
  }
`;

export const LiWr = styled.ul`
  display: block;
  padding-bottom: 2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  background-color: #0c0c0c;
  border-radius: 8px;

  @media screen and (max-width: 640px) {
  }
`;
export const LiEl = styled.li`
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 0.15s;
  --tw-backdrop-blur: blur(16px);
  height: 200px;

  @media screen and (max-width: 640px) {
  }
`;
export const LiTopImg = styled.img`
  top: 0;
  right: 0;
  position: absolute;
  pointer-events: none;
  max-width: 100%;
  height: auto;
  display: block;
  vertical-align: middle;

  @media screen and (max-width: 640px) {
  }
`;
export const LiTopAt = styled.a`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  color: inherit;
  text-decoration: inherit;
  padding: 0 2rem 2rem 2rem;
  height: 100%;

  @media screen and (max-width: 640px) {
  }
`;
export const SoTop = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  color: #fff;

  @media screen and (max-width: 640px) {
  }
`;
export const SoSubTop = styled.div`
  display: flex;
  gap: 0.2rem;
  align-items: center;

  @media screen and (max-width: 640px) {
  }
`;
export const SoTopImg = styled.img`
  display: block;
  vertical-align: middle;
  width: fit-content;
  height: 2rem;
  position: absolute;
  max-width: 100%;

  @media screen and (max-width: 640px) {
  }
`;
export const SoMid = styled.div`
  color: rgb(229 231 235);
  margin-bottom: 1rem;
  font-size: 18px;
  @media screen and (max-width: 640px) {
  }
`;
export const SoBot = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  margin-bottom: 1rem;

  @media screen and (max-width: 640px) {
  }
`;
export const SoBotLe = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  @media screen and (max-width: 640px) {
  }
`;
export const SoBotRi = styled.img`
  display: block;
  vertical-align: middle;
  color: transparent;
  border-color: rgb(31 41 55 / var(--tw-border-opacity));
  border-width: 1px;
  border-radius: 9999px;
  width: 3rem;
  height: 3rem;
  max-width: 100%;

  @media screen and (max-width: 640px) {
  }
`;
export const SoBo = styled.div`
  color: #fff;

  @media screen and (max-width: 640px) {
  }
`;
export const SoB = styled.div`
  color: rgb(107 114 128);
  @media screen and (max-width: 640px) {
  }
`;
