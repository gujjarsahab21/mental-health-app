import React, { useContext, useState } from "react";
import "../styles/login.css";
import LoginImage from "../assets/login/signupill.png";
import Header from "../components/Header";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const  navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const response = await axios.post("http://localhost:8080/api/v1/users/signup", {fullname, username, email, password});
      console.log(response);
      if(response.status == 201) {
        // setUser(response.data.user);
        console.log("User Signup");
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
    <Header/>
      <div className="form-section">
        <img src={LoginImage} alt="" />
        <form className="register" onSubmit={handleSubmit}>
          <div className="welcome">
            <h1 className="titletext">Create an account</h1>
            <span>Let's get started.</span>
          </div>
          <div className="inputs">
            <p>Fullname</p>
            <input value={fullname} onChange={(e) => {setFullname(e.target.value)}}
              className="inputbox"
              placeholder="Enter your fullname"
              id="signupFullname"
            />
            <br />
            <p>Username</p>
            <input value={username} onChange={(e) => {setUsername(e.target.value)}}
              className="inputbox"
              placeholder="Enter your username"
              id="signupUsername"
            />
            <br />
            <span>
              Email
              <br />
            </span>
            <input value={email} onChange={ (e) => { setEmail(e.target.value) }}
              className="inputbox"
              placeholder="Enter your email"
              id="signupEmail"
            />
            <br />
            <span>
              Password
              <br />
            </span>
            <input value={password} onChange={(e) => { setPassword(e.target.value)}}
              type="password"
              className="inputbox"
              placeholder="••••••••"
              id="signupPassword"
            />
            <i className="fas fa-eye-slash" id="toggleSignupPassword"></i>
          </div>
          <div className="button">
            <input
              type="submit"
              className="signin"
              value="Sign up"
              id="signupButton"
            />
          </div>
          <div className="signupline">
            <span>Already have an account?</span>
            <Link to="/login" className="signinbutton">Login</Link>
          </div>
        </form>
      </div>
      <Footer/>
    </>
  );
}

export default Signup;
