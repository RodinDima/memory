import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { Hero } from "../Constants";

import "./style.css";


function HeroSlider({ sliderImages }) {
  const imageStyles = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "20px",
  };

  return (
    <Swiper
      spaceBetween={30}
      autoplay={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
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

export default function Slider() {
  const heroesWithSlider = Hero.filter(
    (hero) => hero.sliderImg && hero.sliderImg.length > 0
  );

  return (
    <div>
      {heroesWithSlider.map((hero) => (
        <div key={hero.id}>
          <HeroSlider sliderImages={hero.sliderImg} />
        </div>
      ))}
    </div>
  );
}
