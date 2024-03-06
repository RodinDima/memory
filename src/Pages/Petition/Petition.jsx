import React from "react";

import "./style.css";
import Header from "../../Components/Header/Header";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";



const Petition = () => {
  return (
    <section className="petition__container">
      <Header className="custom-header" />
      <Breadcrumbs />
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
          званням Героя України (посмертно) :<div>-</div>
        </p>
        <p>
          Лише після цих дій ваша підтримка буде зарахованою, а петиція зможе
          набрати необхідну кількість голосів.
        </p>
        <p>Кожен ваш голос – це шана та вдячність Герою!</p>
      </div>
    </section>
  );
};

export default Petition;
