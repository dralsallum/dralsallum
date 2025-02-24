import styled from "styled-components";

export const ArWra = styled.div`
  direction: rtl;
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
  padding: 2.5rem;
  padding-top: 0rem;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column-reverse;
    flex-wrap: wrap;
    margin-bottom: 2.5rem;
    padding: 1rem;
  }
`;

export const ArCon = styled.div`
  order: 0;
  flex-basis: calc(30% - 1.25rem);
  margin-right: 1.25rem;
  font-family: Merriweather, Verdana, Arial, serif;
  font-size: 1rem;
  @media screen and (max-width: 700px) {
    font-family: Merriweather, Verdana, Arial, serif;
    font-size: 1rem;
    order: 2;
    flex-basis: 100%;
    margin-left: 0rem;
    margin-top: 0.5rem;
    margin-bottom: 2.75rem;
    margin-right: 0rem;
  }
`;

export const ArHe = styled.h3`
  white-space: nowrap;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 1;
  color: #13404f;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  word-wrap: break-word;
  font-weight: bold;
  margin-right: 0.25rem;

  @media screen and (max-width: 700px) {
    white-space: nowrap;
    font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    line-height: 1;
    color: #13404f;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-wrap: break-word;
    font-weight: bold;
    margin-bottom: 0.75rem;
    margin-right: 0.25rem;
  }
`;

export const ArUl = styled.ul`
  height: calc(100% - 30px);
  border-radius: 9px;
  border-bottom-right-radius: 0;
  box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
  background: #fff;
  padding: 0.5rem 1rem;
  list-style: none;
  @media screen and (max-width: 700px) {
    border-radius: 9px;
    border-bottom-right-radius: 0;
    box-shadow: 5px 5px 0 rgba(0, 0, 0, 0.03);
    background: #fff;
    list-style: none;
    padding: 0.5rem 1rem;
  }
`;

export const ArAt = styled.a`
  display: flex;
  height: 25%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: start;
  border-left: none;
  border-bottom: dotted 1px #d3d3d3;
  padding: 0;
  color: #1a55ad;
  text-decoration: none;
  outline: 0;
  transition: color 0.15s ease-out;

  &.last-item {
    border-bottom: none;
  }

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: dotted 1px #d3d3d3;
    height: 25%;
    color: #1a55ad;
    text-decoration: none;
    outline: 0;
    transition: color 0.15s ease-out;

    &.last-item {
      border-bottom: none;
    }
  }
`;

export const ArRe = styled.div`
  order: 0;
  margin-bottom: 0;
  margin-left: 0rem;
  color: #000;
  line-height: 22px;
  @media screen and (max-width: 700px) {
    margin-left: 1rem;
    color: #000;
    line-height: 22px;
  }
`;

export const ArImg = styled.img`
  order: 0;
  margin-top: 0;
  margin-left: 0.5rem;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 700px) {
    max-width: 100%;
    height: auto;
  }
`;

export const CoWr = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  width: calc(70% - 5px);
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

export const CoTe = styled.h3`
  white-space: nowrap;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  font-size: 1.5rem;
  line-height: 1;
  color: #13404f;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.75rem;
  word-wrap: break-word;
  font-weight: bold;
  margin-right: 0.5rem;

  @media screen and (max-width: 700px) {
    font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
    font-size: 1.25rem;
    line-height: 1;
    color: #13404f;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.75rem;
  }
`;

export const CoCon = styled.div`
  border-radius: 9px;
  border-bottom-right-radius: 0;
  width: 100%;
  display: flex;
  flex-direction: reverse;
  padding: 1.5rem 1rem;
  margin-left: 0.3125rem;
  background-color: #dcebed;
  @media screen and (max-width: 700px) {
    border-radius: 9px;
    border-bottom-right-radius: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 1.25rem 1rem 2rem;
    margin-left: 0rem;
  }
`;

export const CoRe = styled.div`
  flex: 0 0 20.625rem;
  margin: auto;
  font-size: 1.125rem;
  @media screen and (max-width: 700px) {
    margin-bottom: 1.5rem;
    font-size: 1.125rem;
    flex: 0 0 2.625rem;
  }
`;

export const CoSub = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-basis: 100%;
  padding-right: 2rem;
  margin-bottom: 0.625rem;
  flex-direction: row-reverse;
  @media screen and (max-width: 700px) {
    display: flex;
    flex: 0 1 auto;
    flex-direction: column;
    padding-right: 0rem;
  }
`;

export const CoAt = styled.a`
  padding: 0.75rem 1.2rem;
  display: inline-flex;
  padding: 0.75rem 1rem;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-radius: 9px;
  border-bottom-right-radius: 0;
  border: 0;
  outline: 0;
  text-decoration: none;
  background: #257f69;
  color: #fff;
  line-height: 1;
  text-align: center;
  cursor: pointer;
  transition: all 0.15s ease-out;
  @media screen and (max-width: 700px) {
    display: inline-flex;
    padding: 0.75rem 1rem;
    align-items: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 9px;
    border-bottom-right-radius: 0;
    outline: 0;
    border: 0;
    padding: 1em;
    background: #257f69;
    color: #fff;
    line-height: 1;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: all 0.15s ease-out;
  }
`;

export const CoSp = styled.span`
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  @media screen and (max-width: 700px) {
  }
`;

export const CoIn = styled.div`
  display: flex;
  margin-bottom: 0.625rem;
  align-items: center;
  flex: 0 0 33%;
  flex-direction: column-reverse;
  margin-bottom: 0;
  @media screen and (max-width: 700px) {
    display: flex;
    margin-bottom: 0.625rem;
    align-items: center;
    flex-direction: row-reverse;
  }
`;

export const CoLa = styled.div`
  width: 100%;
  font-family: Merriweather, Verdana, Arial, serif;
  font-size: 1.1rem;
  color: #212121;
  padding-left: 0rem;
  line-height: 1.375rem;
  text-align: center;
  font-weight: 500;
  @media screen and (max-width: 700px) {
  }
`;

export const CoImg = styled.img`
  width: 125px;
  margin-left: 0;
  min-width: 86px;
  max-width: 100%;
  height: auto;
  @media screen and (max-width: 700px) {
  }
`;

export const CoDiv = styled.div`
  padding-left: 1rem;
  font-size: 1.5rem;
  line-height: 1.12;
  margin-bottom: 1rem;
  color: #13404f;
  @media screen and (max-width: 700px) {
    margin-bottom: 1rem;
    line-height: 1.15;
    color: #13404f;
    font-size: 1.25rem;
  }
`;
