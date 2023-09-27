import React from "react";

import "./style.css";

const Test = () => {
    return (
      <div className="video__container">
        <a href="/">
          <h2 className="video__text">Шляхами війни</h2>
        </a>
        <div className="video">
          <iframe className="video-item"
            width="720"
            height="405"
            src="https://www.youtube.com/embed/yrc7BqjuxYE?si=hrPqzFMni9jMsYtN"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe className="video-item"
            width="720"
            height="405"
            src="https://www.youtube.com/embed/wS2GYSp-guQ?si=kcgmyyzyVgCVSu0e"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe className="video-item"
            width="720"
            height="405"
            src="https://www.youtube.com/embed/Gc1uT-KvQ7w?si=h1GaJtDynOWna8gV"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <iframe className="video-item"
            width="720"
            height="405"
            src="https://www.youtube.com/embed/xkjwSvCYKJc?si=FiQsWUdHSD2Rwmty"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    );
};

export default Test;