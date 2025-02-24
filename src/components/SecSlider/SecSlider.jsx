import React from "react";

import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import { Link } from "react-router-dom";
import {
  Button,
  SliderWrapper,
  SliderContainer,
  SliderCardContainer,
  SliderCardImg,
  SliderCardSpan,
  SliderCardSubSpan1,
  SliderCardSubSpan2,
  SliderCardSubSpan3,
  SliderArrowContainer,
  SliderArrowButtonRight,
  SliderArrowButtonLeft,
  SliderArrowContainerAll,
  SliderArrowContainer1,
} from "./SecSlider.elements";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/SecSlider.json";

const GameOver = "https://alsallum.s3.eu-north-1.amazonaws.com/GameOver.png";
const TNT = "https://alsallum.s3.eu-north-1.amazonaws.com/TNT.jpg";
const Mario = "https://alsallum.s3.eu-north-1.amazonaws.com/Mario.jpg";
const Rick = "https://alsallum.s3.eu-north-1.amazonaws.com/rick.png";

const imageMapping = {
  Mario: Mario,
  Rick: Rick,
  TNT: TNT,
  GameOver: GameOver,
};

const SliderButton = ({ swiper }) => {
  return (
    <SliderArrowContainerAll>
      <SliderArrowContainer1>الاضاءات</SliderArrowContainer1>
      <SliderArrowContainer>
        <SliderArrowButtonLeft onClick={() => swiper && swiper.slidePrev()}>
          &lt;
        </SliderArrowButtonLeft>
        <SliderArrowButtonRight onClick={() => swiper && swiper.slideNext()}>
          &gt;
        </SliderArrowButtonRight>
      </SliderArrowContainer>
    </SliderArrowContainerAll>
  );
};

const Slider = () => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const slides = data.map((card, i) => (
    <SwiperSlide key={i}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={"https://www.google.com"}
      >
        <SliderCardContainer>
          <SliderCardImg src={imageMapping[card.name]} alt={card.name} />
          <SliderCardSubSpan1>
            <SliderCardSubSpan3>{card.name}</SliderCardSubSpan3>
            <SliderCardSpan>{card.price} ريال</SliderCardSpan>
          </SliderCardSubSpan1>
        </SliderCardContainer>
      </Link>
      <SliderCardSubSpan2>
        <Link to={"https://www.google.com"}>
          <Button>اضافة للسلة</Button>
        </Link>
      </SliderCardSubSpan2>
    </SwiperSlide>
  ));

  return (
    <SliderWrapper>
      <SliderContainer>
        <SliderButton swiper={swiperInstance} />
        <Swiper
          {...sliderSettings}
          style={{ overflow: "visible" }}
          onSwiper={setSwiperInstance}
        >
          {slides}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
