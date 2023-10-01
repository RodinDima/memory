import React from "react";

import NameTemplate from "../NameTemplate/NameTemplate";
import DateTemplate from "../DateTemplate/DateTemplate";
import PositionTemplate from "../PositionTemplate/PositionTemplate";
import BiographyTemplate from "../BiographyTemplate/BiographyTemplate";

import { Hero } from "../Constants";

import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../Logo/Logo";
import GloryTemplate from "../GloryTemplate/GloryTemplate";

import "./style.css";
import ButtonFb from "../ButtonFb/ButtonFb";

const Page1 = () => {
  const { id } = useParams();
   const location = useLocation();
  
  const selectedHero = Hero.find((hero) => hero.id === +id);

  if (!selectedHero) {
    return null;
  }
 
  const currentUrl = location.pathname;
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    currentUrl
  )}`;

  return (
    <section className="victim">
      <div className="victim__container">
        <div className="logo">
          <Logo />
        </div>

        <div className="victim__content">
          <div className="victim__img">
            <img
              className="img"
              src={selectedHero.photo}
              alt={selectedHero.name}
            />
          </div>
          <div className="victim__description">
            <NameTemplate text={selectedHero.name} />
            <DateTemplate text={selectedHero.date} />
            <h2 className="victim__life">Віддав життя за Україну</h2>
            <PositionTemplate text={selectedHero.position} />
          </div>
        </div>

        <BiographyTemplate text="Життєпис" />
        <div className="victim__text">
          {Object.keys(selectedHero.texts).map((key, index) => (
            <p key={index}>{selectedHero.texts[key]}</p>
          ))}
        </div>
        <GloryTemplate className="victim__glory" text="Вічна слава герою!" />
        {/* <ButtonFb
          buttonText="Поширити у фейсбук"
          facebookShareUrl={facebookShareUrl}
        /> */}
      </div>
    </section>
  );
};

export default Page1;
