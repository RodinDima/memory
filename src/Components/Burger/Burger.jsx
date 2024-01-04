import React, { useState, useEffect } from "react";

import "./style.css";
import { Link } from "react-router-dom";

const Burger = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  useEffect(() => {
    const body = document.body;

    if (open) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }

    return () => {
      body.style.overflow = "auto";
    };
  }, [open]);

  return (
    <>
      <button
        className={`menu__btn ${open ? "menu--open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <ul className={`header__mobile ${open ? "active" : ""}`}>
        <li className="menu__item">
          <Link to="/Pro_proekt" className="menu__item-text">
            Про проєкт
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/helpProject" className="menu__item-text">
            Допомогти проєкту
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/social" className="menu__item-text">
            Соціальна допомога
          </Link>
        </li>
        <li className="menu__item">
          <Link to="/petition" className="menu__item-text">
            Підпиши петицію
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Burger;
