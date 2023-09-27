import React from "react";

import cn from "classnames";

import styles from "./style.module.css"; // Правильний імпорт

const ButtonFb = (props) => {
  const { className, buttonText,} = props;
  return (
    <>
      <button className={cn(styles.btn, className)}>{buttonText}</button>
      <span></span>
    </>
  );
};

export default ButtonFb;
