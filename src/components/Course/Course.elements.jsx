import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { keyframes } from "styled-components";

const scaleAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #073c46;
  stroke: #000000; // same color as the fill for consistency
  stroke-width: 0.8em;
`;

export const Footer = styled.footer`
  display: block;
  bottom: 0px;
  left: 0px;
  position: sticky;
  width: 100%;
  z-index: 10;
`;
export const FooterNav = styled.nav`
  align-items: center;
  box-sizing: content-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: rgb(255, 255, 255);
  border-top: 0.125rem solid rgb(229, 231, 236);
  height: calc(3.875rem);
  font-weight: 600;

  @media screen and (max-width: 48rem) {
    height: calc(3rem);
  }
`;
export const FooterWrap = styled.div`
  margin: 0px auto;
  width: 100%;
  height: 100%;

  @media screen and (max-width: 48rem) {
    max-width: 38rem;
  }
`;
export const FooterList = styled.ul`
  align-items: stretch;
  display: flex;
  flex-flow: row;
  height: 100%;
  justify-content: space-around;
  list-style: none;
  margin: 0px;
  padding: 0px;
  background: rgb(255, 255, 255);
  color: rgb(99, 96, 93);
`;
export const FooterLiLe = styled(Link)`
  display: inline-flex;
  height: 100%;
  justify-content: center;
  border-top: ${(props) =>
    props.currentComponent === "question" ? "0.125rem solid #073c46" : "none"};
  background: rgb(255, 255, 255);
  color: inherit;
  text-decoration: inherit;
  transition: border-top 0.3s ease;
`;
export const FootLiCon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: calc(-0.125rem);
  cursor: pointer;
`;
export const FootLiIcon = styled.div`
  font-size: 1.25rem;
  height: 1.25rem;
  text-align: center;
  width: 1.25rem;
  background: rgb(255, 255, 255);
  color: #073c46;
  margin: calc(0.125rem);
`;
export const FootLiTex = styled.div`
  color: rgb(68, 66, 63);
  line-height: 140%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: calc(0.125rem);
`;
export const FooterLiRi = styled(Link)`
  color: inherit;
  text-decoration: inherit;
  background: rgb(255, 255, 255);
  border-top: ${(props) =>
    props.currentComponent === "store" ? "0.125rem solid #073c46" : "none"};
  display: inline-flex;
  height: 100%;
  justify-content: center;
  transition: border-top 0.3s ease;
`;

export const FooterPin = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0.5rem 1rem;
  text-align: center;
  margin: calc(-0.125rem);
  cursor: pointer;
  animation: ${scaleAnimation} 2s infinite;

  @media screen and (max-width: 48rem) {
    flex-direction: row;
    padding: 0px 1rem;
  }
`;

export const Foot = styled.div`
  color: rgb(68, 66, 63);
  font-size: 1rem;
  height: 1.25rem;
  text-align: center;
  width: 1.25rem;
`;
export const FootCon = styled.div`
  color: rgb(68, 66, 63);
  line-height: 140%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media screen and (max-width: 48rem) {
    font-size: 0.875rem;
  }
`;
