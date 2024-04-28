import React from "react";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="col">
          <img src={logo} alt="logo" className="footlogo" />
          <div className="footercontent">
            <p className="footerpara">go stress free</p>
          </div>
        </div>

        <div className="footer-side-col">
          <div className="col">
            <h3>ADDRESS</h3>
            <p>Indore, India</p>
            <p className="email-id">
              <a href="mailto:sukoon665@gmail.com">healthcare@gmail.com</a>
            </p>
          </div>
          <div className="col">
            <h3>HOME</h3>
            <ul>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#">
                  Code Of Conduct
                </a>
              </li>
              <li>
                <a href="#">Contribute</a>
              </li>
              <li>
                <a href="#">Donate</a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>
              SERVICES
              <div className="underline">
                <span></span>
              </div>
            </h3>
            <ul>
              <li>
                <a href="">
                  Reading Therapy
                </a>
              </li>
              <li>
                <a href="">
                  Yoga Therapy
                </a>
              </li>
              <li>
                <a href="">
                  Laughing Therapy
                </a>
              </li>
              <li>
                <a href="">
                  Consult a Doctor
                </a>
              </li>
              <li>
                <a href="">
                  Child Therapy
                </a>
              </li>
              <li>
                <a href="">
                  Special Therapy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
