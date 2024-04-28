import React from "react";
import "../styles/login.css";
import LoginImage from "../assets/login/signupill.png";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Signup() {
  return (
    <>
    <Header/>
      <div className="form-section">
        <img src={LoginImage} alt="" />
        <div className="register">
          <div className="welcome">
            <h1 className="titletext">Create an account</h1>
            <span>Let's get started.</span>
          </div>
          <div className="inputs">
            <p>Username</p>
            <input
              className="inputbox"
              placeholder="Enter your username"
              id="signupUsername"
            />
            <br />
            <span>
              Email
              <br />
            </span>
            <input
              className="inputbox"
              placeholder="Enter your email"
              id="signupEmail"
            />
            <br />
            <span>
              Password
              <br />
            </span>
            <input
              type="password"
              className="inputbox"
              placeholder="••••••••"
              id="signupPassword"
            />
            <i className="fas fa-eye-slash" id="toggleSignupPassword"></i>
          </div>
          <div className="button">
            <input
              type="button"
              className="signin"
              value="Sign up"
              id="signupButton"
            />
          </div>
          <div className="signupline">
            <span>Already have an account?</span>
            <Link to="/login" className="signinbutton">Login</Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Signup;
