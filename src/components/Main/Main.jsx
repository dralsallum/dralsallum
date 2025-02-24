import React, { useState } from "react";
import {
  MaConTwo,
  MaHe,
  MaSubTwo,
  MaWrapper,
  MaPara,
  MaImag,
  MaAll,
  MaTwo,
} from "./Main.elements";
import { Link } from "react-router-dom";
import Ban from "../../assets/ban.png";

const Main = () => {
  return (
    <>
      <MaAll>
        <MaWrapper>
          <MaConTwo>
            <MaSubTwo>
              <MaHe>افهم نفسك واعرف شخصيتك.</MaHe>
              <MaTwo></MaTwo>
              <MaPara>
                اختبارات شخصية دقيقة للغاية تضيء حياتك - في <br />
                المنزل ، وفي العمل، وفي العلاقات
              </MaPara>
            </MaSubTwo>
          </MaConTwo>
        </MaWrapper>
        <MaWrapper>
          <MaImag src={Ban} alt="" />
        </MaWrapper>
      </MaAll>
    </>
  );
};

export default Main;
