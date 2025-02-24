import styled from "styled-components";

export const SectionsWrap = styled.div`
  direction: rtl;
  postion: relative;
  padding-bottom: 0;
  margin-right: auto;
  margin-left: auto;
  padding-right: 15px;
  padding-left: 15px;
  background-color: #f4e8e2;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;

  @media screen and (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    padding: 0;
  }
`;
export const SectionsContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  font-size: 20px;
  line-height: 24px;
  color: #082730;

  @media screen and (max-width: 768px) {
    width: 728px;
    max-width: 100%;
    padding: 10px 0 38px;
  }
`;
export const SectionsMain = styled.section`
  position: relative;
  padding-right: 15px;
  padding-left: 15px;
  width: 100%;
  display: block;
  font-size: 20px;
  line-height: 24px;
  color: #082730;

  @media screen and (max-width: 768px) {
  }
`;
export const SecMain = styled.section`
  padding-right: 0;
  padding-left: 0;
  display: block;
  font-size: 20px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
  }
`;
export const SectionsSubMain = styled.div`
  padding-top: 0;
  padding-bottom: 0;
  background: 0 0;
  font-size: 20px;
  line-height: 24px;
  color: #082730;

  @media screen and (max-width: 768px) {
  }
`;
export const SecArt = styled.article`
  display: block;
  font-size: 20px;
  line-height: 24px;
  color: #082730;
  content: " ";
  display: table;

  @media screen and (max-width: 768px) {
  }
`;
export const SecSubArt = styled.div`
  display: block;
  unicode-bidi: isolate;
  font-family: calluna, "Times New Roman", serif;
  font-size: 20px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
  }
`;

export const SecTab = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: stretch;
  justify-content: space-between;
  padding: 10px 0 7px;
  font-size: 20px;
  line-height: 24px;
  color: #082730;

  @media screen and (min-width: 768px) {
    min-width: 800px;
  }

  @media screen and (max-width: 768px) {
    padding: 9px 10px 17px;
    display: flex;
    flex-flow: row wrap;
    align-items: stretch;
    justify-content: space-between;
  }
`;

export const SecMem = styled.div`
  flex-basis: 49%;
  margin: 7px 0;
  padding: 16px 8px 12px 0px;
  background-color: #f8f5f2;
  text-decoration: none;
  color: #8a321f;
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
    margin-right: 15px;
  }
`;
export const SecTop = styled.div`
  margin-bottom: 3px;
  font-size: 31px;
  line-height: 35px;
  font-family: alternate-gothic-no-3-d, "Trebuchet MS", Arial, Helvetica,
    sans-serif;
  letter-spacing: 0;
  text-transform: none;
  color: #0b3c47;
  display: block;
  unicode-bidi: isolate;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;
export const SecBot = styled.div`
  overflow-y: hidden;
  color: #082730;
  font-size: 16px;
  line-height: 20px;
  font-family: alternate-gothic-no-3-d, "Trebuchet MS", Arial, Helvetica,
    sans-serif;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  display: block;
  unicode-bidi: isolate;
  cursor: pointer;

  @media screen and (max-width: 768px) {
  }
`;
export const SecImg = styled.img`
  max-width: 100%;
  float: right;
  margin: 0 31px 0 19px;
  width: 53px;
  height: 53px;
  vertical-align: middle;
  border: 0;
  aspect-ratio: auto 70 / 70;
  color: #8a321f;
  overflow-clip-margin: content-box;
  overflow: clip;
  cursor: pointer;
  font-size: 20px;
  line-height: 24px;

  @media screen and (max-width: 768px) {
  }
`;
