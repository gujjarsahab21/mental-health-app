import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../context/UserContext";

function Header() {
  const { user } = useContext(UserContext);

  return (
    <nav className="nav" id="nav">
      <div>
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-links" id="navLinks">
        <ul className="links" id="navmenu">
          <li>
            <a href="#">HOME</a>
          </li>
          <li>
            <a href="#services">SERVICES </a>
          </li>
          <li>
            <a href="#">CONTACT US </a>
          </li>
        </ul>
      </div>
      {!user ? (
        <button className="login-button">
          <Link to="/login">Login</Link>
        </button>
      ) : (
        <button className="login-button">
          <Link to="/logout">Logout</Link>
        </button>
      )}

      <div className="hamburger" id="ham">
        <i className="cancel fa-solid fa-xmark"></i>

        <svg
          className="burger"
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 1024 1024"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
        </svg>
      </div>
    </nav>
  );
}

export default Header;
