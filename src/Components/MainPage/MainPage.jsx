import React, { useState } from "react";
import Logo from "../Logo/Logo";

import Button from "../Button/Button";

import { ReactComponent as FB } from "./Images/fb.svg";

import { Hero } from "../Constants";

import "./style.css";

const MainPage = () => {
  const [searchText, setSearchText] = useState("");
  const filteredHeroes = Hero.filter((hero) =>
    hero.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="main">
      <div className="main__container">
        <Logo />
        <div className="main__btns">
          <a href="#">
            <Button buttonText="Герої" />
          </a>
          <a href="#">
            <Button buttonText="Допомога родинам зниклих безвісті" />
          </a>
          <a href="#">
            <Button buttonText="Шляхами війни" />
          </a>
        </div>
        <form className="main__search">
          <input
            type="text"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Введіть ім'я для пошуку..."
          />
        </form>
        <Button buttonText="Запропонувати" />
        {filteredHeroes.length > 0 ? (
          <div className="main__victim">
            {filteredHeroes.map((hero) => (
              <div className="main__victim-item" key={hero.id}>
                <a className="main__victim-link" href={`/person/${hero.id}`}>
                  <img src={hero.photo} alt="victim" />
                </a>
              </div>
            ))}
          </div>
        ) : (
          <p>Нічого не знайдено</p>
        )}
        <div className="main__footer">
          <div>Поширити у</div>
          <a className="main__link" href="#">
            <FB />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
