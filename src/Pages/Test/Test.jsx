import React from "react";

import "swiper/css";
import "swiper/swiper-bundle.css";

import Header from "../../Components/Header/Header";

import "./style.css";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";

const Test = () => {
  return (
    <div className="video__container">
      <Header className="custom-header" />
      <Link to="/">
        <h2 className="video__text">Шляхами війни</h2>
      </Link>

      <div className="video-inner">
        <iframe
          className="video-item"
          width="720"
          height="100%"
          src="https://www.youtube.com/embed/TEV7zVxhMJ0?si=hacf08RxYX2_cmzP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
        <iframe
          className="video-item"
          width="720"
          height="100%"
          src="https://www.youtube.com/embed/yrc7BqjuxYE?si=hrPqzFMni9jMsYtN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          className="video-item"
          width="720"
          height="100%"
          src="https://www.youtube.com/embed/wS2GYSp-guQ?si=kcgmyyzyVgCVSu0e"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          className="video-item"
          width="720"
          height="100%"
          src="https://www.youtube.com/embed/Gc1uT-KvQ7w?si=h1GaJtDynOWna8gV"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>

        <iframe
          className="video-item"
          width="720"
          height="100%"
          src="https://www.youtube.com/embed/xkjwSvCYKJc?si=FiQsWUdHSD2Rwmty"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <Link to="/">
        <Button className="help-btn" buttonText="Повернутись назад" />
      </Link>
    </div>
  );
};

export default Test;
