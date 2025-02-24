import styled, { keyframes, css } from "styled-components";

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(${(props) => props.spinDegree + 360}deg); 
  }
`;

//put it 10px top after finishing
export const SpinWrapper = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  position: absolute;
  bottom: 20px;
  left: 0px;
  width: 578px;
  height: 289px;
  z-index: 5;
  transform: scale(1) rotateZ(0deg);
  opacity: 1;
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: 150px;
    left: 25px;
    width: 350px;
    height: 480px;
    z-index: 5;
    transform: scale(1) rotateZ(0deg);
    display: block;
    visibility: visible;
    opacity: 1;
  }
`;
export const SpinWra = styled.div`
  opacity: 1;
  border-style: double;
  padding: 0px;
  border-radius: 0px;
  box-shadow: 0px 0px 0px 0px rgba(50, 50, 50, 0.75);
  border-width: 0px;
  border-color: rgba(255, 255, 255, 0);
  background-color: rgba(0, 115, 119, 1);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
    opacity: 1;
    border-style: solid;
    padding: 0px;
    border-radius: 0px;
    border-width: 0px;
    border-color: rgba(222, 222, 222, 1);
    background-color: rgba(0, 115, 119, 1);
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 100% 100%;
  }
`;
export const SpinCon = styled.div`
  width: 578px;
  left: 0px;
  position: absolute;
  top: 0;
  height: 100%;
  cursor: default;
  z-index: 3;

  @media screen and (max-width: 768px) {
    width: 296px;
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    cursor: default;
    z-index: 3;
  }
`;
export const SpinCross = styled.div`
  position: absolute;
  top: 0px;
  left: 538px;
  width: 40px;
  height: 40px;
  z-index: 53;
  transform: rotate(0deg) scaleX(1) scaleY(1);
  display: block;
  visibility: visible;
  cursor: pointer;
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;

  @media screen and (max-width: 768px) {
    position: absolute;
    top: -5px;
    left: 315px;
    width: 40px;
    height: 40px;
    z-index: 57;
    cursor: pointer;
    font-weight: 400;
    font-family: helvetica neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
    line-height: normal;
    color: #000;
    transform: rotate(0deg) scaleX(1) scaleY(1);
    display: block;
    visibility: visible;
  }
`;
export const SpinCro = styled.div`
  opacity: 1;
  border-style: solid;
  padding: 0px;
  border-radius: 0px;
  box-shadow: 0px 0px 0px 0px rgba(50, 50, 50, 0.75);
  border-width: 0px;
  border-color: #000;
  background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const SpinSpOn = styled.span`
  text-align: center;
  letter-spacing: 1px;
  color: #fffdfa;
  font-family: "Nexa", Arial, san-serif;

  @media screen and (max-width: 768px) {
  }
`;
export const SpinSpTw = styled.span`
  font-size: 16px;
`;
export const SpTw = styled.div`
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const SpOn = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 40px;
  width: 40px;

  @media screen and (max-width: 768px) {
  }
`;
export const SpCon = styled.div`
  display: ${(props) => (props.show ? "none" : "block")};
  visibility: ${(props) => (props.show ? "hidden" : "visible")};
  position: absolute;
  top: 8px;
  left: 264px;
  width: 233px;
  height: 170px;
  z-index: 50;
  transform: rotate(0deg) scaleX(1) scaleY(1);
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;

  @media screen and (max-width: 768px) {
    top: -35px;
    left: 58px;
  }
`;
export const SpSubCon = styled.div`
  opacity: 1;
  border-style: solid;
  padding: 0px;
  height: 100%;
  width: 100%;
  border-radius: 0px;
  box-shadow: 0px 0px 0px 0px rgba(50, 50, 50, 0.75);
  border-width: 0px;
  border-color: #000;
  background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const SpVe = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 170px;
  width: 233px;

  @media screen and (max-width: 768px) {
  }
`;
export const SpAli = styled.div`
  text-align: center;
