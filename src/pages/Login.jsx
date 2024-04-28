import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import LoginImage from "../assets/login/signupill.png";
import { Link } from "react-router-dom";

function Login() {

  const [error, setError] = useState("");
  return (
    <>
      <Header />
      <main className="form-section">
        <img src={LoginImage} alt="" />
        <div className="login">
          <div className="welcome">
            <h1 className="titletext">Welcome Back User</h1>
            <span>Please enter your details.</span>
          </div>
          <div className="inputs">
            <span>
              Email
              <br />
            </span>
            <input
              className="inputbox"
              placeholder="Enter your email"
              id="loginEmail"
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
              id="loginPassword"
            />
            <i className="fas fa-eye-slash" id="toggleLoginPassword"></i>
          </div>
          <div className="forgotpass">
            <span>Forgot Password</span>
          </div>
          <div className="button">
            <input
              type="button"
              className="signin"
              value="Sign in"
              id="loginButton"
            />
          </div>
          <div className="signupline">
            <span>Don't have an account?</span>
            <Link to="/signup" className="signupbutton">Sign up</Link>
          </div>
          <div className="alert" id="emptyFieldsAlert">{error}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Login;
