import React from "react";
import cn from "classnames";
import styles from "./style.module.css";

const ButtonFb = (props) => {
  const { className, buttonText } = props;
  const postUrl = "https://vilnohirsk-memory.netlify.app/";
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    postUrl
  )}`;

  const handleShareClick = () => {
    window.open(facebookShareUrl, "facebook_share", "width=600,height=400");
  };

  return (
    <button className={cn(styles.btn, className)} onClick={handleShareClick}>
      {buttonText}
    </button>
  );
};

export default ButtonFb;
