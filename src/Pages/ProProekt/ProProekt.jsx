import React from "react";

import Header from "../../Components/Header/Header";

import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import "./style.css";

const ProProekt = () => {
  return (
    <section className="proekt__container">
      <Header className="custom-header" />
      <Breadcrumbs />
      <div></div>
      <h3 className="proekt__title">Про проєкт:</h3>
      <div className="proekt__text">
        <p>
          Шановні мешканці та гості Вільногірської громади! До вашої уваги новий
          сайт.
        </p>
        <p>
          Він присвячений героїзму і мужності наших земляків, увічненню пам'яті
          про загиблих і живих Героїв російсько-української війни.
        </p>
        <p>
          Медіаресурс ще у стані розробки, матеріали не всі. Але ми готові до
          співпраці з рідними наших захисників і захисниць, щоб наповнити це
          джерело інформації достовірними фактами з їхнього життя, світлинами,
          спогадами про них.
        </p>
        <p>
          Тут ви зможете вносити пропозиції щодо нових матеріалів, користуватись
          інформацією з офіційних джерел щодо алгоритму пошуку зниклих безвісти.
        </p>
        <p>
          Матеріали про полеглих воїнів взяті з офіційного веб-сайту
          Вільногірської міської ради Дніпропетровської області, всеукраїнської
          Книги пам'яті, а також написані у процесі спілкування з родинами.
        </p>
        <p>
          Війна закінчиться, а пам'ять залишиться. Звертаємось до родин
          учасників АТО/ООС з проханням допомогти у написанні цієї символічної
          Книги Пам'яті нашої громади.
        </p>
        <p> Слава Україні! Героям слава!</p>
      </div>
    </section>
  );
};

export default ProProekt;
