import React, { useState } from "react";
import "./style.css";
import Logo from "../../Components/Logo/Logo";
import Button from "../../Components/Button/Button";

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

    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section className="proj__container">
      <Logo />
      <h3 className="proj__title">
        Підтримайте портал пам’яті одним із наступних способів:
      </h3>
      <div className="proj__text">
        <p>
          Інформаційна підтримка: розкажіть про наш проєкт на своїй сторінці в
          соціальній мережі, друзям або знайомим.
        </p>
        <p>
          Поставте посилання на наш ресурс
          <span
            className="proj__link"
            style={{ cursor: "pointer", marginLeft: "5px", marginRight: "5px" }}
            onClick={copyResourceLink}
          >
            {resourceLink}
          </span>
          там, де це буде доречно.
        </p>
        <p>
          Тематична підтримка: світлини воїнів, загиблих у ході
          російсько-української війни, фото меморіалів, пам‘ятників,
          меморіальних знаків, особисту інформацію про Героїв, спогади про них
          рідних, друзів, колег, побратимів надсилайте на нашу електронну
          скриньку:
          <a href="mailto:memoryvilnohirsk2023@gmail.com">
            memoryvilnohirsk2023@gmail.com
          </a>
        </p>
        <p>
          Будемо вдячні, якщо Ви знайшли помилки або невідповідності і
          повідомили про це нам.
        </p>
        {isCopied && <div className="popup">Посилання скопійовано!</div>}
      </div>
      <a className="proj-btn" href="/">
        <Button className="help-btn" buttonText="Повернутись назад" />
      </a>
    </section>
  );
};

export default HelpProj;
