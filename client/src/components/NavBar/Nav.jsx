import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./navbar.css";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container position-relative">
        <div className="logo-container">
          <Link to="/">
            <img
              className="logo"
              src="https://res.cloudinary.com/dl44q0v9r/image/upload/v1676888884/kookkie/6a430de4a5519e43a2bc0ad3e56ed0de_yj7uij.png"
              alt="logo"
            />
          </Link>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* <ul className={isLogged ? "navbar-nav logged" : "navbar-nav"}> */}
          <ul>
            <li className="nav-item">
              <NavLink to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/call">Kookkie Call</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/faq">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
