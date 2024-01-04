import React, { useState } from "react";
import "./style.css";
import Logo from "../../Components/Logo/Logo";
import Button from "../../Components/Button/Button";

import { TiLink } from "react-icons/ti";
import { AiOutlineCheck } from "react-icons/ai";
import Header from "../../Components/Header/Header";
import { Link } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";

const HelpProj = () => {
  const resourceLink = "https://vilnohirsk-memory.com";

  const [isCopied, setIsCopied] = useState(false);

  const copyResourceLink = () => {
    const textField = document.createElement("textarea");
    textField.innerText = resourceLink;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    setIsCopied(true);
  };

  return (
    <section className="proj__container">
      <Header className="custom-header" />
      <Logo />
      <Link to="/">
        <GoArrowLeft className="link" />
      </Link>
      <h3 className="proj__title">
        Підтримайте портал пам’яті одним із наступних способів:
      </h3>
      <div className="proj__text">
        <p>
          Інформаційна підтримка: розкажіть про наш проєкт на своїй сторінці в
          соціальній мережі, друзям або знайомим.
        </p>
        <p>
          Поставте посилання на наш ресурс там, де це буде доречно.{" "}
          <span
            className="proj__link"
            style={{ cursor: "pointer", alignItems: "center" }}
            onClick={copyResourceLink}
            title="Натисніть для копіювання посилання"
          >
            {isCopied ? (
              <>
                <AiOutlineCheck /> Посилання зкопійоване
              </>
            ) : (
              <>
                <TiLink /> https://vilnohirsk-memory.com
              </>
            )}
          </span>
        </p>

        <p>
          Тематична підтримка: світлини воїнів, загиблих у ході
          російсько-української війни, фото меморіалів, пам‘ятників,
          меморіальних знаків, особисту інформацію про Героїв, спогади про них
          рідних, друзів, колег, побратимів надсилайте на нашу електронну
          скриньку:<br></br>
          <a href="mailto:memoryvilnohirsk2023@gmail.com">
            memoryvilnohirsk2023@gmail.com
          </a>
        </p>
        <p>
          Будемо вдячні, якщо Ви знайшли помилки або невідповідності і
          повідомили про це нам.
        </p>
      </div>
    </section>
  );
};

export default HelpProj;
