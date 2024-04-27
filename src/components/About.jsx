import React from "react";

function About() {
  return (
    <section id="about" className="about">
      <h1>About Us</h1>
      <div className="max-width">
        <div className="photo">
          <img src="./images/about.jpg" alt="" height="300px" width="330px" />
        </div>
        <div className="about-content">
          <p data-aos="fade-left" className="text-1">
            {" "}
            We are a team of open source contributors who have created this
            website Sukoon with the aim to provide a{" "}
            <span>one step solution</span> to get relief from stress.{" "}
          </p>
          <p data-aos="fade-left" className="text-3">
            We hope that everyone can live a <span>stress free life </span>with
            the help of<span> sukoon.</span>
          </p>
        </div>
      </div>
      <h3>
        <span>MEET OUR MEMBERS</span>
      </h3>

      <div className="box">
        <div className="card">
          <img src="./images/soumyadeep.jpg" alt="soumyadeep" loading="lazy" />
          <h5>Soumyadeep Dhali</h5>
          <div className="pra">
            <p>Member</p>
            <a href="https://soumyadeep.bio.link">
              <button>Let's Connect</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img src="./images/susmita.jpg" alt="" loading="lazy" />
          <h5>Susmita Dey</h5>
          <div className="pra">
            <p>Head of The Team</p>
            <a href="https://bio.link/susmitadey">
              <button>Let's Connect</button>
            </a>
          </div>
        </div>
        <div className="card">
          <img src="./images/chaitri.jpg" alt="chaitri" loading="lazy" />
          <h5>Chaitri Saha Chowdhury</h5>
          <div className="pra">
            <p className="p">Member</p>
            <a href="https://bio.link/chaitri">
              <button className="he">Let's Connect</button>
            </a>
          </div>
        </div>

        <div className="card">
          <img src="./images/sasanka.jpg" alt="sasanka" loading="lazy" />
          <h5>Sasanka Kundu</h5>
          <div className="pra">
            <p>Member</p>
            <a href="https://bio.link/sasankakundu">
              <button>Let's Connect</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
