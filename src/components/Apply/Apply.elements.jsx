import styled from "styled-components";

export const ApWrap = styled.div`
  direction: rtl;
  background: transparent linear-gradient(180deg, #ffffff 0%, #fbf6eb 100%) 0%
    0% no-repeat padding-box;
`;

export const ApSubWrap = styled.div`
  background-image: url("https://www.amnhealthcare.com/contentassets/3b62b90845a64ba09601a5f67ce8cde4/oneapplylarge.png");
  width: 100%;
  background-position: 50% 250px;
  background-repeat: no-repeat;
  background-size: 1000px;
  min-height: 800px;
  max-width: 100%;
  padding: 20px 75px;
  margin: 0 auto;

  @media screen and (max-width: 768px) {
    background-position: 50% 250px;
    background-repeat: no-repeat;
    background-size: 1000px;
    min-height: 600px;
    max-width: 100%;
    padding: 20px 25px;
    margin: 0 auto;
    background-image: none;
  }
`;

export const ApConOn = styled.div`
  padding: 0 15px;
  @media screen and (max-width: 768px) {
  }
`;

export const ApConTw = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
export const ApHe = styled.h1`
  font-size: 38px;
  line-height: 38px;
  color: #ff7043;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.7px;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (max-width: 768px) {
    color: #ff7043;
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.7px;
    line-height: 36px;
    text-align: center;
  }
`;
export const ApHeBe = styled.div`
  color: #545454ff;
  font-family: Helvetica Now Display Bold;
  letter-spacing: 0.18px;
  text-align: center;
  font-size: 26px;
  line-height: 28px;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
export const ApHeDi = styled.div`
  color: #444;
  font-family: Helvetica Now Text Regular;
  font-size: 14px;
  letter-spacing: -0.28px;
  line-height: 20px;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
{
  /*it will become display on on small screens*/
}
export const AqCon = styled.div`
  background-image: none;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  height: 130px;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -40px;

  @media screen and (max-width: 768px) {
    height: 250px;
    background-image: url("https://www.amnhealthcare.com/contentassets/3b62b90845a64ba09601a5f67ce8cde4/oneapplysmall.png");
  }
`;

export const AqSubCon = styled.div`
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const AqMain = styled.div`
  background-color: rgba(255, 255, 255);
  border-radius: 8px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.10196);
  margin-left: 60px;
  margin-right: 60px;
  padding-right: 60px;
  padding-left: 60px;
  margin-top: 0;

  @media screen and (max-width: 768px) {
    margin-left: 0px;
    margin-right: 0px;
    margin-top: -140px;
    padding-right: 10px;
    padding-left: 10px;
  }
`;
export const AqSec = styled.section`
  @media screen and (max-width: 768px) {
  }
`;
export const AqSubSec = styled.div`
  padding-bottom: 0;
  padding-top: 30px;
  border-radius: 8px;
  background-color: #fff;
  background-image: none;
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    padding-right: 0;
    padding-top: 30px;
  }
`;
export const AqAra = styled.div`
  display: flex !important;
  flex-direction: column;
  padding: 0 !important;
  width: 100%;
  box-shadow: none !important;
  border-radius: 10px;
  gap: 16px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const AqAraOne = styled.div`
  margin-bottom: 0;
  width: 100%;
  display: block !important;
  padding-left: 0;
  padding-right: 0;
  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;
export const AqAraOnePa = styled.p`
  color: #545454ff;
  font-family: Helvetica Now Display Bold;
  font-size: 20px;
  letter-spacing: 0.18px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 28px;
  }
`;
export const AqAraTwo = styled.div`
  border-radius: 8px;
  padding-bottom: 10px;
  padding-top: 10px;
  width: 100%;
  max-width: 100%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
  }
