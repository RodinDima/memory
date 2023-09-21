import React from "react";

import NameTemplate from "../NameTemplate/NameTemplate";
import PositionTemplate from "../PositionTemplate/PositionTemplate";
import BiographyTemplate from "../BiographyTemplate/BiographyTemplate";

import { TEXT } from "../Constants";

import Sokol from ".//Images/sokol.jpg";
import Logo from "../Logo/Logo";

import "./style.css";
import GloryTemplate from "../GloryTemplate/GloryTemplate";

const Page1 = () => {
  return (
    <>
      <div className="inner__container">
        <a className="logo" href="#">
          <div>
            {" "}
            <Logo />
          </div>
        </a>

        <div className="main">
          <div className="main__img">
            <img className="img" src={Sokol} alt="" />
          </div>
          <div className="main__description">
            <NameTemplate text="Сергій Анатолійович СОКОЛЕНКО" />
            <h2 className="main__life">Віддав життя за Україну</h2>
            <PositionTemplate text="молодший інспектор І категорії – помічник гранатометника" />
          </div>
        </div>

        <BiographyTemplate text="Життєпис" />
        <div className="main__text">
          <p>{TEXT.Page1.p1}</p>
          <p>{TEXT.Page1.p2}</p>
          <p>{TEXT.Page1.p3}</p>
          <p>{TEXT.Page1.p4}</p>
          <p>{TEXT.Page1.p5}</p>
          <p>{TEXT.Page1.p6}</p>
          <p>{TEXT.Page1.p7}</p>
          <p>{TEXT.Page1.p8}</p>
        </div>
        <GloryTemplate className="main__glory" text="Вічна слава герою!" />
      </div>
    </>
  );
};

export default Page1;
