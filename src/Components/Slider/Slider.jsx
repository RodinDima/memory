import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";

import "./style.css";

function HeroSlider({ sliderImages }) {
  const imageStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    maxHeight: "700px",
    objectFit: "cover",
    borderRadius: "20px",
  };

  return (
    <Swiper
      spaceBetween={30}
      autoplay={true}
      navigation={true}
      modules={[EffectFade, Navigation, Pagination]}
      className="mySwiper"
    >
      {sliderImages.map((image, index) => (
        <SwiperSlide key={index}>
          <img src={image} alt={`Slide ${index}`} style={imageStyles} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default function Slider({ sliderImages }) {
  if (!sliderImages || sliderImages.length === 0) {
    return null;
  }

  return (
    <div>
      <HeroSlider sliderImages={sliderImages} />
    </div>
  );
}
