import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/slider.json";
import { Bottle, Browse, Envelop, Pills, Skin, Spray } from "../../assets";
import {
  SliderWrapper,
  SliderContainer,
  SliderCardContainer,
  SliderCardImg,
  SliderCardSpan,
  SliderCardSubSpan3,
  SliderArrowContainer,
  SliderArrowButtonRight,
  SliderArrowButtonLeft,
} from "./Slider.elements";
import { sliderSettings } from "../../utils/common";

const images = [Bottle, Browse, Envelop, Pills, Skin, Spray];
const SliderButton = () => {
  const swiper = useSwiper();
  return (
    <SliderArrowContainer>
      <SliderArrowButtonLeft onClick={() => swiper.slidePrev()}>
        &lt;
      </SliderArrowButtonLeft>
      <SliderArrowButtonRight onClick={() => swiper.slideNext()}>
        &gt;
      </SliderArrowButtonRight>
    </SliderArrowContainer>
  );
};

const Slider = () => {
  return (
    <SliderWrapper>
      <SliderContainer>
        <Swiper {...sliderSettings} style={{ overflow: "visible" }}>
          <SliderButton />
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <SliderCardContainer>
                <SliderCardImg src={images[i]} alt="home" />
                <SliderCardSpan></SliderCardSpan>
                <SliderCardSubSpan3>{card.name}</SliderCardSubSpan3>
              </SliderCardContainer>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
    </SliderWrapper>
  );
};

export default Slider;
