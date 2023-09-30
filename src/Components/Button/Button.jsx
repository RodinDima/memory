import React from "react";

import cn from "classnames";

import styles from "./style.module.css"; // Правильний імпорт

const Button = (props) => {
  const { className, buttonText, onClick} = props;
  return (
    <>
      <button className={cn(styles.btn, className, onClick)}>{buttonText}</button>
      <span></span>
    </>
  );
};

export default Button;
