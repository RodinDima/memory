import React from "react";

import "./style.css";

const HelpProj = () => {
	return (
    <section className="Proj__container">
      <h3 className="proj__title">
        Підтримайте портал пам’яті одним із наступних способів:
      </h3>
      <div className="proj__text">
        <p>
          Інформаційна підтримка: розкажіть про наш проєкт на своїй сторінці в
          соціальній мережі, друзям або знайомим.{" "}
        </p>
        <p>
          Поставте посилання на наш ресурс
          https://vilnogirsk-rada.gov.ua/pamyatayemo/ там, де це буде доречно.
        </p>
      </div>
    </section>
  );
};

export default HelpProj;
