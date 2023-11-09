import React, { useState, useEffect } from "react";

import "./style.css";

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
          <a href="/Pro_proekt" className="menu__item-text">
            Про проєкт
          </a>
        </li>
        <li className="menu__item">
          <a href="/helpProject" className="menu__item-text">
            Допомогти проєкту
          </a>
        </li>
        <li className="menu__item">
          <a href="/social" className="menu__item-text">
            Соціальна допомога
          </a>
        </li>
        <li className="menu__item">
          <a href="/petition" className="menu__item-text">
            Підпиши петицію
          </a>
        </li>
      </ul>
    </>
  );
};

export default Burger;
