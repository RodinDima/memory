import React, { useState } from "react";
import { Form, Field } from "react-final-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import uk from "date-fns/locale/uk";
import firebase from "firebase/compat/app"; // Импортируйте Firebase
import "firebase/compat/storage"; // Импортируйте Firebase Storage
import "firebase/compat/database"; // Импортируйте Firebase Realtime Database
import axios from "axios";
import { Dialog } from "@headlessui/react";
import "./style.css";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const FinalForm = () => {
  const [isFormSubmit, setIsFormSubmit] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedDate2, setSelectedDate2] = useState(null);

  const handleSubmit = async (values) => {
    // Инициализация Firebase
    const firebaseConfig = {
      apiKey: "AIzaSyDjZVhUNwRL-CNUqIO2g0jy0mioIuCRnIE",
      authDomain: "memory-bd8d1.firebaseapp.com",
      projectId: "memory-bd8d1",
      storageBucket: "memory-bd8d1.appspot.com",
      messagingSenderId: "356858396307",
      appId: "1:356858396307:web:5f49916991f2ebb0d21766",
      measurementId: "G-0PYJBTDWSS", // опционально, если вы используете Analytics
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    // Получите ссылку на Firebase Storage
    const storage = firebase.storage();
    const storageRef = storage.ref();

    const user = {
      firstName: values.firstName || "", // Значение из инпута или пустая строка
      lastName: values.lastName || "", // Значение из инпута или пустая строка
      surname: values.surname || "", // Значение из инпута или пустая строка
      employed: values.employed || false, // Значение из чекбокса или false, если не выбран
      notes: values.notes || "", // Значение из текстового поля или пустая строка
    };

    console.log(user);

    // Получите файл из элемента input
    const fileInput = document.getElementById("fileInput");
    const file = fileInput.files[0];

    // Если файл выбран, загрузите его в Firebase Storage и добавьте ссылку в JSON-объект
    if (file) {
      const imageName = `${values.firstName}_${values.lastName}_${values.surname}`;
      const imageRef = storageRef.child(`gloryk/${imageName}`);

      // Загрузите изображение в Firebase Storage
      const uploadTask = imageRef.put(file);

      // Обработка успешной загрузки изображения
      uploadTask.then((snapshot) => {
        console.log("Изображение успешно загружено!");

        // Получите ссылку на загруженное изображение
        imageRef.getDownloadURL().then((imageUrl) => {
          user.image = imageUrl; // Добавьте ссылку на изображение в JSON-объект

          // Отправьте JSON-объект с данными пользователя в Firebase Realtime Database
          axios
            .post(
              "https://users-1c07d-default-rtdb.firebaseio.com/users.json",
              user
            )
            .then((response) => {
              console.log("Данные успешно отправлены!", user);
              setIsFormSubmit(true);
            });
        });
      });
    } else {
      // Если файл не выбран, отправьте только JSON-объект с данными пользователя в Firebase Realtime Database
      axios
        .post(
          "https://users-1c07d-default-rtdb.firebaseio.com/users.json",
          user
        )
        .then((response) => {
          console.log("Данные успешно отправлены!", user);
          setIsFormSubmit(true);
        });
    }
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
                  placeholder="Введіть ім'я"
                />

                <Field
                  name="lastName"
                  component="input"
                  type="text"
                  placeholder="Введіть прізвище"
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
                  id="fileInput"
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
