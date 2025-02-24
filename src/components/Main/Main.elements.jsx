import styled from "styled-components";

export const Button = styled.button`
  border-radius: 8px;
  background: #886199;
  padding: 10px 15px;
  color: #fff;
  font-size: 14px;
  outline: none;
  cursor: pointer;
  width: 70%;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #000;
  }

  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const MaWrapper = styled.div`
  direction: rtl;
  background: #073c46;
  position: relative;
  border: none;
  outline: none;
  padding: 0px;
  margin: 0;
  flex: 1;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;

export const MaAll = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  margin: 0;
  background: #073c46;
  width: 100%;
  padding-right: 8px;
  padding-left: 8px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const MaImWrapper = styled.div`
  direction: rtl;
  background: #073c46;
  position: relative;
  border: none;
  outline: none;
  padding: 0px;
  margin: 0;
  flex: 1;
  display: flex; // Ensures the child fills the container
  align-items: stretch; // Stretch child vertically

  @media screen and (max-width: 768px) {
  }
`;
export const MaImag = styled.img`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  border: none;
  outline: none;
  display: block;

  @media screen and (max-width: 768px) {
  }
`;

export const MaConTwo = styled.div`
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
  padding: 25px 10px 10px;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    padding: 25px 10px 0px;
  }
`;
export const MaSubTwo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const MaTwo = styled.div`
  width: 20%;
  border-bottom: 1px solid #f2c3a2;

  margin-bottom: 0.8rem;

  @media screen and (max-width: 768px) {
    align-self: center;
  }
`;
export const MaHe = styled.h1`
  color: #ffffff;
  font-family: Raleway Medium;
  font-size: 3.2rem;
  color: #f2c3a2;

  @media screen and (max-width: 768px) {
    font-size: 1.9rem;
  }
`;
export const MaPara = styled.p`
  color: #ffffff;
  font-family: Raleway Medium;
  font-size: 1.8rem;
  margin-bottom: 14px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const MaInput = styled.input`
  border-radius: 10px;
  color: #666;
  font: normal normal 500 16px/18px Helvetica Now Text Regular;
  letter-spacing: 0.16px;
  opacity: 1;
  text-align: right;
  width: 100%;
  overflow: visible;
  border: none;
  outline: none;

  @media screen and (max-width: 768px) {
  }
`;