`;
export const SpinSpan = styled.span`
  text-align: center;
  letter-spacing: 1px;
  color: rgb(255, 253, 250);
  font-family: Nexa, "source sans pro", sans-serif;
`;
export const SpinSubSpan = styled.span`
  text-align: center;
  letter-spacing: 1px;
  color: rgb(255, 253, 250);
  font-family: Nexa, "source sans pro", sans-serif;
`;
export const SpinSp = styled.span`
  font-size: 24px;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;
export const SpinSpa = styled.span`
  font-size: 16px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const WrongSp = styled.span`
  font-size: 16px;
  color: red;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;
export const SpinB = styled.b`
  font-weight: 700;
`;
export const InputWr = styled.div`
  display: ${(props) => (props.show ? "none" : "block")};
  visibility: ${(props) => (props.show ? "hidden" : "visible")};
  position: absolute;
  top: 177px;
  left: 255px;
  width: 250px;
  height: 36px;
  z-index: 63;
  transform: rotate(0deg) scaleX(1) scaleY(1);
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;

  @media screen and (max-width: 768px) {
    top: 150px;
    left: 50px;
  }
`;
export const Inp = styled.input`
  opacity: 1;
  text-align: center;
  color: #333;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 16px;
  border-style: solid;
  padding: 0px 0px;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 0px rgba(50, 50, 50, 0.75);
  background-color: rgba(255, 255, 255, 1);
  border-width: 0px;
  border-color: #000;
  height: 100%;
  width: 100%;
`;

export const ButCon = styled.div`
  display: ${(props) => (props.show ? "none" : "block")};
  visibility: ${(props) => (props.show ? "hidden" : "visible")};
  position: absolute;
  top: 221px;
  left: 255px;
  width: 250px;
  height: 36px;
  z-index: 62;
  transform: rotate(0deg) scaleX(1) scaleY(1);
  cursor: pointer;
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;

  @media screen and (max-width: 768px) {
    top: 105px;
    left: 51px;
  }
`;
export const ButSubCon = styled.div`
  opacity: 1;
  border-style: solid;
  padding: 0px;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 0px rgba(50, 50, 50, 0.75);
  border-width: 0px;
  border-color: #ccc;
  background-color: rgba(239, 119, 91, 1);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  height: 100%;
  width: 100%;
`;
export const ButWr = styled.div`
  height: 36px;
  width: 250px;
  display: table-cell;
  vertical-align: middle;
`;
export const ButSp = styled.span`
  font-family: Nexa, source sans pro, sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
`;
export const ButSpa = styled.span`
  font-size: 18px;
`;
export const ButCen = styled.div`
  text-align: center;
`;
export const ButStr = styled.strong`
  font-weight: 700;
`;
export const MainWr = styled.div`
  display: ${(props) => (props.show ? "none" : "block")};
  visibility: ${(props) => (props.show ? "hidden" : "visible")};
  position: absolute;
  top: 6px;
  left: -82px;
  width: 329px;
  height: 339px;
  z-index: 61;
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;

  @media screen and (max-width: 768px) {
    top: 195px;
    left: 40px;
  }
`;
export const MainCon = styled.div`
  opacity: 1;
  text-align: right;
  color: rgb(255, 255, 255);
  font-family: Verdana, Geneva, sans-serif;
  font-size: 12px;
  border-style: solid;
  padding: 0px;
  border-radius: 0px;
  box-shadow: rgba(50, 50, 50, 0.75) 0px 0px 0px 0px;
  border-width: 0px;
  border-color: rgb(0, 0, 0);
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  height: 100%;
  width: 100%;
`;
export const MainSubCon = styled.div`
  height: 339px;
  width: 329px;
  vertical-align: top;
  display: table-cell;
`;
export const MainImg = styled.div`
  transform: scale(0.913889);
  transform-origin: left top;
  position: relative;
  width: 360px;
  height: 300px;
`;
export const MainImgOn = styled.div`
  background-color: rgb(92, 184, 178);
  position: absolute;
  top: 0px;
  left: 0px;
  width: 301px;
  height: 301px;
  border-radius: 150px;
`;
export const MainImgTw = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 300px;
  transform: rotate(15deg);
  animation: ${(props) =>
    props.spin
      ? css`
          ${spin} 2s ease-out forwards
        `
      : "none"};
