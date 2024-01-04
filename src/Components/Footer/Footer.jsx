import React from "react";

import Contacts from "../Conatcts/Contacts";

import ButtonFb from "../ButtonFb/ButtonFb";

import { FaRegCopyright } from "react-icons/fa6";

import Header from "../Header/Header";

import "./style.css";
import TwitterBtn from "../Twitterbtn/Twitterbtn";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer__container">
      <div className="footer__inf">
        <p>Зауваження та пропозиції просимо надсилати за формою:</p>
      </div>
      <Contacts />
      <div className="footer__inner">
        <a className="footer__link" href="#">
          <ButtonFb />
          <TwitterBtn />
        </a>
      </div>
      <nav className="footer__menu">
        <ul className="menu__list">
          <li className="menu__item">
            <Link className="menu__link" to="/Pro_proekt">
              Про проєкт
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/helpProject">
              Допомогти проєкту
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/social">
              Соціальна допомога
            </Link>
          </li>
          <li className="menu__item">
            <Link className="menu__link" to="/petition">
              Підпиши петицію
            </Link>
          </li>
        </ul>
      </nav>
      <div className="footer__copy">
        <p>
          © Портал пам'яті про загиблих і живих Героїв російсько-української
          війни
        </p>
      </div>
    </div>
  );
};

export default Footer;
