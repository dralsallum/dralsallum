import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

export const loadingAnimation = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

export const LoadingContainer = styled.div`
  width: 100%;
  height: 4px;
  overflow: hidden;
  background-color: #f0f0f0;
  position: relative;
  margin-top: 20px;
`;

export const LoadingBar = styled.div`
  width: 100%;
  height: 100%;
  background-color: #073c46;
  animation: ${loadingAnimation} 1.5s infinite linear;
`;

export const ArWrapper = styled.div`
  display: flex;
  margin-bottom: 1.875rem;
  margin: 0;
  padding: 3rem;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  direction: rtl;

  @media screen and (max-width: 768px) {
    padding: 1rem;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ArContainerF = styled.section`
  display: grid;

  @media screen and (min-width: 34em) {
    grid-template-columns: repeat(3, 1fr);
    margin-bottom: 1rem;
    grid-template-rows: 50% 23% 27%;
    margin: 0;
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const ArSubCon = styled.div`
  max-height: 500px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
    max-height: 400px;
  }
`;
export const ArContCon = styled.div`
  padding-bottom: 66.6%;
  border-radius: 9px;
  border-bottom-right-radius: 0;
  background-color: #c7c7c7;
  height: 0;
  overflow: hidden;
`;
export const ArConImg = styled.img`
  object-position: top;
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  transition: transform 0.5s ease-in-out;
  filter: grayscale(1%);
  max-width: 100%;
  aspect-ratio: auto 600 / 400;

  @media screen and (max-width: 700px) {
  }
`;
export const ArContaine = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;
`;
export const ArContainerS = styled.div`
  font-size: 2.125rem;
  flex-grow: 1;
  min-height: 2.5rem;
  line-height: 1.1;
  color: #13404f;
  margin-bottom: 0.8rem;

  @media screen and (max-width: 768px) {
  }
`;
export const ArContain = styled.span`
  transition: all 0.15s ease-in-out;
`;
export const WhoWr = styled.div`
  font-family: Merriweather, Verdana, Arial, serif;
  font-size: 0.8125rem;
  line-height: 1.4;
  color: #646464;
`;
export const WhoSp = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  background: 0 0;
`;
export const SmWr = styled(Link)`
  margin-left: 1.25rem;
  grid-column: 1 / 2;
  grid-row: 3 / 4;
  margin: 0.625rem 0rem 0.625rem 0.625rem;
  border-radius: 9px;
  border-bottom-right-radius: 0;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  color: #646464;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  background: #fff;
  min-height: 0;
  position: relative;
  z-index: 0;
  text-decoration: none;
  outline: 0;
  transition: color 0.15s ease-out;

  @media screen and (max-width: 768px) {
    border-radius: 9px;
    border-bottom-right-radius: 0;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    color: #646464;
    cursor: pointer;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    background: #fff;
    min-height: 0;
    position: relative;
    z-index: 0;
    margin: 0rem;
    margin-bottom: 1rem;
  }
`;
export const ArSubContainerF = styled(Link)`
  margin-right: 1.25rem;
  grid-column: 1 / 4;
  grid-row: 1 / 3;
  margin: 0rem 0rem 0.625rem 1rem;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  color: #646464;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  background: #fff;
  min-height: 0;
  position: relative;
  z-index: 0;
  text-decoration: none;
  outline: 0;
  transition: color 0.15s ease-out;

  @media screen and (max-width: 768px) {
    border-radius: 9px;
    border-bottom-left-radius: 0;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    color: #646464;
    cursor: pointer;
    margin: 0.625rem;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    background: #fff;
    min-height: 0;
    position: relative;
    z-index: 0;
    margin: 0rem;
    margin-bottom: 1rem;
  }
`;

export const SmoWr = styled(Link)`
  margin-right: 1.25rem;
  grid-column: 2 / 3;
  grid-row: 3 / 4;
  margin: 0.625rem 1.25rem 0.625rem 0;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  color: #646464;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  background: #fff;
  min-height: 0;
  position: relative;
  z-index: 0;
  text-decoration: none;
  outline: 0;
  transition: color 0.15s ease-out;

  @media screen and (max-width: 768px) {
    border-radius: 9px;
    border-bottom-left-radius: 0;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    color: #646464;
    cursor: pointer;
    margin: 0.625rem;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    background: #fff;
    min-height: 0;
    position: relative;
    z-index: 0;
    margin: 0rem;
    margin-bottom: 1rem;
  }
`;
export const SmuWr = styled(Link)`
  margin-left: 1.25rem;
  grid-column: 3 / 4;
  grid-row: 3 / 4;
  margin: 0.625rem 1.25rem 0.625rem 0;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
  display: flex;
  flex-direction: column;
  color: #646464;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  background: #fff;
  min-height: 0;
  position: relative;
  z-index: 0;
  text-decoration: none;
  outline: 0;
  transition: color 0.15s ease-out;

  @media screen and (max-width: 768px) {
    margin: 0 0 1rem;
    border-radius: 9px;
    border-bottom-left-radius: 0;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
    display: flex;
    flex-direction: column;
    color: #646464;
    cursor: pointer;
    margin: 0.625rem;
    overflow: hidden;
    backface-visibility: hidden;
    transform: translate3d(0, 0, 0);
    background: #fff;
    min-height: 0;
    position: relative;
    z-index: 0;
    margin: 0rem;
    margin-bottom: 1rem;
  }
`;
export const SmCon = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const SmSub = styled.div`
  display: block;
  line-height: 1.15;
  color: #13404f;
  flex-grow: 1;
  margin-bottom: 0.8rem;
  font-size: 1.5rem;

  @media screen and (max-width: 768px) {
  }
`;
export const SmSp = styled.div`
  transition: all 0.15s ease-in-out;

  @media screen and (max-width: 768px) {
  }
`;
export const MonWr = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  gap: 0.5rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const MonCon = styled.div`
  background-color: #d0ede1;
  margin-bottom: 0;
  margin-right: 0;
  flex-basis: 50%;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  display: flex;
  flex-flow: column;
  background: #d0ede1;
  padding: 1rem;
  flex: 1;
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const MonUl = styled.ul`
  margin-bottom: 0;
  flex-basis: 50%;
  list-style: none;

  @media screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;
export const MonLi = styled.li`
  height: 100%;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  font-size: 1.0625rem;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  color: #212121;

  @media screen and (max-width: 768px) {
  }
`;
export const MonAt = styled(Link)`
  height: 100%;
  padding: 1rem;
  background-color: #13404f;
  box-shadow: unset;
  margin: 0;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  display: flex;
  flex-direction: column;
  color: #646464;
  cursor: pointer;
  overflow: hidden;
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  min-height: 0;
  position: relative;
  z-index: 0;
  text-decoration: none;
  outline: 0;
  transition: color 0.15s ease-out;

  @media screen and (max-width: 768px) {
  }
`;
export const MonSub = styled.div`
  border-radius: 9px;
  border-bottom-left-radius: 0;
  max-height: 280px;
  height: 280px;
  overflow: hidden;
  position: relative;

  @media screen and (max-width: 768px) {
  }
`;
export const MonSu = styled.div`
  padding-bottom: 66.6%;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  background-color: #c7c7c7;
  height: 0;
  overflow: hidden;

  @media screen and (max-width: 768px) {
  }
`;
export const MonTr = styled.div`
  background-color: #86e8ba;
  color: #13404f;
  border-radius: 6px;
  border-bottom-right-radius: 0;
  position: absolute;
  transform: translate(-50%, 0);
  left: 50%;
  z-index: 2;
  white-space: nowrap;
  font-size: 0.8125rem;
  font-weight: 800;
  line-height: 1.2;
  letter-spacing: unset;
  padding: 0.25rem 0.5rem;
  text-transform: capitalize;
  margin-top: -0.75rem;

  @media screen and (max-width: 768px) {
  }
`;
export const MonImg = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  position: absolute;
  object-fit: cover;
  object-position: top;
  transition: transform 0.5s ease-in-out;
  filter: grayscale(1%);
  max-width: 100%;

  @media screen and (max-width: 768px) {
  }
`;
export const MonBo = styled.div`
  position: relative;
  padding: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const MonBot = styled.div`
  margin: 1.5rem 0 0.75rem;
  color: #fff;
  font-weight: 800;
  line-height: 1.12;
  display: block;
  font-size: 1.5rem;
  flex-grow: 1;

  @media screen and (max-width: 768px) {
  }
`;
export const MonSp = styled.span`
  transition: all 0.15s ease-in-out;

  @media screen and (max-width: 768px) {
  }
`;
export const MonSpa = styled.span`
  border-radius: 9px;
  border-bottom-left-radius: 0;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  color: #13404f;
  line-height: 1.15;
  align-self: center;
  font-size: 1.125rem;
  font-weight: 800;
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-out;

  @media screen and (max-width: 768px) {
  }
`;
export const ThWr = styled.div`
  border-radius: 9px;
  border-bottom-left-radius: 0;
  display: inline-block;
  text-align: center;
  background-color: #fff;
  color: #13404f;
  line-height: 1.15;
  align-self: center;
  font-size: 1.125rem;
  font-weight: 800;
  padding: 0.5rem 1rem;
  transition: all 0.15s ease-out;

  @media screen and (max-width: 768px) {
  }
`;
export const TitDiv = styled.div`
  content: attr(data-kicker);
  display: block;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  font-weight: 600;
  color: #257f69;
  font-size: 0.875rem;
  margin: 0;
  margin-top: -0.25rem;
  margin-bottom: 0.25rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;
export const ThImg = styled.img`
  width: 190px;
  margin: 1rem auto;
  display: block;
  max-width: 100%;
  height: auto;

  @media screen and (max-width: 768px) {
  }
`;
export const ThSt = styled.strong`
  max-width: none;
  color: #13404f;
  font-size: 1.375rem;
  line-height: 1.2;
  margin-bottom: 0.4rem;
  font-weight: 700;
  display: inline-block;
  text-align: center;
  align-self: center;

  @media screen and (max-width: 768px) {
  }
`;
export const ThPa = styled.p`
  text-align: center;
  font-size: 1rem;
  padding-right: 0.625rem;
  margin-bottom: 1em;
  font-family: Merriweather, Verdana, Arial, serif;

  @media screen and (max-width: 768px) {
  }
`;
export const ThSp = styled.span`
  font-size: 1.0625rem;

  @media screen and (max-width: 768px) {
  }
`;
export const ThAt = styled(Link)`
  align-self: center;
  text-decoration: none;
  font-size: 1.0625rem;
  padding: 0.6471rem 1.14rem;
  letter-spacing: 0;
  text-transform: capitalize;
  margin-bottom: 0.9rem;
  margin-right: 0.4rem;
  border-radius: 9px;
  border-bottom-left-radius: 0;
  outline: 0;
  display: inline-block;
  border: 0;
  background: #257f69;
  color: #fff;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  transition: all 0.15s ease-out;

  @media screen and (max-width: 768px) {
  }
`;
export const ThAtt = styled(Link)`
  display: flex;
  align-self: center;
  justify-content: center;
  color: #212121;
  letter-spacing: 1px;
  text-decoration: none;
  outline: 0;
  transition: color 0.15s ease-out;

  @media screen and (max-width: 768px) {
  }
`;
export const ThSpa = styled.span`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  background: 0 0;

  @media screen and (max-width: 768px) {
  }
`;
