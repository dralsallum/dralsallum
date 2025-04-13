import React from "react";
import {
  BannerPictureContainer,
  BannerWrapper,
  BannerPicture,
  BannerPara,
} from "./Banner.elements";
import HardMints from "../../assets/HardMints.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerPictureContainer>
        <BannerPicture src={HardMints} />
      </BannerPictureContainer>
      <Link to="/Exam" style={{ textDecoration: "none", color: "inherit" }}>
        <BannerPara>اختبر نفسك واعرف مستواك الحالي</BannerPara>
      </Link>
    </BannerWrapper>
  );
};

export default Banner;
