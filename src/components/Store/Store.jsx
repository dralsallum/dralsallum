import React, { useEffect } from "react"; // Import useEffect
import {
  StoreBanner,
  StoreBannerArrowContain,
  StoreBannerArrowContainer,
  StoreBannerLast,
  StoreBannerMain,
  StoreBannerSub,
  StoreTextContainer,
  StoreTextContainerSec,
  StoreTextContainerSub,
  StoreTextContainerThi,
  StoreTextHeader,
  StoreTimeBoost,
  StoreTimeKey,
  StoreTimeKeyContainer,
  StoreWtapper,
} from "../Store/Store.elements";
import Slider from "../Slider/Slider";
import { SecSlider } from "..";

const Store = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <StoreWtapper>
      <StoreTimeBoost>
        <StoreTimeKeyContainer>
          <StoreTimeKey>
            <StoreBanner>
              <StoreBannerMain>
                <StoreBannerSub>
                  <StoreBannerLast></StoreBannerLast>
                </StoreBannerSub>
                <StoreTextContainer>
                  <StoreTextContainerSub></StoreTextContainerSub>
                  <StoreTextContainerSec>
                    <StoreTextContainerThi>
                      <StoreTextHeader>
                        زِّد مهارات اللغة بخصم 50% على النسخة المميزة
                      </StoreTextHeader>
                    </StoreTextContainerThi>
                  </StoreTextContainerSec>
                </StoreTextContainer>
              </StoreBannerMain>
              <StoreBannerArrowContainer>
                <StoreBannerArrowContain></StoreBannerArrowContain>
              </StoreBannerArrowContainer>
            </StoreBanner>
          </StoreTimeKey>
        </StoreTimeKeyContainer>
      </StoreTimeBoost>
      <Slider />
      <SecSlider />
    </StoreWtapper>
  );
};

export default Store;
