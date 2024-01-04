import React from "react";

import Logo from "./Images/logo.png";
import Zsu from "./Images/zsu.png";

import Burger from "../Burger/Burger";

import "./style.css";
import { Link } from "react-router-dom";

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
            <Link className={`menu__link ${className}`} to="/Pro_proekt">
              Про проєкт
            </Link>
          </li>
          <li className="menu__item">
            <Link className={`menu__link ${className}`} to="/helpProject">
              Допомогти проєкту
            </Link>
          </li>
          <li className="menu__item">
            <Link className={`menu__link ${className}`} to="/social">
              Соціальна допомога
            </Link>
          </li>
          <li className="menu__item">
            <Link className={`menu__link ${className}`} to="/petition">
              Підпиши петицію
            </Link>
          </li>
        </ul>
      </nav>
      <Burger />
    </header>
  );
};

export default Header;
