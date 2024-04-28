import React from "react";
import Header from "../components/Header";
import "../styles/audio.css";
import Footer from "../components/Footer";

function AudioTherapy() {
  return (
    <>
      <header className="audio-header">
        <Header />
        <div className="center">
          <h1 id="title">
            Welcome to Our <br />
            <span className="heading-span">Audio Therapy</span>
          </h1>
          <h3 id="subtitle">
            Listen to Music, Motivational Podcasts and Audiobooks <br />
            to gain some happiness, knowledge and also lighten your stress side
            by side.
          </h3>
        </div>
      </header>
      {/* Header Section Ends here */}

      <section id="music">
        <h1 className="section-headings">Music</h1>
        <div className="container">
          <div className="collection">
            <h2>Stress Relief Sounds</h2>
            <div className="playlist">
              <iframe
                style={{ "border-radius": "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator"
                width="100%"
                height="380"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <div className="collection">
            <h2>Peaceful Guitar</h2>
            <div className="playlist">
              <iframe
                style={{ "border-radius": "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0jgyAiPl8Af?utm_source=generator"
                width="100%"
                height="380"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
          <div className="collection">
            <h2>Calm Nature Sounds</h2>
            <div className="playlist">
              <iframe
                style={{ "border-radius": "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DX4PP3DA4J0N8?utm_source=generator"
                width="100%"
                height="380"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
      {/* Music Section Ends Here*/}
      <section id="podcasts">
      <h1 className="section-headings">Podcasts</h1>
      <div className="collection">
        <div className="show">
          <iframe
            src="https://open.spotify.com/embed/episode/4feTGTT8jp9e18w90mBtXc?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="show">
          <iframe
            src="https://open.spotify.com/embed/show/5ZxgpIlnsT8kILxQItEQ5f?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="show">
          <iframe
            src="https://open.spotify.com/embed/episode/4ahVo34YZsDDtCgXX5KS5P?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="show">
          <iframe
            src="https://open.spotify.com/embed/episode/3ZvJ1jpxtjFIZ8sTghil7u?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="show">
          <iframe
            src="https://open.spotify.com/embed/episode/0vEWGG6S1wL6IbxJsxb3sF?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        <div className="show">
          <iframe
            src="https://open.spotify.com/embed/episode/4feTGTT8jp9e18w90mBtXc?utm_source=generator"
            width="100%"
            height="152"
            frameBorder="0"
            allowFullScreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
          ></iframe>
        </div>
        {/* Add more <div className="show"> with iframes for each podcast */}
      </div>
    </section>
      <Footer/>
    </>
  );
}

export default AudioTherapy;
