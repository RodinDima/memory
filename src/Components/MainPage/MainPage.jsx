import React, { useState, useEffect } from "react";

import Button from "../Button/Button";

import { Hero } from "../Constants";

import TypingAnimation from "../TypingAnimation/TypingAnimation";

import "./style.css";

import Footer from "../Footer/Footer.jsx";
import Header from "../Header/Header";
import ScrollToTop from "../ScrollToTop/ScrollToTop.jsx";
import { Link } from "react-router-dom";
import WarInfo from "../WarInfo/WarInfo.jsx";
import Anniversary from "../Annyversary/Anniversary.jsx";

const MainPage = () => {
  const [searchText, setSearchText] = useState("");

  const [displayedHeroes, setDisplayedHeroes] = useState(3);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const filteredHeroes = Hero.filter((hero) =>
    hero.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const showMoreHeroes = () => {
    console.log(displayedHeroes + 3);

    setDisplayedHeroes(displayedHeroes + 3);
  };
  const hasMoreHeroes = displayedHeroes < filteredHeroes.length;

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
        <Header className="main__header" />
        <WarInfo />
        <TypingAnimation />
        <Anniversary Hero={Hero} />
        <div className="main__btns">
          <Link to="/Help">
            <Button
              className="main__btns-help"
              buttonText="Допомога родинам зниклих безвісті"
            />
          </Link>
          <Link to="/test">
            <Button className="main__btns-war" buttonText="Шляхами війни" />
          </Link>
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
              <Link
                className="main__victim-link"
                to={`/person/${hero.id}`}
                onClick={() => window.scrollTo(0, 0)}
              >
                <img src={hero.photo} alt="victim" />
              </Link>

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
        {windowWidth < 575 && hasMoreHeroes && (
          <Button
            className="main__read-more-button"
            buttonText="...далі"
            handleMoreHeroes={showMoreHeroes}
          />
        )}
      </div>
      <Footer />
      <ScrollToTop />
    </section>
  );
};

export default MainPage;
