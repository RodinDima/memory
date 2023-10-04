import React from "react";

import { useState } from "react";

import { storage } from "./firebase"

import { ref, uploadBytes } from "firebase/storage"

import { v4 } from "uuid";

const Fbase = () => {
    const [imageUpload, setImageUpload] = useState(null);
    const uploadImage = () => {
        if (imageUpload == null) return; 
        
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
        uploadBytes(imageRef, imageUpload).then(() => {alert("Загрука виконана")})
    
    };


    
    return (
        <div className="fbase">
            <input type="file" onChange={(event) => {setImageUpload(event.target.files[0])}} />
            <button onClick={uploadImage}>Загрузити зображення</button>
            

       </div>
    
    
       
    );
};

export default Fbase;