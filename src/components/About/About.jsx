import React from "react";
import {
  AboutWrapper,
  AboutContainer,
  AboutContainerTop,
  AboutContainerBottom,
  AboutContainerBottomContainer,
  AboutContainerImg,
  AboutContainerBottomHeader,
  AboutContainerBottomPara,
} from "./About.elements";
import { Woman, Scale, Routine } from "../../assets/index";

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <AboutContainerTop>كيف فيتاميناتنا تعمل</AboutContainerTop>
        <AboutContainerBottom>
          <AboutContainerBottomContainer>
            <AboutContainerImg src={Woman} />
            <AboutContainerBottomHeader>
              أخبرنا عن نفسك
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              قم بإجراء اختبارنا وأخبرنا عن أهدافك ونمط حياتك وقيمك.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>
          <AboutContainerBottomContainer>
            <AboutContainerImg src={Scale} />
            <AboutContainerBottomHeader>
              أخبرنا عن نفسك
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              قم بإجراء اختبارنا وأخبرنا عن أهدافك ونمط حياتك وقيمك.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>
          <AboutContainerBottomContainer>
            <AboutContainerImg src={Routine} />
            <AboutContainerBottomHeader>
              أخبرنا عن نفسك
            </AboutContainerBottomHeader>
            <AboutContainerBottomPara>
              قم بإجراء اختبارنا وأخبرنا عن أهدافك ونمط حياتك وقيمك.
            </AboutContainerBottomPara>
          </AboutContainerBottomContainer>
        </AboutContainerBottom>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
