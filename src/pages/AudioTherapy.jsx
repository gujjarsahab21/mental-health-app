import React from 'react';

function AudioTherapy() {
  return (
    <>
      {/* Navbar Section */}
      <nav>
        <a href="../index.html"><img className="audio-logo" src="../logo.png" alt="Logo" /></a>

        <div className="nav-links" id="navLinks">
          <ul>
            <li><a href="../index.html">HOME</a></li>
            <li><a href="#music" className="smooth-scroll">MUSIC</a></li>
            <li><a href="#podcasts" className="smooth-scroll">PODCASTS</a></li>
            <li><a href="#audiobooks" className="smooth-scroll">AUDIOBOOKS</a></li>
          </ul>
        </div>
        <div className="hamburger" id="ham">
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
            <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
          </svg>
        </div>
      </nav>
      {/* Navbar Section Ends Here */}

      {/* Mobile Layout Navbar */}
      <div className="menu" id="menu">
        <ul className="menu-link">
          <li><a href="../index.html">HOME</a></li>
          <li><a className="close" href="#music">MUSIC</a></li>
          <li><a className="close" href="#podcasts">PODCASTS</a></li>
          <li><a className="close" href="#audiobooks">AUDIOBOOKS</a></li>
        </ul>
      </div>
      {/* Mobile Layout Navbar Ends Here */}

      {/* Header Section*/}
      <header>
        <div className="filter"></div>
        <div className="center">
          <h1 id="title"  >
            Welcome to Our <br /><span className="heading-span">Audio Therapy</span>
          </h1>
          <h3 id="subtitle" >
            Listen to Music, Motivational Podcasts and Audiobooks <br />
            to gain some happiness, knowledge and also lighten your stress side by side.
          </h3>
        </div>
      </header>
      {/* Header Section Ends here */}

      {/* Music Section*/}
      <section id="music">
        <h1 className="section-headings">Music</h1>
        <div className="container">
          <div className="collection">
            <h2>Stress Relief Sounds</h2>
            <div className="playlist">
              <iframe
                style={{ borderRadius: '12px' }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1DWXe9gFZP0gtP?utm_source=generator"
                width="100%"
                height="380"
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              ></iframe>
            </div>
          </div>
          {/* Add other music collections here */}
        </div>
      </section>
      {/* Music Section Ends Here*/}

      {/* Add other sections like Podcasts and Audiobooks */}
    </>
  );
}

export default AudioTherapy;
