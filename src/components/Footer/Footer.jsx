import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <>
      <div className={` ${styles.bg_custom} py-5`}>
        <div className="container py-5">
          <div className="row">
            <div className="col-md-4">
              <div className="inner text-center text-white">
                <h3  className="text-uppercase"> location </h3>
                <p> 2215 John Daniel Drive</p>
                <p> Clark, MO 65243 </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner inner text-center text-white">
                <h3  className="text-uppercase"> around the web </h3>
              </div>
            </div>
            <div className="col-md-4">
              <div className="inner inner text-center text-white">
                <h3 className="text-uppercase" > about freelancer </h3>
                <p> Freelance is a free to use, licensed Bootstrap theme created by Route </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white bg-dark py-3 text-center">
          Copyright © Your Website 2021
        </div>
    </>
  );
}
