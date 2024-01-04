import React from "react";

import { ReactComponent as Logos } from "./Images/logo.svg"

import style from "./logo.module.css";
import { Link } from "react-router-dom";

const Logo = ({ className }) => {
  return (
    <Link to="/"
      className={
        className !== undefined
          ? `${style["img"]} ${className}`
          : `${style["img"]}`
      }
    ><Logos />
     
    </Link>
  );
};

export default Logo;
