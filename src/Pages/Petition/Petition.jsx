import React from "react";

import Logo from "../../Components/Logo/Logo";
import Button from "../../Components/Button/Button";

import "./style.css";
import Header from "../../Components/Header/Header";

const Petition = () => {
  return (
    <section className="petition__container">
      <Header className="custom-header" />
      <Logo />
      <h3 className="petition__title">
        Підпишімо петиції щодо удостоєння наших земляків звання Героя України
        (посмертно)!
      </h3>
      <div className="petition__text">
        <p>
          Перейти за посиланням:
          <a
            className="petition-link"
            href="https://petition.president.gov.ua/"
            target="blanc"
          >
            https://petition.president.gov.ua/
          </a>
        </p>
        <p>
          Авторизуватися на сайті за допомогою електронного цифрового підпису,
          Дія.підпису або ID-картки.
        </p>

        <p>
          Знову перейдіть за посиланням та підтримайте петицію щодо удостоєння
          званням Героя України (посмертно) :
          <div>
            <a
              className="petition-link"
              href="https://petition.president.gov.ua/petition/207464"
              target="blanc"
            >
              Олександр Валерійович ЖЕЛТОНОГ
            </a>
          </div>
          <div>
            <a
              className="petition-link"
              href="https://petition.president.gov.ua/petition/206680"
              target="blanc"
            >
              Павло Миколайович ПОСТОЛАКА
            </a>
          </div>
        </p>
        <p>
          Лише після цих дій ваша підтримка буде зарахованою, а петиція зможе
          набрати необхідну кількість голосів.
        </p>
        <p>Кожен ваш голос – це шана та вдячність Герою!</p>
      </div>
      <a className="petition-btn" href="/">
        <Button className="help-btn" buttonText="Повернутись назад" />
      </a>
    </section>
  );
};

export default Petition;
