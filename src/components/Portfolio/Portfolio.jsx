import React from "react";
import styles from "./Portfolio.module.css";
import img1 from "../../assets/poert1.png";
import img2 from "../../assets/port2.png";
import img3 from "../../assets/port3.png";

export default function Portfolio() {
  return (
    <>
      <div className="bg-body-tertiary d-flex flex-column justify-content-center align-items-center min-vh-100">
        <h2 className="text-dark mt-5 fw-bold text-uppercase"> portfolio component </h2>

        <div className="d-flex mt-2">
          <div className={`${styles.left} bg-dark`}></div>
          <i class="fa-solid fa-star text-dark"></i>
          <div className={`${styles.right} bg-dark`}></div>
        </div>

        <div className="container">
          <div className="row mt-2 g-3 min-vh-100 py-3">
            <div className="col-lg-4 col-md-6">
              <img src={img1} className="w-100 rounded-2" alt="" />
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={img2} className="w-100 rounded-2" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 ">
              <img src={img3} className="w-100 rounded-2" alt="" />
            </div>
            <div className="col-lg-4 col-md-6 ">
              <img src={img1} className="w-100 rounded-2" alt="" />
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={img2} className="w-100 rounded-2" alt="" />
            </div>
            <div className="col-lg-4 col-md-6">
              <img src={img3} className="w-100 rounded-2" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
