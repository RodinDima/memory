import React, { useState } from "react";
import { Form, Field } from "react-final-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import uk from "date-fns/locale/uk";

import "firebase/database";

import "firebase/firestore";
import axios from "axios";
import { Dialog } from "@headlessui/react";
import "./style.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FinalForm = () => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);



  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleSubmit = async (values) => {
  const response = await axios.post(
      "https://users-1c07d-default-rtdb.firebaseio.com/users.json",
      values
    );

    console.log("Дані успішно відправлено!", values);

    setIsFormSubmit(true);
  };

  return (
    <>
      <div className="final-form__container">
        <h1>Пам'ятаємо</h1>
        <Form
          initialValues={{ employed: false }}
          onSubmit={handleSubmit}
          render={({ handleSubmit, form, submitting, pristine, values }) => (
            <form onSubmit={handleSubmit}>
              <label>Ім'я людини</label>
              <div className="form__name">
                <Field
                  name="firstName"
                  component="input"
                  type="text"
                  placeholder="Введіть прізвище"
                />

                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Введіть ім'я"
                />

                <Field
                  name="surname"
                  component="input"
                  type="text"
                  placeholder="Введіть ім'я по батькові"
                />
              </div>
              <label>Роки життя</label>
              <div className="form__date">
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  showIcon
                  scrollableYearDropdown
                  yearDropdownItemNumber={40}
                  placeholderText="Виберіть дату"
                  isClearable
                  locale={uk}
                />
                <DatePicker
                  selected={selectedDate2}
                  onChange={(date) => setSelectedDate2(date)}
                  dateFormat="dd/MM/yyyy"
                  showIcon
                  scrollableYearDropdown
                  yearDropdownItemNumber={40}
                  placeholderText="Виберіть дату"
                  isClearable
                  showPopperArrow={true}
                  locale={uk}
                />

                <div className="check">
                  <Field name="employed" component="input" type="checkbox" />
                  <label className="form__check">Дата смерті не відома</label>
                </div>
              </div>

              <div>
                <label>Біографія</label>
                <Field
                  className="form__text-area"
                  name="notes"
                  component="textarea"
                  placeholder="Біографія загиблого"
                />
                <label>Завантажити зображення</label>
                <Field
                  name="image"
                  component="input"
                  type="file"
                  accept="image/*"
                />
              </div>
              <div className="buttons">
                <button
                  className="buttons-form"
                  type="submit"
                  disabled={submitting || pristine}
                >
                  Відправити
                </button>
                <button
                  className="buttons-form"
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Очистити
                </button>
              </div>
            </form>
          )}
        />
      </div>

      {/* Модальне вікно, яке відображається після відправлення форми */}
      <Dialog open={isFormSubmit} onClose={() => setIsFormSubmit(false)}>
        <div className="bg_modal">
          <Dialog.Panel className="modal">
            <Dialog.Title className="modal__title">
              Повідомлення відправлено
            </Dialog.Title>
            <button
              className="modal__close"
              onClick={() => setIsFormSubmit(false)}
            >
              <span></span>
              <span></span>
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default FinalForm;
