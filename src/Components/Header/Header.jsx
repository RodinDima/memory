import React from "react";

import Logo from "./Images/logo.png";
import Zsu from "./Images/zsu.png";

import classNames from "classnames";

import Burger from "../Burger/Burger";

import "./style.css";

const Header = ({ className }) => {
  return (
    <header className={`header ${className}`}>
      <div className="header__left">
        <div className="header__logo-herb">
          <a target="blanc" href="https://vilnogirsk-rada.gov.ua/">
            <img src={Logo} alt="Вільногірська міська рада" />
          </a>
        </div>
        <div className="header__logo-zsu">
          <a target="blanc" href="https://www.zsu.gov.ua/">
            <img src={Zsu} alt="Збройні сили України" />
          </a>
        </div>
      </div>
      <nav className="menu">
        <ul className="menu__list">
          <li className="menu__item">
            <a className={`menu__link ${className}`} href="/Pro_proekt">
              Про проєкт
            </a>
          </li>
          <li className="menu__item">
            <a className={`menu__link ${className}`} href="/helpProject">
              Допомогти проєкту
            </a>
          </li>
          <li className="menu__item">
            <a className={`menu__link ${className}`} href="/social">
              Соціальна допомога
            </a>
          </li>
          <li className="menu__item">
            <a className={`menu__link ${className}`} href="/petition">
              Підпиши петицію
            </a>
          </li>
        </ul>
      </nav>
      <Burger />
    </header>
  );
};

export default Header;
