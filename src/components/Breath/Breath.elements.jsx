import styled, { keyframes, css } from "styled-components";

const expand = keyframes`
  from {
    transform: scale(1);
  }
  to {
    transform: scale(1.5);
  }
`;

const shrink = keyframes`
  from {
    transform: scale(1.5);
  }
  to {
    transform: scale(1);
  }
`;

const scaleAnimation = keyframes`
  0% { transform: translate(-50%, -50%) scale(1); }
  50% { transform: translate(-50%, -50%) scale(1.5); }
  100% { transform: translate(-50%, -50%) scale(1); }
`;

export const AnimatedCircle = styled.div`
  position: relative;
  border: 2px solid white;
  border-radius: 50%;
  animation: ${(props) =>
    props.sessionStarted
      ? props.breathing === "شهيق"
        ? css`
            ${expand} 4s ease-in-out forwards
          `
        : css`
            ${shrink} 4s ease-in-out forwards
          `
      : "none"};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  overflow: hidden;
`;

export const BreathWra = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ace7dc;
  height: 100vh;
`;
export const BreathCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;
export const BreathTop = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: space-around;
  width: 100%;
  padding-top: 20px;
`;
export const TimmerCon = styled.div`
  width: 40px;
  color: #fff;
  font-size: 22px;
  padding-top: 0.5rem;
`;
export const CrossCon = styled.div`
  width: 40px;
`;
export const CrossIco = styled.img`
  width: 40px;
`;
export const ContentHolder = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BreathMid = styled.div``;
export const BreathBot = styled.div`
  color: #fff;
  font-size: 24px;
  animation: ${(props) =>
    props.breathing === "شهيق"
      ? css`
          ${expand} 4s ease-in-out forwards
        `
      : css`
          ${shrink} 4s ease-in-out forwards
        `};
`;
export const BreathLast = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-bottom: 50px;
`;
export const ChillImg = styled.img`
  width: 100px;
`;
export const FlatButton = styled.button`
  position: relative;
  border: none;
  background-color: transparent;
  color: #fff;
  font-size: 24px;
  transform: translate(-50%, -50%);
  animation: ${scaleAnimation} 2s infinite;
`;

export const Dis = styled.div`
  display: flex;
  flex-column: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 50em) {
  }
`;

export const FlatRight = styled.div`
  position: relative;

  @media screen and (max-width: 50em) {
  }
`;

export const FlatLeft = styled.div`
  position: relative;

  @media screen and (max-width: 50em) {
  }
`;

export const RWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  width: 100%;
`;

export const RtTop = styled.div`
  display: block;
`;

export const RtTopimg = styled.img`
  height: 30vh;
  display: inline-block;
`;

export const RtMiddle = styled.div`
  display: block;
`;
export const RtReg = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;
export const RtRegCon = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  overflow: hidden;
  position: relative;
  z-index: -2;
  @media screen and (max-width: 700px) {
  }
`;

export const RtRegSub = styled.div`
  animation: 0.2s ease-in-out;
  animation-fill-mode: both;
  border-radius: 16px;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
  animation-delay: 900ms;
  background-color: #ffc800;

  @media screen and (max-width: 700px) {
  }
`;
export const RtRegUb = styled.div`
  animation: _1RieK 0.2s ease-in-out;
  animation-fill-mode: both;
  border-radius: 16px;
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: -1;
  animation-delay: 900ms;
  background-color: #59cc03;

  @media screen and (max-width: 700px) {
  }
`;
export const RtRegSu = styled.div`
  animation: _2wJ1R 0.2s ease-in-out;
  color: rgb(255, 255, 255);
  font-size: 13px;
  font-weight: 700;
  line-height: 16px;
  padding: 8px 10px;
  text-transform: uppercase;
  width: auto;
`;
export const RtRegImg = styled.img`
  margin-left: 8px;
  width: 18px;
  border-style: none;
`;
export const RtRegBu = styled.div`
  align-items: center;
  animation: 0.1s ease-in-out;
  background-color: rgb(255, 255, 255);
  border: 2px solid #ffc800;
  border-radius: 16px;
  color: #ffc800;
  width: 150px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  justify-content: center;
  transition: border-color 0.2s;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
export const RtRegBt = styled.div`
  align-items: center;
  animation: 0.1s ease-in-out;
  background-color: rgb(255, 255, 255);
  border: 2px solid #59cc03;
  border-radius: 16px;
  color: #59cc03;
  width: 200px;
  display: flex;
  flex-direction: row;
  font-size: 16px;
  font-weight: 700;
  height: 60px;
  justify-content: center;
  transition: border-color 0.2s;

  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;
export const RHeader = styled.h2`
  font-size: 28px;
  color: #ffc800;
`;
export const RSubHeader = styled.p`
  font-size: 16px;
  color: #afafaf;
  margin-top: 8px;
  margin-bottom: 4px;
`;
export const RButton = styled.button`
cursor: pointer;
min-width: 150px;
width: 700px;
background-color: #5ac900;
border-radius: 8px;
border: none;
color: rgb(255, 255, 255); 
height: 50px; 
padding: 0 16px; 
transition: filter 0.2s, 
font-size:  25px;
font-weight: 700;
text-transform: uppercase;
display: inline-flex;
align-items: center;
justify-content: center;
box-shadow: 1px 6px 8px #518210;
margin-top: 1rem;
margin-bottom: 2rem;
font-size:  26px;

&:hover {
  background-color: #76d925;
}

@media screen and (max-width: 700px) {
  width: 350px;
  font-size:  20px;
}
`;
