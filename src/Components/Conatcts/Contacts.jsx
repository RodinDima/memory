import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import "./style.css";

const Contact = () => {
  const form = useRef();
  const [errors, setErrors] = useState({});

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
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const clearErrors = () => {
    // Функція для видалення всіх помилок зі стану errors
    setErrors({});
  };

  const handleInputFocus = () => {
    // Обробник фокусу на полі вводу, видаляє всі помилки при фокусуванні
    clearErrors();
  };

  const formIsValid = () => {
    const newErrors = {};

    if (!form.current.user_name.value) {
      newErrors.user_name = "Поле 'Ваше ім'я' обов'язкове для заповнення";
    }

    if (!form.current.user_email.value) {
      newErrors.user_email = "Поле 'Ваш Email' обов'язкове для заповнення";
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
      </form>
    </div>
  );
};

export default Contact;
