import styled, { keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  @media screen and (max-width: 768px) {
  }
`;

export const LoadingBarContainer = styled.div`
  width: 30%; // Full width container
  height: 4px;
  background-color: #ddd;
  border-radius: 2px;
  overflow: hidden;
`;

const fillAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

export const LoadingBar = styled.div`
  background-color: #3aa2da;
  height: 100%;
  width: 0%;
  border-radius: 2px;
  animation: ${fillAnimation} 4s ease-in-out forwards;
`;

export const StyledSpinner = styled(FontAwesomeIcon)`
  animation: ${rotate} 1s linear infinite;
  color: blue;
  height: 34px;
  width: 50px;
  padding: 30px;
`;

export const IteWra = styled.div`
  display: block;
  direction: rtl;

  @media screen and (max-width: 768px) {
  }
`;
export const IteSubWra = styled.div`
  position: relative;
  border-top: 1px solid #eaebeb;

  @media screen and (max-width: 768px) {
  }
`;
export const IteConOn = styled.div`
  width: 100%;
  padding: 10px 24px;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;
export const IteOn = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
  }
`;
export const LoWr = styled.div`
  display: none;
  border-top: 2px solid #eaebeb;
  padding-bottom: 24px;
  padding-top: 24px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const LoCon = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const LoOnHe = styled.h3`
  font-size: 16px;
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Display Bold;
  letter-spacing: 0.24px;
  line-height: 30px;
  margin-bottom: 16px;
  text-align: right;
  @media screen and (max-width: 768px) {
  }
`;
export const LoTw = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const LoTwWr = styled.div`
  position: relative;
  overflow: hidden;
  border-radius: 7px;
  height: 290px;
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`;
export const LoTwCo = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: rgb(229, 227, 223);
  @media screen and (max-width: 768px) {
  }
`;
export const LoTwSuCo = styled.div`
  position: absolute;
  z-index: 0;
  left: 0px;
  top: 0px;
  height: 100%;
  width: 100%;
  padding: 0px;
  border-width: 0px;
  font: 400 11px Roboto, Arial, sans-serif;
  text-decoration: none;
  margin: 0px;
  @media screen and (max-width: 768px) {
  }
`;
export const LoOnPara = styled.div`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  text-align: right;
  line-height: 22px;
  @media screen and (max-width: 768px) {
  }
`;
export const IteOnAt = styled.a`
  line-height: 22px;
  color: rgba(0, 111, 185);
  display: flex;
  font-family: Helvetica Now Display Medium;
  font-size: 14px;
  position: relative;
  text-decoration: none;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -o-transition-property: all;
  transition-property: all;
  -o-transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  width: fit-content;
  @media screen and (max-width: 768px) {
  }
`;
export const IteButMa = styled.div`
  border: 1px solid #ddd;
  z-index: 999;
  width: 100%;
  bottom: 0;
  position: fixed;
  padding-left: 16px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-top: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255);
  width: 100%;
  @media screen and (max-width: 768px) {
    margin: 0 auto;
    max-width: 100%;
  }
`;
export const IteButAt = styled(Link)`
  background-color: rgba(0, 111, 185);
  border-radius: 8px;
  color: rgba(255, 255, 255);
  display: inline-block;
  font-family: Helvetica Now Display Bold;
  font-size: 14px;
  height: auto;
  letter-spacing: 0.16px;
  line-height: 20px;
  padding: 10px 24px;
  text-align: center;
  transition-duration: 0.2s;
  transition-property: all;
  width: 100%;
  text-decoration: inherit;
  min-width: 136px;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);

  @media screen and (max-width: 768px) {
  }
`;
export const IteTw = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const ItFi = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const ItFiSubAt = styled.a`
  color: rgba(0, 111, 185);
  display: block;
  display: flex;
  font-family: Helvetica Now Display Medium;
  font-size: 14px;
  line-height: 22px;
  line-height: 18px;
  position: relative;
  text-decoration: none;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -o-transition-property: all;
  transition-property: all;
  -o-transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  width: -webkit-fit-content;
  width: -moz-fit-content;
  width: fit-content;
  @media screen and (max-width: 768px) {
  }
`;
export const ItFiSub = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
  }
`;
export const ItTwSub = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  }
`;
export const ItTwoSub = styled.div`
  margin-right: 8px;
  @media screen and (max-width: 768px) {
  }
