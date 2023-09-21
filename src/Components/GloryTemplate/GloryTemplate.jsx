import React from "react";
import style from "./GloryTemplate.module.css";

const GloryTemplate = ({ text, className }) => {
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

export default GloryTemplate;