`;
export const ApFo = styled.form`
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  max-width: 720px;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const ApFoIn = styled.input`
  margin: 0 0 1.5rem 0;
  color: inherit;
  line-height: inherit;
  padding: 0;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  display: none !important;
  background-color: #fff;

  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
  }
`;
export const ApFoInput = styled.input`
  color: inherit;
  line-height: inherit;
  padding: 0;
  overflow: visible;
  font-family: inherit;
  font-size: 100%;
  margin: 0;
  display: none;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
  }
`;
export const ApFoNo = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
export const ApNo = styled.div`
  padding: 1rem;
  margin: 1rem 0;
  display: none !important;

  @media screen and (max-width: 768px) {
  }
`;
export const AdCon = styled.div`
  @media screen and (max-width: 768px) {
  }
`;

export const AdConSec = styled.section`
  // display: flex;
  // flex-direction: row;
  // flex-wrap: wrap;
  // justify-content: space-between;
  position: relative;
  width: 100%;
  margin-top: 0;
  margin: 0 0 1.5rem 0;
  @media screen and (max-width: 768px) {
  }
`;
export const TmCon = styled.div`
  background-color: transparent;
  margin-bottom: 0;
  padding: 0;
  align-items: center;
  bottom: -4px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  left: 0;
  position: relative;
  right: 0;
  text-align: center;
  top: -4px;
  margin-left: 5px;
  margin-right: 5px;

  @media screen and (max-width: 768px) {
  }
`;
export const TmBut = styled.button`
  background-color: #ff7043;
  border-radius: 8px;
  color: rgba(255, 255, 255);
  display: inline-block;
  font-family: Helvetica Now Display Bold;
  height: auto;
  letter-spacing: 0.16px;
  line-height: 20px;
  line-height: 36px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: center;
  transition-duration: 0.2s;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  font-size: 16px !important;
  line-height: 30px !important;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-top: 12px;
  box-shadow: none;
  cursor: pointer;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const TmEq = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
  }
`;
export const TmInCon = styled.div`
  background-color: #f9f9f9;
  margin-bottom: 11px;
  padding: 15px;
  @media screen and (max-width: 768px) {
  }
`;
export const TmInSubCon = styled.div`
  width: 100%;
  position: relative;
  @media screen and (max-width: 768px) {
  }
`;
export const TmInLab = styled.label`
  background-color: transparent;
  color: rgba(102, 102, 102);
  font-family: Helvetica Now Text Regular;
  font-size: 16px;
  left: 10px;
  padding: 0 10px;
  pointer-events: none;
  position: absolute;
  top: 15px;
  transition: top 0.5s, font-size 0.5s;
  z-index: 0;
  text-align: left;
  display: inline-block;
  min-width: 15%;
  vertical-align: top;

  @media screen and (max-width: 768px) {
  }
`;
export const TmInSpan = styled.span`
  color: red;
  word-wrap: break-word;
  display: none;
  @media screen and (max-width: 768px) {
  }
`;
export const TmIn = styled.input`
  width: 100%;
  color: #333;
  font-family: Helvetica Now Text Regular;
  font-size: 16px;
  height: 54px;
  border: 1px solid #bbb;
  border-radius: 5px;
  line-height: inherit;
  overflow: visible;
  padding: 0 20px;
  margin: 0;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
  }
`;
export const ConOn = styled.div`
  display: none;
  top: 25px;
  left: 16px;
  position: absolute;
  @media screen and (max-width: 768px) {
  }
`;
export const ConTo = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
  }
`;
export const ConTh = styled.div`
  display: none;
  color: rgba(68, 68, 68);
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  margin-top: 24px;
  max-width: 456px;
  @media screen and (max-width: 768px) {
  }
`;
export const ConFo = styled.div`
  display: none;
  color: rgba(68, 68, 68);
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  margin-top: 24px;
  max-width: 456px;
  @media screen and (max-width: 768px) {
  }
`;
export const ConFi = styled.div`
  display: none;
  color: rgba(68, 68, 68);
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
  margin-top: 24px;
  max-width: 456px;
  @media screen and (max-width: 768px) {
  }
`;
export const HiWraOn = styled.div`
  margin-bottom: 20px;
  position: relative;
  width: 100%;
  margin: 0 0 1.5rem 0;

  @media screen and (max-width: 768px) {
  }
