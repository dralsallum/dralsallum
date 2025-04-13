import React from "react";
import {
  BodyContainer,
  BodyWrapper,
  BodyContainerTop,
  BodyContainerBottom,
  BodyContainerBottomCards,
  BodyContainerBottomCardsCutomer,
  BodyContainerBottomCardsPercetage,
  BodyContainerBottomCardsPara,
} from "./Body.elements";

const Body = () => {
  return (
    <BodyWrapper>
      <BodyContainer>
        <BodyContainerTop>اشعر بالتغيير</BodyContainerTop>
        <BodyContainerBottom>
          <BodyContainerBottomCards>
            <BodyContainerBottomCardsPercetage>
              98%
            </BodyContainerBottomCardsPercetage>
            <BodyContainerBottomCardsCutomer>
              من عملائنا
            </BodyContainerBottomCardsCutomer>
            <BodyContainerBottomCardsPara>
              يقولون انه فيتميناتنا اشعرتهم <br /> بالتغيير بصحتهم
            </BodyContainerBottomCardsPara>
          </BodyContainerBottomCards>
          <BodyContainerBottomCards>
            <BodyContainerBottomCardsPercetage>
              98%
            </BodyContainerBottomCardsPercetage>
            <BodyContainerBottomCardsCutomer>
              من عملائنا
            </BodyContainerBottomCardsCutomer>
            <BodyContainerBottomCardsPara>
              يقولون انه فيتميناتنا اشعرتهم <br /> بالتغيير بصحتهم
            </BodyContainerBottomCardsPara>
          </BodyContainerBottomCards>
          <BodyContainerBottomCards>
            <BodyContainerBottomCardsPercetage>
              98%
            </BodyContainerBottomCardsPercetage>
            <BodyContainerBottomCardsCutomer>
              من عملائنا
            </BodyContainerBottomCardsCutomer>
            <BodyContainerBottomCardsPara>
              يقولون انه فيتميناتنا اشعرتهم <br /> بالتغيير بصحتهم
            </BodyContainerBottomCardsPara>
          </BodyContainerBottomCards>
        </BodyContainerBottom>
      </BodyContainer>
    </BodyWrapper>
  );
};

export default Body;
