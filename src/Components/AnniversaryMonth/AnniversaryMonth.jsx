import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const AnniversaryMonth = ({ Hero }) => {
  const currentMonth = new Date().getMonth() + 1;

  // Фільтруємо героїв, у яких річниця смерті припадає на поточний місяць
  const filteredHeroes = Hero.filter((hero) => {
    const deathDateParts = hero.date.split(" - ")[1]?.split(".");
    if (deathDateParts) {
      const deathMonth = parseInt(deathDateParts[1], 10);
      return deathMonth === currentMonth;
    }
    return false;
  });

  // Сортуємо героїв за днями місяця
  const sortedHeroes = filteredHeroes.sort((a, b) => {
    const dayA = parseInt(a.date.split(" - ")[1].split(".")[0], 10);
    const dayB = parseInt(b.date.split(" - ")[1].split(".")[0], 10);
    return dayA - dayB;
  });

  if (sortedHeroes.length === 0) {
    return null; // Якщо немає збігів на поточний місяць, не відображати компонент
  }

  return (
    <div className="anniversary-block">
      <div className="anniversary-title">Роковини смерті героїв цього місяця</div>
      <ul className="anniversary-list">
        {sortedHeroes.map((hero) => (
          <li className="main__victim-item anniversary" key={hero.id}>
            <Link
              className="main__victim-link"
              to={`/person/${hero.id}`}
              onClick={() => window.scrollTo(0, 0)}
            >
              <img src={hero.photo} alt="victim" />
            </Link>
            <div className="main__victim-details anniversary">
              <p>{hero.name}</p>
              <p>{hero.date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnniversaryMonth;
