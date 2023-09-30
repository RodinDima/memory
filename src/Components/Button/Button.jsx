import React from "react";

import cn from "classnames";

import styles from "./style.module.css"; // Правильний імпорт

const Button = (props) => {
  const { className, buttonText, handleMoreHeroes } = props;
  return (
    <>
      <button className={cn(styles.btn, className)} onClick={handleMoreHeroes}>
        {buttonText}
      </button>
      <span></span>
    </>
  );
};

export default Button;