`;
export const ItTwoPa = styled.p`
  font-size: 12px;
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  line-height: 22px;
  @media screen and (max-width: 768px) {
  }
`;
export const ItTwoSpa = styled.span`
  font-size: 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItTh = styled.div`
  margin-right: 8px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItThPa = styled.p`
color: rgba(102,102,102);
font-size: 5px;
font-family: Helvetica Now Text Regular;
line-height: 22px;
}

  @media screen and (max-width: 768px) {
  }
`;
export const ItThi = styled.div`
  display: flex;
  margin-right: 8px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItFo = styled.div`
  display: block;

  @media screen and (max-width: 768px) {
  }
`;
export const ItFoBut = styled.button`
  height: 18px;
  border-radius: 100%;
  width: 36px;
  border-color: #0977a9;
  color: inherit;
  line-height: inherit;
  padding: 0;
  text-transform: none;
  overflow: visible;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
  background-color: transparent;
  background-image: none;
  border: none;
  @media screen and (max-width: 768px) {
  }
`;
export const ItFiCon = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  }
`;

export const ItFiWra = styled.div`
  display: block;
  margin-top: 16px;
  @media screen and (max-width: 768px) {
  }
`;
export const WoWra = styled.div`
  background-color: #f5f5f5;
  border-radius: 20px;
  padding-top: 16px;
  opacity: 1;
  padding-bottom: 16px;
  padding-left: 0;
  padding-right: 0;
  @media screen and (max-width: 768px) {
  }
`;
export const WoCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
  }
`;
export const WoHe = styled.div`
  background-color: #003c69;
  border-radius: 5px;
  color: #fff;
  display: inline-flex;
  font: normal normal 700 11px/19px Helvetica Now Text Regular;
  padding: 3px 10px 4px;
  text-transform: capitalize;
  width: fit-content;
  margin-right: 20px;
  margin-bottom: 12px;

  @media screen and (max-width: 768px) {
  }
`;
export const WoOne = styled.div`
  font-family: Helvetica Now Display Medium;
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(68, 68, 68);
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const WoOneHe = styled.h1`
  line-height: 30px;
  font-size: 26px;
  padding: 0 23px;
  color: rgba(0, 111, 185);
  font-family: Raleway;
  text-align: center;
  margin-bottom: 8px;
  @media screen and (max-width: 768px) {
  }
`;
export const WoTw = styled.div`
  display: flex;
  border-top: 2px solid #eaebeb;
  padding-top: 16px;
  margin-top: 16px;
  margin-left: 12px;
  margin-right: 12px;
  justify-content: center;
  align-items: flex-start;
  @media screen and (max-width: 768px) {
  }
`;
export const WoTwSp = styled.span`
  margin-right: 4px;
  @media screen and (max-width: 768px) {
  }
`;
export const WoTwCon = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const WoTwAt = styled.a`
  color: inherit;
  background-color: transparent;
  text-decoration: inherit;
  @media screen and (max-width: 768px) {
  }
`;
export const WoTwPa = styled.p`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.16px;
  text-align: right;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
  }
`;
export const WoTwDivOn = styled.div`
  font-weight: 700;
  text-align: center;
  @media screen and (max-width: 768px) {
  }
`;
export const WoTwSpa = styled.span`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 22px;
  letter-spacing: 0.16px;
  text-align: right;
  @media screen and (max-width: 768px) {
  }
`;
export const PrWr = styled.div`
  position: relative;
  min-height: 80px;
  @media screen and (max-width: 768px) {
  }
`;
export const PrCon = styled.div`
  margin-top: -40px;
  position: relative;
  z-index: -2;
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`;
export const PrSubCon = styled.div`
  background-color: #5caf47 !important;
  border-radius: 20px;
  padding-top: 56px;
  padding-bottom: 16px;
  padding-left: 20px;
  padding-right: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const PrSuCon = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;
export const PrSuSp = styled.span`
  margin-right: 8px;
  @media screen and (max-width: 768px) {
  }
`;
export const PrMo = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  }
`;
export const PrWra = styled.div`
  color: rgba(255, 255, 255);
  font-weight: 400;
  font-size: 14px;
  text-align: right;
  margin-bottom: 0;
  font-family: Helvetica Now Display Medium;
  letter-spacing: 0.16px;
  @media screen and (max-width: 768px) {
  }
