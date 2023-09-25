import React from "react";

import "./style.css";

const Test = () => {
    return (
      <div className="video">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/yrc7BqjuxYE?si=hrPqzFMni9jMsYtN"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    );
};

export default Test;