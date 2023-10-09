import React, { useEffect, useState } from "react";
import "./style.css";

const TypingAnimation = () => {
  const [text, setText] = useState("");
  const sentence = "Пам'ятаємо...";
  const typingSpeed = 150; // швидкість печатки

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      if (currentIndex <= sentence.length) {
        setText(sentence.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="typewriter-text">
      {text}
      <span className="cursor-blink">|</span>
    </div>
  );
};

export default TypingAnimation;
