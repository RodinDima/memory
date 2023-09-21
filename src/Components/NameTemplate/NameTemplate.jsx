import React from "react";
import style from "./NameTemplate.module.css";

const NameTemplate = ({ text, className }) => {
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

export default NameTemplate;
