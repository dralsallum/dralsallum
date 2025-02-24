import styled, { keyframes } from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const StyledSpinner = styled(FontAwesomeIcon)`
  animation: ${rotate} 1s linear infinite;
  color: blue;
  height: 34px;
  width: 50px;
  padding: 30px;
`;

const loadingAnimation = keyframes`
  0% { width: 0%; }
  100% { width: 100%; }
`;

export const LoadingBarContainer = styled.div`
  width: 100%;
  background-color: #ddd;
  border-radius: 5px;
  overflow: hidden;
`;

export const LoadingBar = styled.div`
  height: 20px;
  background-color: white;
  width: 100%;
  text-align: center;
  line-height: 20px;
  color: white;
  animation: ${loadingAnimation} 2s linear infinite;
`;

export const QuizBody = styled.div`
  direction: rtl;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
  }
`;
export const QuizHe = styled.h3`
  font-size: 1.4rem;

  @media screen and (max-width: 768px) {
  }
`;
export const QuizPara = styled.p`
  font-size: 1.6rem;
  color: #494949;

  @media screen and (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const IntroBod = styled.header`
  padding: 25px 30px;
  background-color: #33a474;
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const Intro = styled.div`
  padding: 15px 30px;
  background-color: #33a474;
  padding: 5px 15px 15px;
  position: relative;
  text-align: center;
  color: #fff;

  @media screen and (max-width: 768px) {
  }
`;
export const IntroText = styled.h1`
  color: #fff;
  font-size: 2rem;
  line-height: 1.125;
  margin-bottom: 10px;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;
export const OpCon = styled.section`
  direction: rtl;
  align-items: center;
  background-color: #33a474;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  padding: 15px;
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;

export const LoginSignInput = styled.input`
  padding: 6px;
  height: 35px;
  margin-bottom: 8px;
  background-color: white;
  width: 98%;
  border-radius: 8px;
  font-size: 16px;
`;

export const LoginSignSubHeader = styled.h5`
  margin-bottom: 5px;
`;

export const RegistarButton = styled.button`
  border-radius: 8px;
  width: 100%;
  height: 30px;
  border: none;
  margin-top: 5px;
  background-color: #073c46;
  color: #fff;
  border-color: darkgray;
  cursor: pointer;

  :hover {
    cursor: pointer;
  }
`;
export const ProgressCal = styled.progress`
  display: none;
`;
export const ProgressCon = styled.div`
  display: none;
`;
export const OpMain = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  display: flex;
  flex: 0 0 100%;
  flex-direction: row;
  justify-content: flex-start;
  margin-bottom: 10px;
  max-width: 550px;
  padding: 10px;
  position: relative;
  width: 100%;
  z-index: 4;

  @media screen and (max-width: 768px) {
  }
`;
export const OpImg = styled.img`
  height: 30px;
  width: 30px;
  max-width: 100%;
  border-style: none;

  @media screen and (max-width: 768px) {
  }
`;
export const OpText = styled.div`
  max-width: 100%;
  padding-left: 10px;

  @media screen and (max-width: 768px) {
  }
`;
export const OpSubText = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  @media screen and (max-width: 768px) {
  }
`;

export const QuizCon = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    padding-left: 30px;
    padding-right: 30px;
  }
`;
export const QuizFieldset = styled.fieldset`
  margin: 25px 0 0;
  border: none;
  opacity: ${(props) => (props.$current ? 1 : 0.5)};
  min-width: 0;
  max-width: none;
  padding-bottom: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-bottom-width: 1px;
  border-color: rgb(221 223 226 / opacity: 1);
  transition-property: opacity;
  transition-duration: 0.5s;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  border-bottom: 1px solid #dddfe2;

  @media screen and (max-width: 768px) {
  }
`;
export const FieldDiv = styled.div`
  font-size: 1.125rem;
  line-height: 1.5;
  margin-bottom: 0;
  width: 100%;
  text-align: center;
  text-wrap: balance;
  display: block;

  @media screen and (max-width: 768px) {
  }
`;
export const QuizDiv = styled.div`
  margin-bottom: 20px;
  margin-top: 40px;
  width: 100%;
  justify-content: center;
  margin: 30px 0 0;
  flex-wrap: nowrap;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media screen and (max-width: 768px) {
    margin: 15px 0 0;
  }
`;

export const ScoreSection = styled.div`
  font-size: 1.75rem;
  color: #88619a;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const ScoreSectioTwo = styled.div`
  font-size: 1.75rem;
  color: #33a474;

  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }
`;
export const ScoreSectionProgress = styled.div`
  flex: 0 0 438px;
  margin: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex: 0 0 250px;
    margin: 0 20px;
  }
`;
export const ScoreSectionbackground = styled.span`
  margin: 0;
  vertical-align: middle;
  display: block;
  color: #33a474;
  text-decoration-color: rgba(51, 164, 116, 0.5);

  @media screen and (max-width: 768px) {
  }
`;

export const QuestionSection = styled.label`
  position: relative;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  align-items: self-start;
  @media screen and (max-width: 768px) {
  }
`;

export const QuestionCount = styled.input`
  cursor: pointer;
  display: block;
  position: absolute;
  width: 30px;
  height: 30px;
  opacity: 0;
  box-sizing: border-box;
  padding: 0;
  overflow: visible;
  font-size: 100%;
  font-family: inherit;
  margin: 0;

  @media screen and (max-width: 768px) {
  }
