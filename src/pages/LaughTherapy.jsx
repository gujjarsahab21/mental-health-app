import React from "react";
import "../styles/laugh.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
function LaughTherapy() {
  return (
    <div>
      {/* Your CSS styles */}
      <style>
        {`
          /* Paste your CSS styles here */
        `}
      </style>

      <Header/>

      <div className="menu" id="menu">
        <ul className="menu-link">
          <li>
            <a href="../index.html">HOME</a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#memes">MEMES</a>
          </li>
          <li>
            <a href="#standups">STANDUPS</a>
          </li>
        </ul>
      </div>

      <header>
        <div className="filter"></div>
        <div className="center">
          <h1 data-aos="fade-down" id="title">
            Welcome to Our <br />
            <span className="heading-span">Laughing Therapy</span>
          </h1>
          <h3 data-aos="fade-up-right" data-aos-duration="1500" id="subtitle">
            Read some memes and <br />
            enjoy watching standup to gain some happiness and relief <br /> from
            your problems.
          </h3>
        </div>
      </header>


      <hr />

      <section id="memes">
        <h1 data-aos="zoom-out" className="section-headings">
          MEMES
        </h1>
        <div data-aos="flip-up" className="slideshow-container">
          <div className="mySlides fade">
            <img
              src="https://github.com/Susmita-Dey/Sukoon/blob/main/images/meme1.jpg?raw=true"
              style={{ width: "50%", marginLeft: "25%" }}
            />
          </div>

          <div data-aos="flip-up" className="mySlides fade">
            <img
              src="https://sukoon-stress-free.netlify.app/images/meme2.jpg"
              style={{ width: "50%", marginLeft: "25%" }}
            />
          </div>

          <div data-aos="flip-up" className="mySlides fade">
            <img
              src="https://sukoon-stress-free.netlify.app/images/meme5.jpg"
              style={{ width: "50%", marginLeft: "25%" }}
            />
          </div>

          {/* Add more slides here */}
        </div>
        <br />
      </section>

      <hr />

      <section id="standups">
        <h1 data-aos="zoom-in-up" className="section-headings">
          STANDUPS
        </h1>
        <div className="collection">
          <div data-aos="flip-down" className="video">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/Tqsz6fjvhZM"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div data-aos="flip-down" className="video">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/Y2Oj9gllHno?start=16"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div data-aos="flip-down" className="video">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/XDlyS4N__3o?start=22"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div data-aos="flip-down" className="video">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/z12bz7adLKI"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div data-aos="flip-down" className="video">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/pjSxOnCkHIA?si=0KNI6JYCbbjujeFY"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div data-aos="flip-down" className="video">
            <iframe
              width="100%"
              height="330"
              src="https://www.youtube.com/embed/J38ZBIvLank"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default LaughTherapy;
