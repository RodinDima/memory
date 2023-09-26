import React from "react";

import style from "./BiographyTemplate.module.css";

const BiographyTemplate = ({ text, className }) => {
  return (
    <div
      className={
        className !== undefined
          ? `${style["special-text"]} ${className}`
          : `${style["special-text"]}`
      }
    >
      {text}
    </div>
  );
};

export default BiographyTemplate;
