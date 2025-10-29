import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div
        className={`d-flex flex-column justify-content-center align-items-center vh-100 py-5 ${styles.bg_custom}`}
      >
        <h1 className="text-white text-uppercase fs-1 fw-semibold">
          about component
        </h1>
        <div className="d-flex mt-2 ">
          <div className={`${styles.left}`}></div>
          <i class="fa-solid fa-star text-white"></i>
          <div className={`${styles.right}`}></div>
        </div>

        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6 fw-medium text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
            <div className="col-md-6 fw-medium text-white">
              Freelancer is a free bootstrap theme created by Route. The
              download includes the complete source files including HTML, CSS,
              and JavaScript as well as optional SASS stylesheets for easy
              customization.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
