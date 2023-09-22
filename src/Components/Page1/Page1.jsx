import React from "react";

import NameTemplate from "../NameTemplate/NameTemplate";
import PositionTemplate from "../PositionTemplate/PositionTemplate";
import BiographyTemplate from "../BiographyTemplate/BiographyTemplate";

import { TEXT } from "../Constants";

import Sokol from ".//Images/sokol.jpg";
import Logo from "../Logo/Logo";
import GloryTemplate from "../GloryTemplate/GloryTemplate";

import "./style.css";

const Page1 = () => {

  // const Hero = [
  //   {
  //     id: 1,
  //     firstname: 'Герасімов',
  //     name: 'Іван', 
  //     age: 33,
  //     zvanie: 'Kapitan'
  //   },
  //   {
  //     id: 2,
  //     firstname: 'Герасімов',
  //     name: 'Іван', 
  //     age: 33,
  //     zvanie: 'Kapitan'
  //   },
  //   {
  //     id: 3,
  //     firstname: 'Герасімов',
  //     name: 'Іван', 
  //     age: 33,
  //     zvanie: 'Kapitan'
  //   },

  //   {
  //     id: 4,
  //     firstname: 'Герасімов',
  //     name: 'Іван', 
  //     age: 33,
  //     zvanie: 'Kapitan'
  //   },
  //   {
  //     id: 5,
  //     firstname: 'Герасімов',
  //     name: 'Іван', 
  //     age: 33,
  //     zvanie: 'Kapitan'
  //   },

  // ]

  return (
    <section className="victim">
      <div className="victim__container">
        <div className="logo">
          <Logo />
        </div>

        <div className="victim__content">
          <div className="victim__img">
            <img className="img" src={Sokol} alt="Сергій СОКОЛЕНКО" />
          </div>
          <div className="victim__description">
            <NameTemplate text="Сергій Анатолійович СОКОЛЕНКО" />
            <h2 className="victim__life">Віддав життя за Україну</h2>
            <PositionTemplate text="молодший інспектор І категорії – помічник гранатометника" />
          </div>
        </div>

        <BiographyTemplate text="Життєпис" />
        <div className="victim__text">
          <p>{TEXT.Page1.p1}</p>
          <p>{TEXT.Page1.p2}</p>
          <p>{TEXT.Page1.p3}</p>
          <p>{TEXT.Page1.p4}</p>
          <p>{TEXT.Page1.p5}</p>
          <p>{TEXT.Page1.p6}</p>
          <p>{TEXT.Page1.p7}</p>
          <p>{TEXT.Page1.p8}</p>
        </div>
        <GloryTemplate className="victim__glory" text="Вічна слава герою!" />
      </div>
    </section>
  );
};

export default Page1;
