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

export const PoWr = styled.article`
  display: grid;
  padding: 0 2rem;
  margin: 0 auto;
  border: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  direction: rtl;
  grid-template-columns: 14rem minmax(0, 37.5rem) 18.75rem;
  grid-template-areas:
    "header header header"
    "post-header post-header right-rail"
    "left-rail pre-content right-rail"
    "left-rail content right-rail"
    "left-rail post-content right-rail"
    "footer footer footer";
  column-gap: 3rem;
  margin-top: 1rem;

  @media screen and (max-width: 768px) {
    position: relative;
    padding: 0 1rem;
    display: grid;
    margin: 0 auto;
    grid-template-columns: minmax(0, 37.5rem);
    grid-template-areas:
      "header"
      "post-header"
      "left-rail"
      "pre-content"
      "content"
      "post-content"
      "footer";
    margin-top: 1rem;
  }
`;
export const PoCon = styled.div`
  grid-area: header;
  @media screen and (max-width: 768px) {
    padding-top: 0.625rem;
    grid-area: header;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const AllSo = styled.div`
  @media screen and (max-width: 768px) {
  }
`;
export const PoTi = styled.div`
  grid-area: header;
  @media screen and (max-width: 768px) {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const PoTiSub = styled.div`
  display: inline;
  color: #257f69;
  margin-bottom: 0.25rem;
  @media screen and (max-width: 768px) {
    color: #257f69;
    margin-bottom: 0.25rem;
  }
`;
export const PoTiAt = styled.a`
  font-size: 0.875rem;
  color: #257f69;
  text-transform: uppercase;
  letter-spacing: 1px;
  padding-left: 0.3125rem;
  transition: all 0.15s ease-in-out;
  text-decoration: none;
  outline: 0;
  font-weight: bold;

  @media screen and (max-width: 768px) {
    font-size: 0.875rem;
    color: #257f69;
    text-transform: uppercase;
    letter-spacing: 1px;
    padding-left: 0.3125rem;
    transition: all 0.15s ease-in-out;
    text-decoration: none;
    outline: 0;
  }
`;
export const PoHe = styled.h1`
  width: 100%;
  font-size: 3.25rem;
  margin: 0;
  line-height: 1.075em;
  color: #212121;
  @media screen and (max-width: 768px) {
    margin: 0;
    line-height: 1.1;
    color: #212121;
    font-size: 2rem;
    word-wrap: break-word;
    font-weight: 400;
  }
`;
export const PoPa = styled.p`
  color: #424242;
  font-family: Merriweather, Verdana, Arial, serif;
  font-size: 1.375rem;
  line-height: 1.25;
  margin: 0.4rem 0 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-weight: 400;
  background: 0 0;
  @media screen and (max-width: 768px) {
    color: #424242;
    font-family: Merriweather, Verdana, Arial, serif;
    font-size: 1.375rem;
    line-height: 1.25;
    margin: 0.4rem 0 0;
    padding: 0;
    border: 0;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const PoLi = styled.div`
  padding-left: 7rem;
  margin: 1rem 0 1.125rem;
  position: relative;
  font-family: Merriweather, Verdana, Arial, serif;
  font-size: 0.875rem;
  color: #424242;
  margin-bottom: 2rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
    margin: 1rem 0 1.125rem;
    position: relative;
    font-family: Merriweather, Verdana, Arial, serif;
    font-size: 0.875rem;
    color: #424242;
    padding: 0;
    border: 0;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const PoLiSub = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 1rem;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin-bottom: 1rem;
    margin: 0;
    border: 0;
    padding: 0;
    vertical-align: baseline;
    font-size: 100%;
    font-weight: 400;
    background: 0 0;
  }
`;
export const PoLiFl = styled.div`
  display: block;
  unicode-bidi: isolate;
  margin-bottom: 0.5rem;
  line-height: 1.375rem;
  width: 100%;
  display: inline;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.5rem;
    line-height: 1.375rem;
    width: 100%;
  }
`;
export const PoLiRi = styled.div`
  display: inline;
  margin-left: 0.5rem;
  padding-left: 0.25rem;
  border-left: 1px solid #d3d3d3;

  @media screen and (max-width: 768px) {
    margin-left: 0.5rem;
    padding-left: 0.25rem;
    border-left: 1px solid #d3d3d3;
    display: inline;
    color: #646464;
  }
`;
export const PoLiLe = styled.div`
  text-decoration: underline;
  color: #646464;
  outline: 0;
  display: inline;
  transition: color 0.15s ease-out;
  @media screen and (max-width: 768px) {
    display: inline;
    color: #646464;
  }
