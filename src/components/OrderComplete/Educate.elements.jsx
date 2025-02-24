import styled from "styled-components";

export const SunWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  min-height: min-content;
`;
export const SunMain = styled.main`
  height: 100%;
  display: block;
`;
export const SunSubOn = styled.div`
  width: 100%;
  height: 844px;
  position: absolute;
  top: 0px;
`;
export const SunSubTwo = styled.div`
  display: none;
`;
export const SunSubThr = styled.div`
  display: flex;
  height: 100vh;
`;
export const SunConThr = styled.div`
  margin: 0px auto;
  max-width: 100%;
  padding: 1.5rem;
  width: 100%;
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: center;
  position: relative;
`;
export const SunReThr = styled.div`
  left: 0.75rem;
  position: absolute;
  top: 0.75rem;
  will-change: opacity;
`;
export const SunReSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const SunReSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
`;
export const SunReBut = styled.button`
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-weight: bold;
  line-height: 1.1em;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  background: transparent;
  color: rgb(68, 66, 63);
  opacity: 1;
  border-radius: 50%;
  height: 3rem;
  max-width: 3rem;
  padding: calc((2.75rem - 1.1em) / 2);
  width: 3rem;
  font-size: 1.5rem;
`;
export const SunTm = styled.div`
  color: rgb(45, 44, 43);
  padding: 0px;
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;
export const SunTmOne = styled.div`
  display: flex;
  flex-direction: column;
  height: 30%;
  -webkit-box-pack: end;
  justify-content: end;
  margin-top: 0px;
`;
export const SunTmOnHe = styled.h1`
  display: block;
  margin-block-start: 0.67em;
  margin-block-end: 0.67em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: bold;
`;
export const SunTmSpan = styled.span`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: -0.055em;
  display: block;
  line-height: 2.5rem;
  margin: 0px;
`;
export const SunTmSpa = styled.span`
  padding-top: 0.5rem;
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 1.125rem;
  font-weight: normal;
  line-height: 1.5em;
`;
export const SunTmSp = styled.span`
  border: 0px;
  clip: rect(0px, 0px, 0px, 0px);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0px;
  position: absolute;
  width: 1px;
`;
export const SunTmTwo = styled.div`
  height: 6rem;
  position: relative;
`;
export const SunTmTw = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: nowrap;
  justify-content: center;
  position: absolute;
  top: calc(50% - 3rem);
  width: 100%;
  z-index: 1;
  height: 6rem;
`;
export const SunTmTBut = styled.button`
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-weight: bold;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  background: rgb(20, 19, 19);
  color: rgb(255, 255, 255);
  opacity: 1;
  border-radius: 50%;
  padding: calc((2.75rem - 1em) / 2);
  height: 6rem;
  max-width: 6rem;
  width: 6rem;
  font-size: 2rem;
  line-height: 1.5rem;
  position: absolute;
`;
export const SunSp = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const SunSv = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
`;
export const SunKo = styled.div`
  display: block;
  height: 100%;
  left: 10%;
  pointer-events: none;
  position: absolute;
  top: -22%;
  width: 80%;
  z-index: 10;
`;
export const SunKoCon = styled.div`
  margin: 0px auto;
  max-width: 100%;
  width: 100%;
  height: 100%;
  padding: 0px;
`;
export const SunKoVi = styled.video`
  height: 100%;
  width: 100%;
`;
export const St = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  cursor: grab; // Indicates draggable
`;
export const SunXo = styled.div`
  margin-bottom: 0px;
`;
export const SunXoCon = styled.div`
  width: 100%;
  will-change: opacity;
`;
export const SunXoOne = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-right: -0.75rem;
`;
export const SunXoSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const SunXoSvg = styled.svg`
  width: 1em;
  height: 1em;
  fill: none;
`;
export const SunXoTwo = styled.div`
  align-items: center;
  display: flex;
  position: relative;
  width: 100%;
  height: 0.75rem;
  margin-bottom: 2.75rem;
`;
export const SunIn = styled.input`
  appearance: none;
  border: none;
  height: 100%;
  left: 0px;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  cursor: pointer;
  overflow: visible;
`;
export const SunXoYi = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0.75rem;
  height: 33%;
  width: 100%;
`;
export const SunXoYiRe = styled.div`
  inset: 0px;
  overflow: hidden;
  position: absolute;
  width: 100%;
  background-color: rgb(68, 66, 63);
  border-radius: 0px;
  opacity: 0.2;
`;
export const SunXoYiRa = styled.div`
  position: relative;
  top: 50%;
  transition: transform 0ms ease-out 0s;
  width: 100%;
  background-color: rgb(45, 44, 43);
  border-radius: 0px;
  height: 100%;
  opacity: 1;
  transform: translate(-100%, -50%);
`;
export const SunXoYe = styled.div`
  inset: 0px;
  margin: 0px calc(0.375rem);
  position: absolute;
`;
export const SunXoYa = styled.div`
  border: none;
  border-radius: 50%;
  display: block;
  position: absolute;
  transition: transform 100ms ease-out 0s;
  background-color: rgb(45, 44, 43);
  height: 0.75rem;
  right: 100%;
  transform: translate(50%) scale(1);
  width: 0.75rem;
`;
export const SunSr = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SunPa = styled.p`
  font-family: Apercu, sans-serif;
  text-rendering: optimizelegibility;
  font-size: 0.875rem;
  font-weight: normal;
  line-height: 1.5em;
  color: rgb(20, 19, 19);
  margin: 0px;
`;
export const SunXoBut = styled.button`
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-weight: bold;
  line-height: 1.1em;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s,
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1) 0s;
  user-select: none;
  white-space: nowrap;
  background: transparent;
  color: rgb(68, 66, 63);
  opacity: 1;
  border-radius: 50%;
  height: 3rem;
  max-width: 3rem;
  padding: calc((2.75rem - 1.1em) / 2);
  width: 3rem;
  font-size: 1.5rem;
  appearance: button;
`;
export const SunSubOSvg = styled.div`
  width: 100%;
  height: 100%;
  transform: translate3d(0px, 0px, 0px);
  content-visibility: visible;
  overflow-clip-margin: content-box;
  overflow: hidden;
`;