`;
export const LaOn = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
`;
export const LaTw = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 300px, 300px, 150px);
`;
export const LaOnCo = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(92, 184, 178);
  transform: rotate(360deg);
`;
export const LaOnSu = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(55, 169, 139);
  transform: rotate(330deg);
`;
export const LaOnRe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(0, 139, 132);
  transform: rotate(300deg);
`;
export const LaOnDe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(149, 198, 191);
  transform: rotate(270deg);
`;
export const LaOnTe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(75, 163, 115);
  transform: rotate(240deg);
`;
export const LaOnQe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(0, 139, 132);
  transform: rotate(210deg);
`;
export const LaOnYe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(92, 184, 178);
  transform: rotate(180deg);
`;
export const LaOnZe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(55, 169, 139);
  transform: rotate(150deg);
`;
export const LaOnFe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(75, 163, 115);
  transform: rotate(120deg);
`;
export const LaOnLe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(149, 198, 191);
  transform: rotate(90deg);
`;
export const LaOnKe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(75, 163, 115);
  transform: rotate(60deg);
`;
export const LaOnPe = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 150px;
  clip: rect(0px, 150px, 300px, 0px);
  background-color: rgb(0, 139, 132);
  transform: rotate(30deg);
`;
export const LaOnSp = styled.span`
  position: absolute;
  top: 50px;
  left: 78px;
  padding-right: 2px;
  transform: rotate(255deg);
  display: block;
  height: 40px;
  width: 100px;
  vertical-align: middle;
  line-height: 40px;
`;
export const MainTwCon = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 300px;
  height: 300px;
  transform: rotate(15deg);
`;
export const MainImgTh = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  border: solid 10px #000;
  opacity: 0.3;
  width: 301px;
  height: 301px;
  border-radius: 150px;
`;
export const MainImgFo = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border: solid 8px #fff;
  width: 301px;
  height: 301px;
  border-radius: 150px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-color: rgb(255, 253, 250);
`;
export const MainImgFi = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  border: solid 1px #eee;
  border-left-color: #fff;
  border-top-color: #fff;
  width: 301px;
  height: 301px;
  border-radius: 150px;
  opacity: 0.1;
`;
export const MainImgSi = styled.div`
  position: absolute;
  top: 125px;
  left: 125px;
  background-color: #000;
  opacity: 0.25;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;
export const MainImgSe = styled.div`
  background-color: rgb(255, 253, 250);
  position: absolute;
  top: 115px;
  left: 115px;
  border: solid 1px #eee;
  width: 70px;
  height: 70px;
  border-radius: 35px;
  box-shadow: 30px 20px 84px 0px rgba(0, 0, 0, 0.5),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const MainImgEi = styled.div`
  transform: rotate(15deg);
  width: 300px;
  height: 300px;
  position: absolute;
  left: 0px;
  top: 0px;
`;
export const MainEiOne = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 1.5px;
  left: 148px;
`;
export const MainEiTw = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 74px;
  left: 274px;
`;
export const MainEiTh = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 147px;
  left: 294px;
`;
export const MainEiFo = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 221px;
  left: 275px;
`;
export const MainEiFi = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 275px;
  left: 221px;
`;
export const MainEiSi = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 294.5px;
  left: 147.5px;
`;
export const MainEiSe = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 274.5px;
  left: 74px;
`;
export const MainEiEi = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 220.5px;
  left: 21px;
`;
export const MainEiNi = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 148px;
  left: 1px;
`;
export const MainEiTe = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 75px;
  left: 21px;
