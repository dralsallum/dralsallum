import React, { useState } from "react";
import {
  Foot,
  FootCon,
  FootLiCon,
  FootLiIcon,
  FootLiTex,
  Footer,
  FooterLiLe,
  FooterLiRi,
  FooterList,
  FooterNav,
  FooterPin,
  FooterWrap,
  StyledIcon,
} from "./QueFooter.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStore } from "@fortawesome/free-solid-svg-icons"; // You can replace "faCoffee" with the icon you want.

const QueFooter = ({ showQuestion, showStore, currentComponent }) => {
  return (
    <Footer>
      <FooterNav>
        <FooterWrap>
          <FooterList>
            <FooterLiLe
              currentComponent={currentComponent}
              onClick={() => {
                showQuestion();
              }}
            >
              <FootLiCon>
                <FootLiIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    fill="none"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      fill-rule="evenodd"
                      d="M12.3 5.873c1.952.134 3.92.762 5.145 2.511l.007.01.008.011c.922 1.214 1.424 2.56 1.42 3.874-.037 1.188-.15 1.948-.4 2.596-.247.638-.648 1.22-1.359 2.012-.564.529-1.124 1.035-1.85 1.41-.722.372-1.637.628-2.908.577h-.01c-1.524-.039-2.545-.4-3.292-.848-.723-.434-1.22-.966-1.713-1.492l-.046-.048-.108-.154c-.646-.914-1.447-2.046-1.309-3.992.07-.928.212-1.678.495-2.373.281-.69.717-1.36 1.416-2.106 1.092-1.102 2.623-2.058 4.504-1.988zm-7.098 6.418l-.683-.051c.076-1.012.236-1.916.593-2.79.358-.877.898-1.687 1.69-2.533l.007-.007.006-.006C8.06 5.645 9.947 4.41 12.364 4.505h.01l.01.001c2.143.145 4.607.852 6.176 3.081 1.065 1.407 1.699 3.039 1.69 4.707v.018c-.038 1.245-.157 2.192-.491 3.057-.337.87-.87 1.602-1.638 2.455l-.02.022-.02.02c-.57.534-1.258 1.17-2.181 1.648-.937.483-2.087.788-3.585.729-1.74-.045-2.993-.463-3.958-1.043-.892-.535-1.508-1.195-1.99-1.71a38.284 38.284 0 00-.096-.103l-.034-.036-.028-.04-.14-.2c-.666-.936-1.722-2.424-1.55-4.869l.684.049z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </FootLiIcon>
                <FootLiTex>التعلم</FootLiTex>
              </FootLiCon>
            </FooterLiLe>
            <FooterLiRi
              currentComponent={currentComponent}
              onClick={() => {
                showStore();
              }}
            >
              <FooterPin>
                <Foot>
                  <StyledIcon icon={faStore} />
                </Foot>
                <FootCon>المتجر</FootCon>
              </FooterPin>
            </FooterLiRi>
          </FooterList>
        </FooterWrap>
      </FooterNav>
    </Footer>
  );
};

export default QueFooter;
