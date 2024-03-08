import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const Anniversary = ({ Hero }) => {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;

  const filteredHeroes = Hero.filter((hero) => {
    const deathDateParts = hero.date.split(" - ")[1]?.split(".");
    if (deathDateParts) {
      const deathDay = parseInt(deathDateParts[0], 10);
      const deathMonth = parseInt(deathDateParts[1], 10);
      return deathDay === currentDay && deathMonth === currentMonth;
    }
    return false;
  });
  if (filteredHeroes.length === 0) {
    return null;
  }
  return (
    <div className="anniversary-block">
      <div className="anniversary-title">Роковини смерті загиблих героїв</div>
      <ul className="anniversary-list">
        {filteredHeroes.map((hero) => (
          <li className="main__victim-item anniversary" key={hero.id}>
            <Link
              className="main__victim-link "
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

export default Anniversary;
