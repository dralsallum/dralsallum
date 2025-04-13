import styled from "styled-components";

export const QuizBody = styled.div`
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  height: 100vh;
  background-color: #fdf4ec;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
`;

export const QuizApp = styled.div`
  background-color: #fdf4ec;
  width: 650px;
  min-height: 400px;
  height: min-content;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export const ScoreSection = styled.div`
  display: flex;
  font-size: 24px;
  align-items: center;
  justify-content: center;
`;

export const QuestionSection = styled.div`
  width: 100%;
  position: relative;
`;

export const QuestionCount = styled.div`
  margin-bottom: 20px;
`;

export const QuestionCountSpan = styled.span`
  font-size: 28px;
`;

export const QuestionText = styled.div`
  margin-bottom: 12px;
`;

export const TimerText = styled.div`
  background: rgb(230, 153, 12);
  padding: 15px;
  margin-top: 20px;
  margin-right: 20px;
  border: 5px solid rgb(255, 189, 67);
  border-radius: 15px;
  text-align: center;
`;

export const AnswerSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const QuizButton = styled.button`
  font-size: 14px;
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

  &:hover {
    background-color: #f8ff8f;
  }

  &:focus {
    outline: none;
  }

  & svg {
    margin-right: 5px;
  }
`;

export const Correct = styled.div`
  background-color: #2f922f;
`;

export const Incorrect = styled.div`
  background-color: #ff3333;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const InputfieldContainer = styled.div`
  background-color: #ffffff;
  border-radius: 5px;
  border: 3px solid #434f64;
  padding: 0.5rem 1rem;
  justify-content: space-between;
  width: 100%;
  height: auto;
`;

export const Inputfield = styled.input`
  width: 90%;
  padding: 5px;
  border: none;
  border-style: none;
  outline: none;
  height: 4rem;
  font-size: 26px;
`;
