import React from "react";

import Contacts from "../Conatcts/Contacts";

import ButtonFb from "../ButtonFb/ButtonFb";

import Header from "../Header/Header";

import "./style.css";


const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__inf">
        <p>Зауваження та пропозиції просимо надсилати за формою:</p>
      </div>
      <Contacts />
      <div className="footer__inner">
        <a className="footer__link" href="#">
          <ButtonFb buttonText="Поширити у фейсбук" />
        </a>
      </div>
      <nav className="footer__menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a className="menu__link" href="/Pro_proekt">
              Про проєкт
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/helpProject">
              Допомогти проєкту
            </a>
          </li>
          <li className="menu__item">
            <a className="menu__link" href="/helpProject">
              Соціальна допомога
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
