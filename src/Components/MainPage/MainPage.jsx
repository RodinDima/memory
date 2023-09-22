import React from "react";

import Logo from "../Logo/Logo";

import Button from "../Button/Button";

import Sokol from "./Images/sokol.jpg";

import "./style.css";

const MainPage = () => {
  return (
    <section className="main">
      <div className="main__container">
        <Logo />

        <div className="main__btns">
          <a href="#">
            <Button buttonText="Герої" />
          </a>
          <a href="#">
            <Button buttonText="Допомога родинам зниклих безвісті" />
          </a>
          <a href="#">
            <Button buttonText="Шляхами війни" />
          </a>
        </div>
        <form className="main__search">
          <input type="text" placeholder="Введіть ім'я для пошуку..." />
        </form>
        <Button buttonText="Запропонувати" />
        <div className="main__victim">
          <div className="main__victim-item">
            <a className="main__victim-link" href={`/person/id=1`}>
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href={`/person/2`}>
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
          <div className="main__victim-item">
            <a className="main__victim-link" href="#">
              <img src={Sokol} alt="victim" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
