import styled from "styled-components";

export const ReBe = styled.div`
  margin: 4rem 0 0;
  padding: 1rem 0;
  width: 100vw;
  clear: both;

  @media screen and (max-width: 700px) {
    margin: 0rem 0 0;
  }
`;
export const ReWra = styled.section`
  margin: 1rem auto 0;
  max-width: 75rem;
  direction: rtl;

  @media screen and (max-width: 700px) {
    margin: 1rem 1rem 0;
    max-width: 75rem;
  }
`;
export const ReCon = styled.div`
  font-size: 1.5rem;
  color: #13404f;
  padding: 0.3rem 0;
  margin: 0 0 0.3rem;
  text-align: right;

  @media screen and (max-width: 700px) {
    font-size: 1.375rem;
    color: #13404f;
    padding: 0.3rem 0;
    margin: 0 0 0.3rem;
  }
`;
export const ReSub = styled.div`
  display: grid;
  grid-gap: 1rem;
  justify-content: space-between;
  grid-template-columns: repeat(4, 1fr);
  margin: 0.625rem 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;

  @media screen and (max-width: 700px) {
    margin: 0.625rem 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 1rem;
    justify-content: space-between;
  }
`;
export const ReAt = styled.a`
  display: flex;
  width: 100%;
  padding: 0.7rem 1rem;
  overflow: hidden;
  font-weight: 700;
  background: #fff;
  margin-bottom: 0;
  border-radius: 9px;
  border-bottom-right-radius: 0;
  box-shadow: 5px 5px 0 rgba(19, 64, 79, 0.1);
  text-decoration: none;
  flex-direction: column;
  cursor: pointer;
  padding: 0;
  background-color: #fff;
  border: 1px solid #eee;
  color: #1a55ad;
  outline: 0;
  transition: color 0.15s ease-out;
  @media screen and (max-width: 700px) {
    margin-bottom: 0;
    padding: 0;
    border-radius: 9px;
    border-bottom-right-radius: 0;
    box-shadow: 5px 5px 0 rgba(19, 64, 79, 0.1);
    flex-direction: column;
    background-color: #fff;
    border: 1px solid #eee;
    text-decoration: none;
    cursor: pointer;
    display: flex;
    overflow: hidden;
    width: 100%;
    background: #fff;
    font-weight: 700;
    color: #1a55ad;
    outline: 0;
    transition: color 0.15s ease-out;
  }
`;
export const LaWr = styled.div`
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font-weight: 400;
  vertical-align: baseline;
  background: 0 0;
  @media screen and (max-width: 700px) {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const LaCon = styled.div`
  height: 168px;
  margin: 0;
  width: 100%;
  aspect-ratio: 3 / 2;
  overflow: hidden;
  position: relative;
  background-color: #c7c7c7;
  border-radius: 9px 9px 0 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  @media screen and (max-width: 700px) {
    height: 200px;
    margin: 0;
    width: 100%;
    aspect-ratio: 3 / 2;
    border-radius: 9px 9px 0 0;
    overflow: hidden;
    background-color: #c7c7c7;
    position: relative;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const LaImg = styled.img`
  object-position: top;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  display: block;
  width: 100%;
  max-width: none;
  @media screen and (max-width: 700px) {
    object-position: top;
    height: 100%;
    transition: transform 0.5s ease-in-out;
    object-fit: cover;
    width: 100%;
    max-width: none;
    display: block;
  }
`;
export const LaBo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 1rem 1rem;
  margin: 0;
  flex-grow: 1;
  order: 2;
  width: 100%;
  border: 0;
  vertical-align: baseline;
  font-size: 100%;
  font-weight: 400;
  background: 0 0;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    order: 2;
    width: 100%;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
    justify-content: space-between;
    padding: 0.75rem 1rem 1rem;
    margin: 0;
  }
`;
export const LaBot = styled.div`
  display: block;
  content: attr(data-tag);
  font-weight: 700;
  text-transform: uppercase;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  color: #257f69;
  font-size: 0.875rem;
  letter-spacing: 1px;
  line-height: 1.14;
  text-align: right;

  @media screen and (max-width: 700px) {
    display: block;
    content: attr(data-tag);
    font-weight: 700;
    text-transform: uppercase;
    font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
    color: #257f69;
    font-size: 0.875rem;
    letter-spacing: 1px;
    line-height: 1.14;
    text-align: right;
  }
`;
export const LaBoSp = styled.span`
  font-size: 1.375rem;
  margin-bottom: 0.8rem;
  line-height: 1.15;
  flex-grow: 1;
  font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
  color: #13404f;
  box-sizing: border-box;
  font-weight: 700;
  text-align: right;

  @media screen and (max-width: 700px) {
    margin-bottom: 0.8rem;
    font-size: 1.5rem;
    line-height: 1.15;
    flex-grow: 1;
    font-family: "FS Albert Extra Bold", Helvetica, Arial, sans-serif;
    color: #13404f;
    box-sizing: border-box;
    font-weight: 700;
    text-align: right;
  }
`;
export const LaBoSpa = styled.span`
  @media screen and (max-width: 700px) {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
  }
`;
export const LaBoAf = styled.div`
  font-family: Merriweather, Verdana, Arial, serif;
  font-size: 0.8125rem;
  color: #646464;
  line-height: 1.4;
  margin: 0;
  border: 0;
  padding: 0;
  vertical-align: baseline;
  font-weight: 400;
  background: 0 0;
  text-align: right;

  @media screen and (max-width: 700px) {
    font-family: Merriweather, Verdana, Arial, serif;
    font-size: 0.8125rem;
    color: #646464;
    line-height: 1.4;
    margin: 0;
    padding: 0;
    border: 0;
    font-weight: 400;
    vertical-align: baseline;
    background: 0 0;
    text-align: right;
  }
`;
