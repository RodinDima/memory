import React from "react";

import DownloadLink from "../../Components/DownloadLink/DownloadLink";
import Header from "../../Components/Header/Header";
import Breadcrumbs from "../../Components/Breadcrumbs/Breadcrumbs";

import "./style.css";

const Social = () => {
  return (
    <section className="social__container">
      <Header className="custom-header" />
      <Breadcrumbs />
      <h3 className="social__title">
        Про допомогу військовим та їхнім родинам:
      </h3>
      <div className="social__text">
        <p>
          Органи місцевого самоврядування нашої громади, виконавча влада на
          місцевому рівні надає широку соціальну підтримку військовослужбовцям
          та їхнім родинам.
        </p>
        <p>
          У тому числі це стосується й організаційної та матеріальної допомоги
          (за рахунок бюджету громади) сім’ям наших загиблих на війні земляків.
        </p>
        <p>
          20.09.2023 прийнято рішення виконавчого комітету Вільногірської
          міської ради Дніпропетровської області №345/0/7-23 «Про затвердження
          Положення про порядок надання соціальної підтримки окремим категоріям
          громадян» у новій редакції.
        </p>
        <p>
          В документі йдеться в тому числі про допомогу військовим та їхнім
          родинам: <DownloadLink />
        </p>

        <p>Підтримуємо Збройні Сили України та віримо у перемогу!</p>
      </div>
    </section>
  );
};

export default Social;
