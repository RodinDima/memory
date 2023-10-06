// У компоненті Fbase
import React, { useState } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const Fbase = ({ formData }) => {
  const [imageUpload, setImageUpload] = useState(null);

  const uploadImage = async () => {
    if (imageUpload === null) return;

    try {
      
      const dataToSend = {
        ...formData,
        imageName: imageUpload.name,
      };

      const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
      await uploadBytes(imageRef, imageUpload);

     
      console.log(dataToSend);

      window.alert("Зображення та дані відправлено успішно!");
    } catch (error) {
      console.error("Помилка під час відправки даних", error);
    }
  };

  return (
    <div className="fbase">
     
      <input
        type="file"
        onChange={(event) => setImageUpload(event.target.files[0])}
      />

     
      <button onClick={uploadImage}>Загрузити зображення</button>
    </div>
  );
};

export default Fbase;
