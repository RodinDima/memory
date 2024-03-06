import React from "react";

import { GoArrowLeft } from "react-icons/go";

import styles from "./style.module.css";
import { Link } from "react-router-dom";

const Breadcrumbs = () => {
  return (
    <>
      <div className={styles.breadcrumbs}>
        <Link className={styles.link} to="/">
          <GoArrowLeft /> Повернутись
        </Link>
      </div>
    </>
  );
};

export default Breadcrumbs;
