import styled from "styled-components";

export const ReWr = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const QuestionChapterProgressContainer = styled.div`
  position: relative;
  border-radius: 1rem;
  width: 30%;
  background-color: rgb(218, 225, 234);
`;

export const QuestionChapterProgress = styled.div`
  position: relative;
  height: 0.75rem;
  background-color: #4c47e9;
  transition: width 0.3s ease 0s;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  animation: 2s ease 0s 1 normal none running fAHHxO;
`;
export const QuestionChapterProgressSpan = styled.span`
  font-size: 0.625rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.25rem;
  right: calc(100% - 1.188rem);
  border-radius: 1.25rem;
  background-color: #4c47e9;
  color: rgb(255, 255, 255);
  padding: 0px 0.5rem;
  min-width: 30px;
  position: sticky;
  margin-bottom: 0rem;
`;

export const ApWrap = styled.div`
  direction: rtl;
  background: transparent linear-gradient(180deg, #ffffff 0%, #fbf6eb 100%) 0%
    0% no-repeat padding-box;
  height: 100vh;
`;

export const ApSubWrap = styled.div`
  background-image: url("https://www.amnhealthcare.com/contentassets/3b62b90845a64ba09601a5f67ce8cde4/oneapplylarge.png");
  width: 100%;
  background-position: 50% 150px;
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
  color: #005bbb;
  font-family: Raleway;
  font-size: 40px;
  font-weight: 700;
  letter-spacing: -0.7px;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (max-width: 768px) {
    color: #005bbb;
    font-family: Raleway;
    font-size: 26px;
    font-weight: 700;
    letter-spacing: -0.7px;
    line-height: 36px;
    text-align: center;
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
    margin-top: -200px;
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
export const AqCon = styled.div`
  background-image: none;
  background-position: 50% 35%;
  background-repeat: no-repeat;
  height: 330px;
  margin-left: -15px;
  margin-right: -15px;
  margin-top: -40px;

  @media screen and (max-width: 768px) {
    height: 550px;
    align-self: center;
    background-position: 50% 200px;
    background-image: url("https://www.amnhealthcare.com/contentassets/3b62b90845a64ba09601a5f67ce8cde4/oneapplysmall.png");
  }
`;
export const AqAraOne = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 0;
  width: 100%;
  height: 200px;
  display: block !important;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 15px;

  @media screen and (max-width: 768px) {
    height: 180px;
    padding-left: 0;
    padding-right: 0;
  }
`;
export const MainWr = styled.div`
  width: 100%;
  margin-top: 18px;

  @media screen and (max-width: 768px) {
  }
`;
export const MainIn = styled.input`
  @media screen and (max-width: 768px) {
  }
`;
export const MainForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const AqAraOnePa = styled.p`
  color: #062c57;
  font-family: Helvetica Now Display Bold;
  font-size: 26px;
  letter-spacing: 0.18px;
  font-weight: bold;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 16px;
    line-height: 28px;
  }
`;

export const FileUploadWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  padding: 8px 36px;
  text-align: center;
  width: 250px;
  background-color: #166b9b;
  color: white;
  border-radius: 4px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    min-width: 150px;
  }
`;

export const FileInput = styled.input`
  display: none; // Hide the default input
`;

export const Button = styled.button`
  border-radius: 4px;
  background: #006fb9;
  white-space: nowrap;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  outline: none;
  border: none;
  cursor: pointer;
  width: 200px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: #003c69;
  }

  @media screen and (max-width: 768px) {
    width: 100px;
  }
`;
