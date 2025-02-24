import styled from "styled-components";

export const SignContainer = styled.div`
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  direction: rtl;
  margin-top: 2rem;
`;

export const LoginContainer = styled.div`
  width: 300px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 1px solid lightgray;
  padding: 20px;
`;

export const LoginSignHeader = styled.h1`
  font-weight: 500;
  margin-bottom: 20px;
`;

export const LoginSignSubHeader = styled.h5`
  margin-bottom: 5px;
`;

export const LoginSignInput = styled.input`
  height: 30px;
  margin-bottom: 10px;
  background-color: white;
  width: 98%;
  border-radius: 2px;
`;

export const LoginSignPara = styled.p`
  margin-top: 15px;
  font-size: 12px;
`;

export const SignButton = styled.button`
  background-color: #2946b6;
  border-radius: 4px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: #1a2d8a;
  color: white;

  :hover {
    cursor: pointer;
  }
`;

export const RegistarButton = styled.button`
  border-radius: 4px;
  width: 100%;
  height: 30px;
  border: 1px solid;
  margin-top: 10px;
  border-color: darkgray;
  cursor: pointer;

  :hover {
    cursor: pointer;
  }
`;

export const SignUpForm = styled.form``;
