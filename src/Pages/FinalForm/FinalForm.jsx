import React from "react";

import { Form, Field } from "react-final-form";

import Fbase from "../Fbase/Fbase";

import "./style.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
 
};

const FinalForm = () => (
  <>
    <div className="final-form__container">
      <h1>Пам'ятаємо</h1>

      <Form
        onSubmit={onSubmit}
        initialValues={{ stooge: "larry", employed: false }}
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
              <Field
                name="years"
                component="input"
                type="text"
                placeholder="Роки життя"
              />
              <Field
                name="years2"
                component="input"
                type="text"
                placeholder="Роки життя"
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
              <Fbase />
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
  </>
);

export default FinalForm;