`;

export const QuestionCountSpan = styled.span`
  width: ${(props) => props.size || "45px"};
  height: ${(props) => props.size || "45px"};
  border-style: solid;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  box-shadow: inset 0 1px rgba(81, 89, 106, 0.05);
  border: 1px solid ${(props) => props.$borderColor || "#33a474"};
  background-color: ${(props) =>
    props.$selected ? props.$borderColor : "#fff"};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;

export const QuestionBut = styled.button`
  max-width: 300px;
  min-width: 260px;
  font-size: 1.125rem;
  font-height: 1.55555556;
  background-color: #88619a;
  border-color: #88619a;
  color: #fff;
  border-radius: 40px;
  height: 60px;
  padding: 14px 40px;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const TimerText = styled.div`
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;

  @media screen and (max-width: 768px) {
  }
`;

export const AnswerSection = styled.div`
  align-items: center;
  border-bottom: 1px solid #dddfe2;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  max-width: 700px;
  padding: 15px 0 50px;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const QuizButton = styled.button`
  font-size: 16px;
  color: #000000;
  background-color: #ffffff;
  border-radius: 15px;
  display: flex;
  padding: 12px;
  justify-content: flex-start;
  align-items: center;
  border: none;
  cursor: pointer;
  margin: 10px;

  & svg {
    margin-right: 5px;
  }

  @media screen and (max-width: 768px) {
  }
`;

export const ResCon = styled.div`
  background-color: #dddfe2;
  padding: 20px 15px;
  z-index: 21;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;
export const ResBox = styled.div`
  background-color: #fff;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  height: 545px;
  width: 545px;
  min-height: 485px;
  width: 100%;
  margin: 0;
  border: none;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 10px 40px rgba(29, 36, 50, 0.1);
  z-index: 1;
  @media screen and (max-width: 768px) {
  }
`;
export const ResBor = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  @media screen and (max-width: 768px) {
  }
`;
export const ResCar = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  padding: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const ResFie = styled.div`
  overflow-y: hidden;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  z-index: 1;
  position: relative;
  padding: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const ResAll = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
  }
`;
export const ResOp = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
  }
`;
export const ResRoof = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
  }
`;
export const ResDot = styled.div`
  background-color: #4298b4;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
  @media screen and (max-width: 768px) {
  }
`;
export const ResOpBut = styled.div`
  margin-bottom: 0;
  color: #fff;
  background-color: #073c46;
  border-radius: 40px;
  font-size: 1rem;
  height: 50px;
  line-height: 1.5;
  padding: 10px 25px;
  align-items: center;
  border: 1px solid transparent;
  cursor: pointer;
  display: inline-flex;
  font-family: var(--font-family-text);
  font-weight: var(--font-btn-font-weight);
  justify-content: center;
  outline: 0;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  vertical-align: middle;
  width: auto;
  text-transform: none;
  overflow: visible;

  @media screen and (max-width: 768px) {
  }
`;
export const ResTop = styled.div`
  display: flex;
  justify-content: center;
  height: 255px;
  background-color: #f6f6f7;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 5px),
    73% calc(100% - 10px),
    29% 100%,
    0 calc(100% - 15px)
  );
  position: absolute;
  top: 3px;
  left: 0;
  right: 0;
  z-index: -1;
  @media screen and (max-width: 768px) {
  }
`;
export const ResTit = styled.div`
  font-size: 1rem;
  line-height: 1.14285714;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
  }
`;
export const ResSubTit = styled.div`
  font-size: 1.75rem;
  line-height: 1.14285714;
  margin-bottom: 5px;

  @media screen and (max-width: 768px) {
  }
`;
export const ResTyCon = styled.div`
  color: #e4ae3a;
  font-size: 1rem;
  line-height: 1.14285714;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const ResBot = styled.div`
  text-align: center;
  font-size: 1rem;
  line-height: 1.14285714;
  margin-bottom: 5px;
  @media screen and (max-width: 768px) {
  }
`;
export const ResImg = styled.img`
  width: 100%;
  @media screen and (max-width: 768px) {
  }
`;
export const ResMid = styled.div`
  width: 160px;
  margin-bottom: 20px;
  @media screen and (max-width: 768px) {
  }
`;
export const ResTySp = styled.span`
  clip: rect(0 0 0 0);
  border: 0;
  height: auto;
  margin: 0;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  @media screen and (max-width: 768px) {
  }
`;
export const ResHr = styled.hr`
  top: 0;
  left: 0;
  right: 0;
  bottom: auto;
  background-color: #e4ae3a;
  margin: 0;
  border: none;
  border-radius: 10px 10px 0 0;
  clip-path: polygon(0 0, 100% 0, 100% 40%, 0 40%);
  height: 10px;
  position: absolute;
  transform: rotate(1turn);
  width: auto;

  @media screen and (max-width: 768px) {
  }
`;
export const QueSpa = styled.span`
  font-size: 1.4rem;
  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;
export const ShareIcon = styled.div`
  display: flex;
  padding-top: 0.5rem;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  padding-bottom: 1.5rem;
  @media screen and (max-width: 768px) {
  }
`;
export const ShareTit = styled.div`
  display: flex;
  padding-top: 0.5rem;
  justify-content: center;
  gap: 0.5rem;
  width: 100%;
  font-size: 1.4rem;
  color: gray;
  @media screen and (max-width: 768px) {
  }
`;
export const ShareCon = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: gray;

  @media screen and (max-width: 768px) {
  }
`;
