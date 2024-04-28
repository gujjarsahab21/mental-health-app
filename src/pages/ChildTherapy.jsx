import React from "react";

function ChildTherapy() {
  return (
    <>
      <header>
        <nav>
          <a href="../index.html">
            <img className="audio-logo" src="../logo.png" alt="Logo" />
          </a>
          <div className="nav-links" id="navLinks">
            <ul>
              <li>
                <a href="../index.html">HOME</a>
              </li>
              <li>
                <a href="#about" className="smooth-scroll">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#images" className="smooth-scroll">
                  IMAGES
                </a>
              </li>
              <li>
                <a href="#videos" className="smooth-scroll">
                  VIDEOS
                </a>
              </li>
            </ul>
          </div>
          <div className="hamburger" id="ham">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              height="1em"
              width="1em"
            >
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" />
            </svg>
          </div>
        </nav>
      </header>

      <div className="menu" id="menu">
        <ul className="menu-link">
          <li>
            <a href="../index.html">HOME</a>
          </li>
          <li>
            <a className="close" href="#about">
              ABOUT
            </a>
          </li>
          <li>
            <a className="close" href="#images">
              IMAGES
            </a>
          </li>
          <li>
            <a className="close" href="#videos">
              VIDEOS
            </a>
          </li>
        </ul>
      </div>

      <div className="center">
        <h1 id="title">
          Welcome to Our <br />
          <span className="heading-span">Child Therapy</span>
        </h1>
        <h3 id="subtitle">
          Learn more about child therapy. Watch their images
          <br /> and videos to gain some happiness and relief <br /> from your
          problems.
        </h3>
      </div>

      <section id="about" className="about">
        <h1 className="section-headings">ABOUT</h1>
        <div className="bfit">
          <img
            src="../images/about-child.jpg"
            width="700"
            height="600"
            alt="about-child"
          />
          <div className="btext">
            <div className="baby-text">
              <h3>
                A baby's smile is so powerful that it can make you forget all
                the troubles{" "}
              </h3>
              <h3>in the world.</h3>
              <h3>
                Their smiles are one of the cutest things in the world, and they
                can
              </h3>
              <h3>melt your heart in a second.</h3>
            </div>
          </div>
        </div>
      </section>

      <hr />

      <section id="images">
        <h1 className="section-headings">IMAGES</h1>
        <div className="main-scroll-div">
          <div>
            <button className="icon">
              <i className="fas fa-angle-double-left"></i>
            </button>
          </div>
          <div className="cover">
            <div className="scroll-images">
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-8.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-3.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-4.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-5.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-6.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-2.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-7.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-8.jpg"
                  alt="image"
                />
              </div>
              <div className="child">
                <img
                  className="child-img"
                  src="../images/slider-9.jpg"
                  alt="image"
                />
              </div>
            </div>
          </div>
          <div>
            <button className="icon">
              <i className="fas fa-angle-double-right"></i>
            </button>
          </div>
        </div>
        <br />
      </section>

      <hr />

      <section id="videos">
        <h1 className="section-headings">VIDEOS</h1>
        <div className="collection">
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/_NTfTd4HCRo?si=qeEoiQqz7HKqiZ1T"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/zs21cKJs87E"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1YBheuHma8I"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/L49VXZwfup8"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/gB12TV38QBo"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <div className="video">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/cmCtTFRLaks?si=E0cL60acdnPoVnwi"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChildTherapy;
