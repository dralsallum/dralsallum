import styled from "styled-components";

export const ArWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  padding: 1rem 1.25rem 0rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  direction: rtl;

  @media screen and (max-width: 700px) {
  }
`;
export const ArHead = styled.h2`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 2.25rem;
  font-weight: bold;
  letter-spacing: -0.03em;
  line-height: 2.625rem;
  margin-top: 0;
  text-align: center;
  margin-bottom: 1.5rem;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  display: block;

  @media screen and (max-width: 700px) {
    font-size: 1.8rem;
  }
`;
export const ArA = styled.a`
  text-decoration: none;
  display: inline-block;
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  height: 3rem;
  line-height: 1.1em;
  max-width: 20.4375rem;
  overflow: hidden;
  padding: calc((2.75rem - 1.1em) / 2) 1.5rem;
  position: relative;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  background: #073c46;
  border-color: transparent;
  border-radius: 2rem;
  color: #ffffff;
  opacity: 1;
  box-shadow: 0 0.125rem 0 rgba(65, 61, 69, 0.2);
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 700px) {
  }
`;
export const ArASp = styled.span`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;

  @media screen and (max-width: 700px) {
  }
`;

export const ArContainerF = styled.div`
  margin-bottom: 0;
  margin-top: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  width: 100%;
  padding: 0 0 3rem;
  position: relative;
  @media screen and (max-width: 700px) {
  }
`;
export const ArSubConF = styled.div`
  position: relative;
  transform: translate3d(0, 0, 0);
  border-radius: 0.9rem;
  margin-top: 1rem;
  overflow: visible;
  z-index: auto;
`;
export const ArConFCon = styled.div`
  display: flex;
  left: 0;
  position: absolute;
  top: 0;
  background: transparent;
  height: 100%;
  width: 100%;
  justify-content: center;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
`;
export const GoConFCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background: transparent;
  height: 100%;
  width: 100%;
`;
export const RowConFCon = styled.div`
  left: 0px;
  overflow: hidden;
  position: absolute;
  right: 0px;
  top: -1rem;
  z-index: 1;
  margin: -1.25rem -1.25rem 0;
`;
export const RowLisCon = styled.ul`
  display: flex;
  justify-content: center;
  margin: auto;
  overflow-y: hidden;
  width: max-content;
  list-style: none;
  padding: 1.25rem 2.5rem;
`;
export const RowLiCon = styled.li`
  margin-left: 0.5rem;
`;
export const RowLi = styled.div``;
export const RowSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const RowReSpan = styled.span`
  opacity: 0;
  transform: translateX(-50%) translateY(-50%) scale(1) translateZ(0px);
  border-radius: 50%;
  content: "content";
  left: 50%;
  position: absolute;
  top: 50%;
  border: 0.125rem #ff7300 solid;
  height: 2.8rem;
  width: 2.8rem;
`;

export const RowLiBut = styled.button`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.125rem;
  border: 0;
  display: inline-block;
  height: auto;
  min-width: auto;
  overflow: visible;
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  max-width: 20.4375rem;
  position: relative;
  text-overflow: ellipsis;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1);
  user-select: none;
  white-space: nowrap;
  border-color: transparent;
  opacity: 1;
  background: ${(props) => (props.isActive ? "#000" : "#073c46")};
`;
export const ColConFCon = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  will-change: transform;
  transform: translateX(0%) translateZ(0px);
