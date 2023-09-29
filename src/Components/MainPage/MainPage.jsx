import React, { useState } from "react";
import Logo from "../Logo/Logo";

import Button from "../Button/Button";

import ReadMore from "../ReadMore/ReadMore";

import { Hero } from "../Constants";

import "./style.css";
import ButtonFb from "../ButtonFb/ButtonFb";



const MainPage = () => {
  const [searchText, setSearchText] = useState("");
  const filteredHeroes = Hero.filter((hero) =>
    hero.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <section className="main">
      <div className="main__container">
        <Logo />
       
        <ReadMore />
        <div className="main__btns">
          <a href="#">
            <Button buttonText="Герої" />
          </a>
          <a href="/Help">
            <Button buttonText="Допомога родинам зниклих безвісті" />
          </a>
          <a href="/test">
            <Button buttonText="Шляхами війни" />
          </a>
        </div>
        <form className="main__search">
          {/* <Search className="main__search-icon"/> */}
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
          <p className="nothing">Нікого не знайдено</p>
        )}
        <div className="main__footer">
         
          <a className="main__link" href="#">
            <ButtonFb buttonText="Поширити у фейсбук"/>
           
          </a>
        </div>
       <div className="main__inf">
          <p>Сайт працює у тестовому режимі.</p>
          <p>Зауваження та пропозиції просимо надсилати на e-mail:</p>
          <a
            href="mailto:rodindima1984@gmail.com"
            rel="noopener noreferrer"
            target="blank"
          >rodindima1984@gmail.com</a>
       </div>
      </div>
    </section>
  );
};

export default MainPage;
