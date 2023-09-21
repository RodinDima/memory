import React from "react";
import style from "./logo.module.css";
import {ReactComponent as Logos} from "./Images/logo.svg"

const Logo = ({ className }) => {
  return (
    <a href="#"
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