`;
export const PrCons = styled.div`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  margin-bottom: 0;
  text-align: right;
  line-height: 22px;
  @media screen and (max-width: 768px) {
  }
`;
export const PrConsSp = styled.span`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  @media screen and (max-width: 768px) {
  }
`;
export const PrConsSps = styled.span`
  color: rgba(255, 255, 255);
  font-size: 20px;
  font-weight: 700;
  font-family: Helvetica Now Text Regular;
  line-height: 22px;
  @media screen and (max-width: 768px) {
  }
`;
export const DaWr = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 16px;
  margin-top: 16px;
  @media screen and (max-width: 768px) {
  }
`;
export const DaCon = styled.div`
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
  }
`;
export const DaSp = styled.span`
  padding-right: 4px;

  @media screen and (max-width: 768px) {
  }
`;
export const DaSubCon = styled.div`
  margin-right: 24px;

  @media screen and (max-width: 768px) {
  }
`;
export const DaSubPa = styled.p`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 22px;

  @media screen and (max-width: 768px) {
  }
`;
export const ItemButIc = styled.i`
  font-family: Font Awesome\6 Pro;
  font-style: normal;
  @media screen and (max-width: 768px) {
  }
`;
export const IteTwCon = styled.div`
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`;
export const IteTwCo = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const AbWr = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const AbCon = styled.div`
  border: 2px solid #eaebeb;
  border-radius: 10px;
  padding-bottom: 24px;
  padding-top: 24px;
  margin-bottom: 20px;
  padding-left: 24px;
  padding-right: 24px;
  @media screen and (max-width: 768px) {
    border: 2px solid #eaebeb;
    border-radius: 10px;
    padding-left: 24px;
    padding-right: 24px;
  }
`;
export const AbConHi = styled.h2`
  font-size: 16px;
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Display Bold;
  letter-spacing: 0.24px;
  line-height: 30px;
  text-align: right;
  margin-bottom: 16px;
  font-weight: inherit;
  @media screen and (max-width: 768px) {
  }
`;
export const AbHi = styled.div`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  @media screen and (max-width: 768px) {
  }
`;
export const AbHiUl = styled.ul`
  display: block;
  list-style: initial;
  padding-left: 28px;
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  margin: 0;
  padding: 0;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const AbHiLi = styled.li`
  font-size: 14px;
  color: rgba(68, 68, 68, var(--text-opacity));
  font-family: Helvetica Now Text Regular;
  line-height: 24px;
  list-style: initial;
  @media screen and (max-width: 768px) {
  }
`;
export const AbConSub = styled.div`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  line-height: 22px;
  text-align: right;
  @media screen and (max-width: 768px) {
  }
`;
export const AbConPa = styled.p`
  font-size: 16px;
  letter-spacing: 0.16px;
  line-height: 24px;
  text-align: right;
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  @media screen and (max-width: 768px) {
  }
`;
export const AbConHe = styled.h3`
  font-size: 16px;
  color: rgba(68, 68, 68);
  letter-spacing: 0.24px;
  line-height: 30px;
  text-align: right;
  margin-bottom: 16px;
  font-family: Helvetica Now Display Bold;
  @media screen and (max-width: 768px) {
  }
`;
export const IteTwWr = styled.div`
  padding-bottom: 24px;
  padding-top: 24px;
  @media screen and (max-width: 768px) {
  }
`;
export const IteTwCoPa = styled.p`
  color: rgba(68, 68, 68);
  font-family: Helvetica Now Text Regular;
  letter-spacing: 0.16px;
  font-size: 14px;
  font-style: italic;
  line-height: 22px;
  text-align: right;
  @media screen and (max-width: 768px) {
  }
`;
export const IteTwCoPar = styled.p`
  font-size: 16px;
  letter-spacing: 0.16px;
  line-height: 24px;
  text-align: right;
  color: rgba(68, 68, 68, var(--text-opacity));
  font-family: Helvetica Now Text Regular;
  @media screen and (max-width: 768px) {
  }
`;
export const FinWrap = styled.div`
  display: block;
  padding-right: 10px;
  padding-left: 10px;
  @media screen and (max-width: 768px) {
  }
`;
