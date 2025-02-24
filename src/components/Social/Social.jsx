import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
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
  LiWr,
  LiEl,
  LiTopImg,
  LiTopAt,
  SoTop,
  SoTopImg,
  SoMid,
  SoBot,
  SoBotLe,
  SoBotRi,
  SoBo,
  SoB,
  SoSubTop,
} from "./Social.elements";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRetweet,
  faReply,
  faEye,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { sliderSettings } from "../../utils/common";
import data from "../../utils/profile.json";

const Amal = "https://alsallum.s3.eu-north-1.amazonaws.com/Saudi+woman.webp";
const Faisal = "https://alsallum.s3.eu-north-1.amazonaws.com/saudi+man.webp";
const Ahmad999 = "https://alsallum.s3.eu-north-1.amazonaws.com/madara.webp";
const Madhat = "https://alsallum.s3.eu-north-1.amazonaws.com/teacher+.webp";

const imageMapping = {
  احمد999: Ahmad999,
  مدحت: Madhat,
  فيصل: Faisal,
  امل: Amal,
};

const SocialButton = ({ swiper }) => {
  return (
    <SliderArrowContainerAll>
      <SliderArrowContainer1>الكراسي</SliderArrowContainer1>
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

const Social = () => {
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const slides = data.map((card, i) => (
    <SwiperSlide key={i}>
      <Link
        style={{
          textDecoration: "none",
          color: "inherit",
        }}
        to={""}
      >
        <LiWr>
          <LiEl>
            <LiTopImg src="" alt="" />
            <LiTopAt href="">
              <SoBot>
                <SoBotLe>
                  <SoBo>{card.name}</SoBo>
                  <SoB>{card.subtext}</SoB>
                </SoBotLe>
                <SoBotRi src={imageMapping[card.name]} alt={card.name} />
              </SoBot>
              <SoMid>{card.text}</SoMid>
              <SoTop>
                <SoSubTop>
                  {card.views}
                  <FontAwesomeIcon icon={faEye} />
                </SoSubTop>
                <SoSubTop>
                  {card.likes}
                  <FontAwesomeIcon icon={faHeart} />
                </SoSubTop>
                <SoSubTop>
                  {card.retweets}
                  <FontAwesomeIcon icon={faRetweet} />
                </SoSubTop>
                <SoSubTop>
                  {card.replies}
                  <FontAwesomeIcon icon={faReply} />
                </SoSubTop>
              </SoTop>
            </LiTopAt>
          </LiEl>
        </LiWr>
      </Link>
      <SliderCardSubSpan2></SliderCardSubSpan2>
    </SwiperSlide>
  ));

  return (
    <SliderWrapper>
      <SliderContainer>
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

export default Social;
