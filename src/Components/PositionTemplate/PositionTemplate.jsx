import React from "react";
import style from "./PositionTemplate.module.css";

const PositionTemplate = ({ text, className }) => {
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

export default PositionTemplate;
