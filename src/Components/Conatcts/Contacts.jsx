import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { Dialog } from "@headlessui/react";

import "./style.css";



const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const regexUserName = /^[a-zA-Zа-яА-Я\s]+$/
  
  const sendEmail = (e) => {
    

    e.preventDefault();

    if (!formIsValid()) {
      return;
    }

    emailjs
      .sendForm(
        "service_r66920a",
        "template_ljshmvr",
        form.current,
        "x7MOPCx5mvBkhmsH8"
      )
      .then((result) => {
        setIsFormSubmitted(true);
      });
  };

  const clearErrors = () => {
    setErrors({});
  };

  const handleInputFocus = () => {
    clearErrors();
  };

  const formIsValid = () => {
    const newErrors = {};



    const emailPattern =
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(com|org|net|edu|gov|mil|info|biz|co)$/i;

    if (!form.current.user_name.value) {
      newErrors.user_name = "Поле 'Ваше ім'я' обов'язкове для заповнення";
    } else if (!regexUserName.test(form.current.user_name.value)) {
      newErrors.user_name =
        "Введіть коректне ім'я без цифр і спеціальних символів";
    }

    if (!form.current.user_email.value) {
      newErrors.user_email = "Поле 'Ваш Email' обов'язкове для заповнення";
    } else if (!emailPattern.test(form.current.user_email.value)) {
      newErrors.user_email = "Введіть коректну електронну адресу";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  return (
    <div className="form__inner">
      <form className="form__footer" ref={form} onSubmit={sendEmail}>
        <label>Ваше ім'я:</label>
        <input
          className="form-input"
          type="text"
          name="user_name"
          onFocus={handleInputFocus}
        />
        {errors.user_name && <div className="error">{errors.user_name}</div>}

        <label>Ваш Email:</label>
        <input
          className="form-input"
          type="email"
          name="user_email"
          onFocus={handleInputFocus}
        />
        {errors.user_email && <div className="error">{errors.user_email}</div>}

        <label>Опишіть проблему</label>
        <textarea name="message" onFocus={handleInputFocus} />
        {errors.message && <div className="error">{errors.message}</div>}

        <button className="form__btn" type="submit" value="Send">
          відправити форму
        </button>
        <Dialog
          open={isFormSubmitted}
          onClose={() => setIsFormSubmitted(false)}
        >
          <div className="bg_modal">
            <Dialog.Panel className="modal">
              <Dialog.Title className="modal__title">
                Повідомлення відправлено 
              </Dialog.Title>
              <button
                className="modal__close"
                onClick={() => setIsFormSubmitted(false)}
              >
                <span></span>
                <span></span>
              </button>
            </Dialog.Panel>
          </div>
        </Dialog>
      </form>
    </div>
  );
};

export default Contact;
