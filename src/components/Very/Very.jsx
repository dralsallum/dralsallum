import React from "react";
import {
  HeaderWrapper,
  HeaderContainer,
  HeaderContainerRight,
  HeaderContainerLeft,
  HeaderSubHeader,
  HeaderMainHeader,
  HeaderMainHeaderSpan,
  HeaderLeftTitle,
  HeaderSearch,
  HeaderOrangeCircle,
  HeaderSearchInput,
} from "./Very.elements";

import ArticleIcon from "@mui/icons-material/Article";

const Header = () => {
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <HeaderContainerLeft>
          <HeaderLeftTitle>
            <HeaderOrangeCircle />
            <HeaderMainHeader>
              اشعر بالراحة من خلال
              <br /> قوة الفيتامينات{" "}
              <HeaderMainHeaderSpan>الافضل للصحة</HeaderMainHeaderSpan>
            </HeaderMainHeader>
          </HeaderLeftTitle>
        </HeaderContainerLeft>
        <HeaderContainerRight>
          <HeaderSubHeader>
            تبدأ زيارتك المجانية عبر الإنترنت هنا. أخبرنا <br /> بما يمكننا
            مساعدتك فيه.
          </HeaderSubHeader>
          <HeaderSearch>
            <HeaderSearchInput>خذ الكويز الان</HeaderSearchInput>
            <ArticleIcon style={{ color: "white", fontSize: 25 }} />
          </HeaderSearch>
        </HeaderContainerRight>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

export default Header;