`;
export const HiOnLa = styled.label`
  background-color: #fff;
  color: #ff7043;
  font-size: 14px;
  top: -12px;
  font-family: Helvetica Now Text Regular;
  left: 10px;
  padding: 0 10px;
  pointer-events: none;
  position: absolute;
  transition: top 0.5s, font-size 0.5s;
  z-index: 0;
  display: inline-block;
  min-width: 15%;
  vertical-align: top;

  @media screen and (max-width: 768px) {
  }
`;
export const HiTwLa = styled.label`
  opacity: 0;
  background-color: transparent;
  color: #000;
  color: rgba(102, 102, 102);
  font-family: Helvetica Now Text Regular;
  font-size: 16px;
  left: 10px;
  padding: 0 10px;
  pointer-events: none;
  position: absolute;
  top: 15px;
  transition: top 0.5s, font-size 0.5s;
  z-index: 0;

  @media screen and (max-width: 768px) {
  }
`;
export const HiOnIn = styled.input`
  color: #333;
  font-family: Helvetica Now Text Regular;
  font-size: 16px;
  height: 54px;
  border: 1px solid #bbb;
  border-radius: 5px;
  line-height: inherit;
  padding: 0 20px;
  width: 100%;
  overflow: visible;
  background-color: #fff;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
  }
`;
export const HiOnSp = styled.span`
  color: red;
  display: none;
  word-wrap: break-word;
  @media screen and (max-width: 768px) {
  }
`;
export const HiFiLa = styled.label`
  background-color: #fff;
  color: #ff7043;
  font-size: 14px;
  top: -12px;
  left: 10px;
  padding: 0 10px;
  pointer-events: none;
  position: absolute;
  transition: top 0.5s, font-size 0.5s;
  z-index: 999;

  @media screen and (max-width: 768px) {
  }
`;
export const HiFiSel = styled.select`
  color: #333;
  font-family: Helvetica Now Text Regular;
  font-size: 16px;
  height: 54px;
  background-color: #fff;
  padding: 0 20px;
  text-indent: 1px;
  -o-text-overflow: "";
  text-overflow: "";
  border: 1px solid #bbb;
  border-radius: 5px;
  line-height: inherit;
  width: 100%;
  text-transform: none;

  &:focus {
    outline: none;
  }

  @media screen and (max-width: 768px) {
  }
`;
export const HiFiOp = styled.option`
  font-weight: normal;
  display: block;
  min-height: 1.2em;
  padding: 0px 2px 1px;
  white-space: nowrap;

  @media screen and (max-width: 768px) {
  }
`;
export const AgCon = styled.div`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const AgPa = styled.p`
  color: #666;
  font-family: Helvetica Now Display Medium;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.16px;
  text-align: right;

  @media screen and (max-width: 768px) {
  }
`;
export const AgPara = styled.p`
  display: block;
  @media screen and (max-width: 768px) {
  }
`;
export const AgBut = styled.button`
  background-color: rgba(0, 111, 185);
  border-radius: 8px;
  color: rgba(255, 255, 255);
  display: inline-block;
  font-family: Helvetica Now Display Bold;
  height: auto;
  letter-spacing: 0.16px;
  padding-left: 32px;
  padding-right: 32px;
  text-align: center;
  -o-transition-duration: 0.2s;
  transition-duration: 0.2s;
  -o-transition-property: all;
  transition-property: all;
  -o-transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  transition-timing-function: cubic-bezier(0.4, 0, 1, 1);
  font-size: 16px !important;
  line-height: 30px !important;
  margin-left: 0;
  margin-right: auto;
  margin-top: 10px;
  padding-bottom: 12px;
  padding-top: 12px;
  box-shadow: none;
  cursor: pointer;
  overflow: visible;
  width: 100%;
  background-color: #ff7043;
  @media screen and (max-width: 768px) {
  }
`;
export const MasterOne = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
export const MasterTwo = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
