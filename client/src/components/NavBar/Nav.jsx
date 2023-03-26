import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { FiHome, FiLogOut } from "react-icons/fi";
import { BsHeart, BsCircle } from "react-icons/bs";
import { TbMessageCircle2 } from "react-icons/tb";

import "./nav.css";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo-container">
          <Link to="/" className="navbar-logo">
            <img
              className="logo"
              src="https://res.cloudinary.com/dl44q0v9r/image/upload/v1676888884/kookkie/6a430de4a5519e43a2bc0ad3e56ed0de_yj7uij.png"
              alt="logo"
            />
          </Link>
        </div>
        {isMobile ? (
          <>
            <div className="menu-icon" onClick={toggleMenu}>
              {showMenu ? <FaTimes /> : <FaBars />}
            </div>
            {showMenu && (
              <div className="mobile-menu">
                <ul className="nav-menu-mobile">
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                      <FiHome />
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/kookie-call"
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      <BsHeart /> Kookkie Call
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/about" className="nav-link" onClick={closeMenu}>
                      <BsCircle /> About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      to="/contact"
                      className="nav-link"
                      onClick={closeMenu}
                    >
                      <TbMessageCircle2 /> Contact Us
                    </Link>
                  </li>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <br></br>
                  <li className="nav-item">
                    <Link to="/" className="nav-link" onClick={closeMenu}>
                      <FiLogOut /> Log out
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </>
        ) : (
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="home" className="nav-link" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="cookie-call"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                Kookkie Call
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="about"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact-us"
                className="nav-link"
                smooth={true}
                duration={500}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
