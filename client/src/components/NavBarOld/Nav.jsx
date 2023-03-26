import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { FiHome } from "react-icons/fi";
import { BsHeart, BsCircle } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";

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
          <ul className="nav-list">
            <li className="nav-item">
              <NavLink to="/">
                <FiHome />
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink to="/call">
                <BsHeart /> Kookkie Call
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about">
                <BsCircle /> About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/contact">
                <TbMessageCircle2 /> Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
