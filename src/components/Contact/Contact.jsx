import React from "react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <>
      <div className="bg-body-tertiary d-flex flex-column align-items-center vh-100">
        <h2 className="text-dark text-uppercase fw-bold mt-3">
          contact section
        </h2>
        <div className="d-flex mt-2">
          <div className={`${styles.left} bg-dark`}></div>
          <i class="fa-solid fa-star text-dark"></i>
          <div className={`${styles.right} bg-dark`}></div>
        </div>

        <div className="my-4 w-50">
          <input
            type="text"
            className={`form-control ${styles.form_control} border-0 border-bottom`}
            placeholder="UserName"
          />
        </div>
        <div className="my-4 w-50">
          <input
            type="text"
            className={`form-control ${styles.form_control} border-0 border-bottom`}
            placeholder="Age"
          />
        </div>
        <div className="my-4 w-50">
          <input
            type="text"
            className={`form-control ${styles.form_control} border-0 border-bottom`}
            placeholder="Email"
          />
        </div>
        <div className="my-4 w-50">
          <input
            type="text"
            className={`form-control ${styles.form_control} border-0 border-bottom`}
            placeholder="password"
          />
          <button className= {`btn text-white mt-5 px-4 ${styles.bg_custom}`}> submit </button>
        </div>
      </div>
    </>
  );
}