`;
export const MainEiEl = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 21px;
  left: 74px;
`;
export const MainEiTi = styled.div`
  position: absolute;
  background-color: #333;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  top: 21px;
  left: 221px;
`;
export const MainImgNi = styled.div`
  transform: rotate(0deg);
  position: absolute;
  left: 285px;
  top: 134px;
  z-index: 10;
  width: 62px;
  height: 32px;
  transform-origin: 73% 50%;
  filter: drop-shadow(-8px 0px 5px rgba(0, 0, 0, 0.3));
`;
export const MainNiOn = styled.div`
  width: 0;
  height: 0;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
  border-right: 40px solid red;
  border-right-color: rgb(229, 101, 117);
  position: absolute;
  left: 0px;
  top: 1px;
  z-index: 10;
`;
export const MainNiTw = styled.div`
  background-color: rgb(229, 101, 117);
  position: absolute;
  left: 29px;
  top: 0px;
  z-index: 10;
  width: 32px;
  height: 32px;
  border-radius: 35px;
`;
export const MainNTw = styled.div`
  position: absolute;
  left: 9px;
  top: 9px;
  z-index: 10;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background-color: #333;
`;
export const ResButWr = styled.div`
  position: absolute;
  top: 205px;
  left: 163px;
  width: 250px;
  height: 36px;
  z-index: 1;
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;
  cursor: pointer;
  transform: rotate(0deg) scaleX(1) scaleY(1);
  display: ${(props) => (props.show ? "block" : "none")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};

  @media screen and (max-width: 768px) {
    top: 205px;
    left: 50px;
  }
`;
export const ResBut = styled.span`
  font-family: Nexa, source sans pro, sans-serif;
  text-align: center;
  color: rgb(255, 255, 255);
`;
export const ResButStr = styled.strong`
  font-weight: 700;
`;
export const ResButSp = styled.span`
  font-size: 18px;
`;
export const ResButCe = styled.div`
  text-align: center;
`;
export const ResButHe = styled.div`
  display: table-cell;
  vertical-align: middle;
  height: 36px;
  width: 250px;
`;
export const ResButMa = styled.div`
  opacity: 1;
  border-style: solid;
  padding: 0px;
  border-radius: 20px;
  box-shadow: 0px 0px 0px 0px rgba(50, 50, 50, 0.75);
  border-width: 0px;
  border-color: #000;
  height: 100%;
  width: 100%;
  background-color: rgba(239, 119, 91, 1);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
  height: 100%;
  width: 100%;
`;
export const ResWr = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  font-weight: 400;
  font-family: helvetica neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  line-height: normal;
  color: #000;
  position: absolute;
  top: 18px;
  left: 118px;
  width: 344px;
  height: 187px;
  z-index: 50;
  transform: rotate(0deg) scaleX(1) scaleY(1);

  @media screen and (max-width: 768px) {
    top: 18px;
    left: 8px;
  }
`;
export const ResCo = styled.div`
  opacity: 1;
  border-style: solid;
  padding: 0px;
  border-radius: 0px;
  box-shadow: 0px 0px 0px 0px rgba(50, 50, 50, 0.75);
  border-width: 0px;
  border-color: #000;
  background-color: rgba(255, 255, 255, 0);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 100%;
`;
export const ResSuCo = styled.div`
  height: 187px;
  width: 344px;
  display: table-cell;
  vertical-align: middle;
`;
export const ResCen = styled.div`
  text-align: center;
`;
export const ResSp = styled.span`
  font-size: 28px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
`;
export const ResSpan = styled.span`
  text-align: center;
  letter-spacing: 1px;
  color: #fffdfa;
  font-family: Nexa, source sans pro, sans-serif;
  font-weight: 800;
`;
export const ResStr = styled.strong`
  font-weight: 700;
`;
export const ReSp = styled.span`
  text-align: center;
  font-size: 16px;
  letter-spacing: 1px;
  color: #fffdfa;
  font-family: Nexa, source sans pro, sans-serif;
  font-weight: 800;

  @media screen and (max-width: 768px) {
    font-size: 14px;
  }
`;
export const ReSpa = styled.span`
  text-align: center;
  letter-spacing: 1px;
  color: #fffdfa;
  font-family: Nexa, source sans pro, sans-serif;
`;
export const ReStr = styled.strong`
  font-weight: 700;
`;
