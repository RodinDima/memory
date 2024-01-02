import React from "react";
import { FaTwitter } from "react-icons/fa";
import cn from "classnames";
import styles from "./style.module.css";

const TwitterBtn = (props) => {
  const { className } = props;
  const postUrl = "https://vilnohirsk-memory.com/";
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
    postUrl
  )}&text=${encodeURIComponent("Check out this post!")}`;

  const handleShareClick = () => {
    window.open(twitterShareUrl, "twitter_share", "width=600,height=400");
  };

  return (
    <button className={cn(styles.btn, className)} onClick={handleShareClick}>
      <FaTwitter />
    </button>
  );
};

export default TwitterBtn;
