import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

export default function Navbar() {
    console.log(styles)
  return (
    <nav className={`navbar navbar-expand-lg py-4 ${styles.bg_custom}`}>
      <div className="container">
        <NavLink
          className="navbar-brand text-uppercase fs-2 fw-bold text-white"
          to=""
        >
          start famework
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav bg-custom ms-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <NavLink
                className={`nav-link active text-white mx-3 fw-medium fs-4 ${styles.focus}`}
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link text-white mx-2 fw-medium fs-4 ${styles.focus}`}
                to="/portfolio"
              >
                portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className={`nav-link text-white mx-2 fw-medium fs-4  ${styles.focus}`}
                to="/contact"
              >
                contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
