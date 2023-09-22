import React from "react";

import { ReactComponent as Logos } from "./Images/logo.svg"

import style from "./logo.module.css";

const Logo = ({ className }) => {
  return (
    <a href="/"
      className={
        className !== undefined
          ? `${style["img"]} ${className}`
          : `${style["img"]}`
      }
    ><Logos/>
     
    </a>
  );
};

export default Logo;
