import React from 'react';

function LaughTherapy() {
  return (
    <div>
      <div style={{ backgroundColor: 'white', height: '25vh', width: '100%', position: 'relative', top: '-70px' }}></div>

      <div id="back-top-div" className="back-top-wrap">
        <i className="fas fa-arrow-up"></i>
      </div>

      <nav>
        <a href="../index.html"><img className="audio-logo" src="../logo.png" alt="Logo" /></a>

        <div className="nav-links" id="navLinks">
          <ul>
            <li><a href="../index.html">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#memes">MEMES </a></li>
            <li><a href="#standups">STANDUPS </a></li>
          </ul>
        </div>

        <div className="hamburger" id="ham">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path></svg>
        </div>
      </nav>

      <div className="menu" id="menu">
        <ul className="menu-link">
          <li><a href="../index.html">HOME</a></li>
          <li><a  href="#about">ABOUT</a></li>
          <li><a  href="#memes">MEMES </a></li>
          <li><a  href="#standups">STANDUPS </a></li>
        </ul>
      </div>

      <header>
        <div className="filter"></div>
        <div className="center">
          <h1 data-aos="fade-down" id="title">Welcome to Our <br /><span className="heading-span">Laughing Therapy</span></h1>
          <h3 data-aos="fade-up-right" data-aos-duration="1500" id="subtitle">Read some memes and <br />enjoy watching standup to gain some happiness and relief <br /> from your problems.</h3>
        </div>
      </header>

      <section id="about">
        <h1 data-aos="flip-right" className="section-headings">ABOUT</h1>
        <div className="about-container">
          <div data-aos="fade-up-right" data-aos-duration="5000" className="image">
            <img src="../images/laugh.jpg" alt="" />
          </div>
          <div className="about-content">
            <h4 data-aos="fade-up-left" className="one"> Laughter Yoga includes four things:</h4>
            <ol className="about-list">
              <li data-aos="fade-left">Clapping in rhythm to ‘ho-ho-ha-ha-ha’.</li>
              <li data-aos="fade-left">Breathing and stretching.</li>
              <li data-aos="fade-left">Child-like play.</li>
              <li data-aos="fade-left">Laughter exercises.</li>
            </ol>
            <a href="https://www.healthline.com/nutrition/laughing-yoga" target="_blank">Know More</a>
          </div>
        </div>
      </section>

      <hr />

      <section id="memes">
        <h1 data-aos="zoom-out" className="section-headings">MEMES</h1>
        <div data-aos="flip-up" className="slideshow-container">
          {/* Slides go here */}
        </div>
        <br />
      </section>

      <hr />

      <section id="standups">
        <h1 data-aos="zoom-in-up" className="section-headings">STANDUPS</h1>
        <div className="collection">
          {/* Videos go here */}
        </div>
      </section>
    </div>
  );
}

export default LaughTherapy;
