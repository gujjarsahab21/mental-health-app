import React from "react";
import Header from "../components/Header";
import "../styles/child.css"

function ChildTherapy() {
  return (
    <>
      <header>
        <Header/>
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
      </header>
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
