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
                <a href="https://github.com/Susmita-Dey/Sukoon/blob/main/CODE_OF_CONDUCT.md">
                  Code Of Conduct
                </a>
              </li>
              <li>
                <a href="https://github.com/Susmita-Dey/Sukoon">Contribute</a>
              </li>
              <li>
                <a href="https://www.buymeacoffee.com/susmitadey">Donate</a>
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
                <a href="https://sukoon-stress-free.netlify.app/html/readingtherapy">
                  Reading Therapy
                </a>
              </li>
              <li>
                <a href="https://sukoon-stress-free.netlify.app/html/yogatherapy.html">
                  Yoga Therapy
                </a>
              </li>
              <li>
                <a href="https://sukoon-stress-free.netlify.app/html/laughTherapy.html">
                  Laughing Therapy
                </a>
              </li>
              <li>
                <a href="https://www.practo.com/counselling-psychology">
                  Consult a Doctor
                </a>
              </li>
              <li>
                <a href="https://sukoon-stress-free.netlify.app/html/childTherapy">
                  Child Therapy
                </a>
              </li>
              <li>
                <a href="https://sukoon-stress-free.netlify.app/html/specialTherapy">
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
