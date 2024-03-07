import React from "react";

import styles from "./style.module.css";

const months = [
  "січня",
  "лютого",
  "березня",
  "квітня",
  "травня",
  "червня",
  "липня",
  "серпня",
  "вересня",
  "жовтня",
  "листопада",
  "грудня",
];

const formatDate = (date) => {
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${day} ${months[monthIndex]} ${year} року`;
};

const WarInfo = () => {
  const startDate = new Date("2022-02-24");

  const currentDate = new Date();

  const diffInDays = Math.floor(
    (currentDate - startDate) / (1000 * 60 * 60 * 24)
  );

  return (
    <div className={styles.date}>
      <div>
        Сьогодні {formatDate(currentDate)},російсько-українська війна триває{" "}
        {diffInDays} дні +8 років
      </div>
    </div>
  );
};

export default WarInfo;
