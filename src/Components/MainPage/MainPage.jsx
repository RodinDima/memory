import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import ReadMore from "../ReadMore/ReadMore";

import { Hero } from "../Constants";

import Contacts from "../Conatcts/Contacts";

import TypingAnimation from "../TypingAnimation/TypingAnimation";

import { Hourglass } from "react-loader-spinner";

import ButtonFb from "../ButtonFb/ButtonFb";

import Logo from "./Images/logo.png";
import Zsu from "./Images/zsu.png";

import "./style.css";
import Burger from "../Burger/Burger";
//import { Accordion } from "../Accordion/Accordion";
//import Faq from "../Faq/Faq";

//import ControlledAccordions from "../Accord/Accord";

const MainPage = () => {
  const [searchText, setSearchText] = useState("");

  const [displayedHeroes, setDisplayedHeroes] = useState(3);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  //useEffect(() => {
  //  const isPageLoaded = sessionStorage.getItem("isPageLoaded");

  //  if (isPageLoaded) {
  //    setLoading(false);
  //  } else {
  //    setTimeout(() => {
  //      setLoading(false);

  //      sessionStorage.setItem("isPageLoaded", "true");
  //    }, 2000);
  //  }
  //}, []);

  //const [loading, setLoading] = useState(true);

  const filteredHeroes = Hero.filter((hero) =>
    hero.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const showMoreHeroes = () => {
    console.log(displayedHeroes + 3);

    setDisplayedHeroes(displayedHeroes + 3);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth > 575) {
      setDisplayedHeroes(filteredHeroes.length);
    }
  }, [windowWidth, filteredHeroes]);

  return (
    <section className="main">
      <div className="main__container">
        {/*{loading ? (
          <div className="loader">
            <Hourglass
              visible={true}
              height="80"
              width="80"
              ariaLabel="hourglass-loading"
              wrapperStyle={{}}
              wrapperClass=""
              colors={["#880000 ", "#FF0000 "]}
            />
          </div>
        ) : (
          <>*/}

        <header className="header">
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
                <a className="menu__link" href="/Pro_proekt">
                  Про проєкт
                </a>
              </li>
              <li className="menu__item">
                <a className="menu__link" href="/helpProject">
                  Допомогти проєкту
                </a>
              </li>
            </ul>
          </nav>
          <Burger />
        </header>

        <TypingAnimation />

        {/*<Faq/>*/}
        {/*<ReadMore />*/}
        {/*<ControlledAccordions/>*/}
        <div className="main__btns">
          <a href="/Help">
            <Button
              className="main__btns-help"
              buttonText="Допомога родинам зниклих безвісті"
            />
          </a>
          <a href="/test">
            <Button className="main__btns-war" buttonText="Шляхами війни" />
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
        <div className="main__victim">
          {filteredHeroes.slice(0, displayedHeroes).map((hero) => (
            <div className="main__victim-item" key={hero.id}>
              <a className="main__victim-link" href={`/person/${hero.id}`}>
                <img src={hero.photo} alt="victim" />
              </a>

              <div className="main__victim-details">
                <p>{hero.name}</p>
                <p>{hero.date}</p>
              </div>
            </div>
          ))}
        </div>
        {filteredHeroes.length === 0 && (
          <p className="nothing">Нікого не знайдено</p>
        )}
        {windowWidth < 575 && (
          <Button
            className="main__read-more-button"
            buttonText="...далі"
            handleMoreHeroes={showMoreHeroes}
          />
        )}
        <div className="main__inf">
          <p>Сайт працює у тестовому режимі.</p>
          <p>Зауваження та пропозиції просимо надсилати за формою:</p>
        </div>
        <Contacts />
        <div className="main__footer">
          <a className="main__link" href="#">
            <ButtonFb buttonText="Поширити у фейсбук" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
