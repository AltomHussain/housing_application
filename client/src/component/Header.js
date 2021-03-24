import React from "react";
import { Link } from "react-router-dom";

export default function Header({ login, signup, back, home }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
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
              <Link to="/"> <p className="me-5">{login}</p></Link>
              <Link to="/signup"> <p className="me-5">{signup}</p></Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
