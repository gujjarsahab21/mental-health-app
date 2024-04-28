import React, { useContext, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/login.css";
import LoginImage from "../assets/login/signupill.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../context/UserContext";


function Login() {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const {setUser} = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/api/v1/users/login", { username, password });
      console.log(response);
      if (response.status == 200) {
        setUser(response.data.user);
        console.log("User login");
        navigate("/");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <>
      <Header />
      <main className="form-section">
        <img src={LoginImage} alt="" />
        <form className="login"  onSubmit={handleSubmit}>
          <div className="welcome">
            <h1 className="titletext">Welcome Back User</h1>
            <span>Please enter your details.</span>
          </div>
          <div className="inputs">
            <span>
              Username
              <br />
            </span>
            <input value={username}  onChange={(e) => { setUsername(e.target.value)} }
              className="inputbox"
              placeholder="Enter your username"
              id="loginEmail"
            />
            <br />
            <span>
              Password
              <br />
            </span>
            <input
              value={password} onChange={(e) => { setPassword(e.target.value)} }
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
              type="submit"
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
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
