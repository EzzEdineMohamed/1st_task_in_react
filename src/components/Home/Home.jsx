import React from "react";
import avatar from "../../assets/avataaars.svg";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <>
      <div
        className={`d-flex flex-column justify-content-center align-items-center vh-75 py-5 ${styles.bg_custom}`}
      >
        <div className={`${styles.reduce_width_of_this}`}>
          <img src={avatar} alt="" />
        </div>
        <h2 className="text-uppercase text-white mt-2 fs-2 fw-bold">
          start framework
        </h2>
        <div className="d-flex mt-2 ">
          <div className={`${styles.left}`}></div>
          <i class="fa-solid fa-star text-white"></i>
          <div className={`${styles.right}`}></div>
        </div>
        <div className="py-4 mt-1 text-white">
          Graphic Artist - Web Designer - Illustrator
        </div>
      </div>
    </>
  );
}
