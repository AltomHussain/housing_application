import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
export default function Header({ login, signup, back, home }) {
  const handleTheme = () => {
    const moon = document.querySelector(".fa-moon");
    moon.addEventListener("click", () => {
      document.body.classList.toggle("dark-theme");
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/">
          {back}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                {home}
              </a>
            </li>
          </ul>
          <div className="d-flex me-4">
            <Link to="/" className="text-white">
              <p className="me-5">{login}</p>
            </Link>
            <Link to="/signup" className="text-white">
              <p className="me-5">{signup}</p>
            </Link>
            <button className="btn btn-warning" onClick={() => handleTheme()}>
              <i className="fas fa-moon">double click</i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