`;
export const ColAudConF = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  background-color: #f9f4f2;
  color: #44423f;
  margin-bottom: 2rem;
`;
export const ColAudCon = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;
export const ColAudSubCon = styled.div`
  display: flex;
`;
export const ColAudSubSpan = styled.span`
  text-align: center;
  vertical-align: text-top;
`;
export const ColAud = styled.audio``;
export const ColAudSubSvg = styled.svg``;
export const ColAudSubBut = styled.button`
  border: 0.125rem solid transparent;
  cursor: pointer;
  font-weight: bold;
  overflow: hidden;
  position: relative;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;
  background: #073c46;
  border-color: transparent;
  color: #ffffff;
  opacity: 1;
  border-radius: 50%;
  height: 3rem;
  max-width: 3rem;
  width: 3rem;
  font-size: 1.5rem;
  padding: calc((2.75rem - 1em) / 2);
  line-height: 1rem;
  transition: color 150ms cubic-bezier(0.32, 0.94, 0.6, 1);
    background-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    border-color 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    box-shadow 150ms cubic-bezier(0.32, 0.94, 0.6, 1),
    transform 150ms cubic-bezier(0.32, 0.94, 0.6, 1);
`;
export const ColSubConFCon = styled.div`
  opacity: 1;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 100%;
  padding: 2.5rem 1.25rem;
  position: relative;
  width: 100%;
`;
export const ColSubParaCon = styled.div`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 1.125rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.625rem;
  margin-bottom: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  text-align: center;
`;
export const ColSubPara = styled.p`
  margin-bottom: 0;
`;
export const ExCon = styled.div`
  align-self: center;
  flex-grow: 1;
`;
export const ExSubCon = styled.div`
  display: flex;
  margin-left: 1rem;
  align-items: center;
`;
export const ExSubSpan = styled.span`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1rem;
  opacity: 0.5;
  overflow: visible;
  width: 1.625rem;
`;
export const ExReCon = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  height: 0.5rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  align-items: center;
`;
export const ExReInp = styled.input`
  appearance: none;
  border: none;
  height: 100%;
  left: 0;
  opacity: 0;
  position: absolute;
  width: 100%;
  z-index: 1;
  cursor: pointer;
`;
export const ExReSubInpCon = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0.5rem;
  height: 25%;
  width: 100%;
`;
export const UtCon = styled.div`
  bottom: 0;
  left: 0;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  background-color: #d2d5de;
  border-radius: 0;
  opacity: 1;
`;
export const UtyCon = styled.div`
  position: relative;
  top: 50%;
  transition: transform 0ms ease-out;
  width: 100%;
  background-color: #ff7300;
  border-radius: 0;
  height: 100%;
  opacity: 1;
  transform: translate(-100%, -50%);
`;
export const KmCon = styled.div`
  bottom: 0;
  left: 0;
  margin: 0 calc(0.5rem / 2);
  position: absolute;
  right: 0;
  top: 0;
`;
export const KmSubCon = styled.div`
  border: none;
  border-radius: 50%;
  display: block;
  position: absolute;
  transition: transform 100ms ease-out;
  background-color: #073c46;
  height: 0.5rem;
  right: 100%;
  transform: translate(50%) scale(1);
  width: 0.5rem;
`;
export const OldSpan = styled.span`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.75rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1rem;
  opacity: 0.5;
  overflow: visible;
  width: 1.625rem;
`;
export const ExLab = styled.label`
  font-family: Apercu, sans-serif;
  text-rendering: optimizeLegibility;
  font-size: 0.875rem;
  font-weight: 500;
  letter-spacing: -0.01em;
  line-height: 1.125rem;
  display: block;
  margin: 0 0 0.5rem 1rem;
  max-width: 22rem;
  margin-right: 1rem;
`;
export const ReConFCon = styled.div`
  width: 100%;
  display: inline-block;
  overflow: hidden;
  position: relative;
  vertical-align: top;
`;
export const ReConFImg = styled.img`
  object-fit: cover;
  object-position: center center;
  margin: 0;
  padding: 0;
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  left: 0;
`;
export const ReConFaImg = styled.img`
  display: block;
  max-width: 100%;
  opacity: 0;
  position: static;
  height: 100%;
  width: 100%;
  border-style: none;
`;
export const ReSubConFCon = styled.div`
  max-width: 2546px;
`;

export const ArContainerS = styled.div`
  order: 1;
  flex: 1;
  @media screen and (max-width: 700px) {
    max-width: 350px;
    margin-bottom: 1.5rem;
    order: 2;
  }
`;
export const ArContainerSImg = styled.img`
  max-width: 100%;
  border-style: none;
  overflow-clip-margin: content-box;
  overflow: clip;
`;
