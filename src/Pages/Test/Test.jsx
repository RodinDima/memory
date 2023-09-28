import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/swiper-bundle.css";
import "./style.css";

const Test = () => {
  return (
    <div className="video__container">
      <a href="/">
        <h2 className="video__text">Шляхами війни</h2>
      </a>
      <Swiper
        direction="vertical"
        spaceBetween={20}
        slidesPerView={1}
        style={{ height: "400px" }}
        modules={[Navigation]}
        navigation={{
          clickable: true,
          prevEl: ".slider-prev-button",
          nextEl: ".slider-next-button",
        }}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <iframe
            className="video-item"
            width="720"
            height="100%" // Используйте 100% высоты
            src="https://www.youtube.com/embed/yrc7BqjuxYE?si=hrPqzFMni9jMsYtN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <iframe
            className="video-item"
            width="720"
            height="100%" // Используйте 100% высоты
            src="https://www.youtube.com/embed/wS2GYSp-guQ?si=kcgmyyzyVgCVSu0e"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <iframe
            className="video-item"
            width="720"
            height="100%" // Используйте 100% высоты
            src="https://www.youtube.com/embed/Gc1uT-KvQ7w?si=h1GaJtDynOWna8gV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <iframe
            className="video-item"
            width="720"
            height="100%" // Используйте 100% высоты
            src="https://www.youtube.com/embed/xkjwSvCYKJc?si=FiQsWUdHSD2Rwmty"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </SwiperSlide>
        <div className="slider-prev-button"></div>
        <div className="slider-next-button"></div>
      </Swiper>
    </div>
  );
};

export default Test;