`;
export const ReWr = styled.div`
  margin-bottom: 0.25rem;
  line-height: 1.375rem;
  width: 100%;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.25rem;
    line-height: 1.375rem;
    width: 100%;
  }
`;
export const ReCon = styled.div`
  display: flex;
  color: #646464;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: flex;
    color: #646464;
    align-items: center;
  }
`;
export const ReSub = styled.div`
  @media screen and (max-width: 768px) {
    margin-bottom: 0.25rem;
    line-height: 1.375rem;
    width: 100%;
  }
`;
export const ReAt = styled.a`
  text-decoration: underline;
  color: #646464;
  outline: 0;
  transition: color 0.15s ease-out;
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: 0 0;
  @media screen and (max-width: 768px) {
    text-decoration: underline;
    color: #646464;
    outline: 0;
    transition: color 0.15s ease-out;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const ReSp = styled.span`
  position: relative;
  padding-bottom: 0.3125rem;
  cursor: pointer;
  color: #1a55ad !important;
  @media screen and (max-width: 768px) {
    display: inline;
    margin-right: 0;
    padding-bottom: 0.3125rem;
    cursor: pointer;
    position: static;
    color: #1a55ad !important;
  }
`;
export const ReSpa = styled.span`
  text-decoration: underline;
  color: #646464;
  @media screen and (max-width: 768px) {
    text-decoration: underline;
    color: #646464;
  }
`;
export const ImgWr = styled.div`
  grid-area: post-header;

  @media screen and (max-width: 768px) {
    grid-area: post-header;
  }
`;
export const ImgSub = styled.figure`
  position: relative;
  margin-bottom: 0.625rem;
  overflow: hidden;
  z-index: 1;
  display: block;
  margin-bottom: 1.25rem;
  @media screen and (max-width: 768px) {
    position: relative;
    margin-bottom: 0.625rem;
    overflow: hidden;
  }
`;

export const ImgRe = styled.div`
  padding-bottom: 66.6%;
  border-radius: 9px;
  border-bottom-right-radius: 0;
  background-color: #c7c7c7;
  position: relative;
  width: 100%;
  background-color: #c7c7c7;
  height: 0;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    padding-bottom: 66.6%;
    border-radius: 9px;
    border-bottom-right-radius: 0;
    background-color: #c7c7c7;
    position: relative;
    height: 0;
    overflow: hidden;
    width: 100%;
  }
`;
export const ImgMa = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  max-width: 100%;
  background-size: 100% 100%;
  transition: 0.15s filter linear;
  background-image: none;
  display: block;
  width: 100%;
  border-radius: 9px;
  border-bottom-right-radius: 0;
  @media screen and (max-width: 768px) {
    display: block;
    width: 100%;
    border-radius: 9px;
    border-bottom-right-radius: 0;
    background-size: 100% 100%;
    transition: 0.15s filter linear;
    position: absolute;
    height: 100%;
    top: 0;
    right: 0;
    max-width: 100%;
  }
`;
export const ImgFig = styled.figcaption`
  width: 100%;
  font-family: Merriweather, Verdana, Arial, serif;
  font-size: 0.75rem;
  line-height: 1.5;
  color: #646464;
  display: block;
  padding: 0.9rem 0 0.5rem;
  caption-side: bottom;
  text-align: right;

  @media screen and (max-width: 768px) {
    width: 100%;
    font-family: Merriweather, Verdana, Arial, serif;
    font-size: 0.75rem;
    line-height: 1.5;
    color: #646464;
    display: block;
    padding: 0.9rem 0 0.5rem;
    caption-side: bottom;
    text-align: right;
  }
`;
export const TabWr = styled.div`
  grid-area: left-rail;
  margin: 0;
  border: 0;
  display: block;
  unicode-bidi: isolate;
  padding: 0;
  -webkit-text-size-adjust: 100%;
  color: #212121;
  vertical-align: baseline;
  font-size: 100%;
  box-sizing: inherit;
  font-weight: 400;
  background: 0 0;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  @media screen and (max-width: 768px) {
    grid-area: left-rail;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const TabAll = styled.div`
  position: relative;
  width: auto;
  height: 100%;
  right: unset;
`;
export const TabLia = styled.li`
  position: static;
  margin-bottom: 0;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 600;
  background: 0 0;
`;
export const ExWr = styled.div`
  position: static;
  display: inline-block;
  @media screen and (max-width: 768px) {
  }
`;
export const ExAt = styled.a`
  padding-right: 0.75rem;
  text-decoration: none;
  padding-bottom: 0.4rem;
  cursor: pointer;
  padding-top: 0.4rem;
  line-height: 1.375;
  display: inline-block;
  color: #212121;

  vertical-align: baseline;
  font-size: 100%;
  background: 0 0;
  position: relative;
  font-weight: 400;
  @media screen and (max-width: 768px) {
  }
`;
export const ExCon = styled.div`
  border-color: transparent #d33b52 transparent transparent;
  top: calc(50% - 8px);
  margin-top: 0;
  right: 0;
  content: "";
  position: absolute;

  width: 0;
  height: 0;
  border-width: 6px 8px 6px 0;
  border-style: solid;
  border-radius: 3px;
  line-height: 1.375;
  color: #212121;
  @media screen and (max-width: 768px) {
  }
`;

export const TabCon = styled.div`
  position: sticky;
  top: 75px;
  border: none;
  order-radius: 9px;
  border-bottom-right-radius: 0;
  padding: 1rem;
  background-color: #edfbfc;
  max-width: 614px;
  margin: 0 auto;
  box-sizing: content-box;
  @media screen and (max-width: 768px) {
    height: auto;
    border-radius: 9px;
    border-bottom-right-radius: 0;
    padding: 1rem;
    background-color: #edfbfc;
    max-width: 614px;
    margin: 0 auto;
    box-sizing: content-box;
  }
`;
export const TabSub = styled.div`
  @media screen and (max-width: 768px) {
    margin-top: 0px;
    position: relative;
  }
`;
export const TabDiv = styled.div`
  margin-bottom: 0.4rem;
  @media screen and (max-width: 768px) {
    margin-bottom: 0.4rem;
  }
`;
export const TabSp = styled.span`
  font-size: 1.125rem;
  @media screen and (max-width: 768px) {
    font-size: 1.125rem;
  }
`;
export const TabUl = styled.ul`
  border-radius: 0 0 0.5rem 0.5rem;
  font-size: 1rem;
  line-height: 1.5625;
  font-family: Merriweather, Verdana, Arial, serif;
  list-style: none;

  @media screen and (max-width: 768px) {
    position: relative;
    border-radius: 0 0 0.5rem 0.5rem;
    font-size: 1rem;
    line-height: 1.5625;
    font-family: Merriweather, Verdana, Arial, serif;
    list-style: none;
  }
`;
export const TabLi = styled.li`
  position: relative;
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    position: relative;
    margin-bottom: 0;
  }
`;
export const TabAt = styled.a`
  border-right: 1px solid #d3d3d3;
  padding-right: 0.75rem;
  text-decoration: none;
  position: relative;
  padding-bottom: 0.4rem;
  padding-top: 0.4rem;
  line-height: 1.375;
  display: inline-block;
  color: #212121;
  outline: 0;
  transition: color 0.15s ease-out;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    padding-bottom: 0.4rem;
    padding-top: 0.4rem;
    line-height: 1.375;
    display: inline-block;
    color: #212121;
    text-decoration: none;
    outline: 0;
    transition: color 0.15s ease-out;
  }
`;
export const AllWr = styled.div`
  grid-area: content;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  color: #212121;
  @media screen and (max-width: 768px) {
    overflow: hidden;
    grid-area: content;
  }
`;
export const AllCon = styled.div`
  font-size: 1rem;
  line-height: 1.5625;
  font-family: Merriweather, Verdana, Arial, serif;
  @media screen and (max-width: 768px) {
    overflow: hidden;
    font-size: 1rem;
    line-height: 1.5625;
    font-family: Merriweather, Verdana, Arial, serif;
  }
`;
export const AllSub = styled.div`
  @media screen and (max-width: 768px) {
    line-height: 1.5625;
    font-family: Merriweather, Verdana, Arial, serif;
  }
`;
export const AllRe = styled.div`
  margin: 2rem 0;
  font-weight: 700;
  @media screen and (max-width: 768px) {
    margin: 2rem 0;
    font-weight: 700;
  }
`;
export const AllPa = styled.p`
  margin-top: 0;
  counter-reset: section;
  @media screen and (max-width: 768px) {
    counter-reset: section;
    margin: 1.2rem 0;
  }
`;
export const AllAt = styled.a`
  font-weight: 700;
  @media screen and (max-width: 768px) {
    color: #1a55ad;
    text-decoration: none;
    outline: 0;
    transition: color 0.15s ease-out;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const AllAta = styled.span`
  font-weight: 700;
  color: #1a55ad;
  text-decoration: underline;
  outline: 0;
  transition: color 0.15s ease-out;
  margin: 0;
  padding: 0;
  vertical-align: baseline;
  line-height: 1.5625;
  font-family: Merriweather, Verdana, Arial, serif;
  font-weight: 700;
  cursor: pointer;
  font-size: 100%;
  background: 0 0;
  @media screen and (max-width: 768px) {
    color: #1a55ad;
    text-decoration: underline;
    outline: 0;
    transition: color 0.15s ease-out;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const AllAtt = styled.span`
  font-weight: 700;
  display: block;
  position: relative;
  float: right;
  margin-left: 0.3125rem;
  text-decoration: none;
  color: #212121;
  @media screen and (max-width: 768px) {
    color: #000;
    text-decoration: none;
    outline: 0;
    transition: color 0.15s ease-out;
    margin: 0;
    padding: 0;
    font-size: 100%;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const AllHe = styled.h2`
  font-size: 2rem;
  margin: 2.8rem 0 0;
  color: #212121;
  word-wrap: break-word;
  font-weight: 400;

  line-height: 1.15;
  @media screen and (max-width: 768px) {
    margin: 2.8rem 0 0;
    font-size: 1.75rem;
    line-height: 1.15;
    word-wrap: break-word;
    font-weight: 400;
    color: #212121;
  }
`;
export const AllFir = styled.h2`
  font-size: 2rem;
  color: #212121;
  word-wrap: break-word;
  font-weight: 400;

  line-height: 1.15;
  @media screen and (max-width: 768px) {
    font-size: 1.75rem;
    line-height: 1.15;
    word-wrap: break-word;
    font-weight: 400;
    color: #212121;
  }
`;
export const ExPa = styled.p`
  counter-reset: section;
  margin: 1.2rem 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  line-height: 1.5625;
  -webkit-text-size-adjust: 100%;
  color: #212121;

  @media screen and (max-width: 768px) {
    counter-reset: section;
    margin: 1.2rem 0;
    color: #212121;
    font-family: Merriweather, Verdana, Arial, serif;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const ExCo = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 1.5rem 2.5rem 1.5rem 0rem;
  margin: 1.2rem 0;
  border: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  @media screen and (max-width: 768px) {
    display: flex;
    position: relative;
    flex-direction: column;
    padding: 1.5rem 2.5rem 1.5rem 0rem;
    margin: 1.2rem 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
    line-height: 1.5625;
    font-family: Merriweather, Verdana, Arial, serif;
  }
`;
export const ExComa = styled.div`
  content: "“";
  position: absolute;
  top: 0;
  right: 0;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  font-size: 4.5rem;
  line-height: 1;
  color: #2ebe7e;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;

  @media screen and (max-width: 768px) {
    content: "“";
    position: absolute;
    top: 0;
    right: q;
    font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
    font-size: 4.5rem;
    line-height: 1;
    color: #2ebe7e;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
  }
`;
export const ExTop = styled.div`
  border-top: 1px solid #d3d3d3;
  padding-top: 1rem;
  font-size: 1.5rem;
  line-height: 1.25;
  color: #212121;
  margin-bottom: 1rem;
  @media screen and (max-width: 768px) {
    border-top: 1px solid #d3d3d3;
    padding-top: 1rem;
    font-size: 1.5rem;
    line-height: 1.25;
    color: #212121;
    margin-bottom: 1rem;
  }
`;
export const ExTopPa = styled.p`
  margin-bottom: 0;
  font-weight: 400;
  font-family: Merriweather, Verdana, Arial, serif;
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
    font-weight: 400;
    font-family: Merriweather, Verdana, Arial, serif;
  }
`;
export const ExBo = styled.div`
  justify-content: flex-end;
  display: flex;
  align-items: center;
  column-gap: 1rem;
  @media screen and (max-width: 768px) {
    justify-content: flex-end;
    display: flex;
    align-items: center;
    column-gap: 1rem;
  }
`;
export const ExBot = styled.div`
  margin-bottom: 0;
  @media screen and (max-width: 768px) {
    margin-bottom: 0;
  }
`;
export const ExBoSp = styled.span`
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  font-size: 0.875rem;
  font-weight: 800;
  letter-spacing: 0.0625rem;
  line-height: 1.2;
  text-transform: capitalize;
  color: #424242;
  @media screen and (max-width: 768px) {
    font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
    font-size: 0.875rem;
    font-weight: 800;
    letter-spacing: 0.0625rem;
    line-height: 1.2;
    text-transform: capitalize;
    color: #424242;
  }
`;
