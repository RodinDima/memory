import React from "react";

import style from "./DateTemplate.module.css";

const DateTemplate = ({ text, className }) => {
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

export default DateTemplate;
