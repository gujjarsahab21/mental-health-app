import React from 'react';

function ReadingTherapy() {
  return (
    <div>
      <div id="load">
        <div style={{ backgroundColor: 'white', height: '25vh', width: '100%', position: 'relative', top: '-70px' }}></div>
      </div>
      <div id="back-top-div" className="back-top-wrap">
        <i className="fas fa-arrow-up"></i>
      </div>
      <header>
        <nav className="navbar">
          <div>
            <a href="https://sukoon-stress-free.netlify.app"><img src="../logo.png" className="icon" alt="" /></a>
          </div>
          <div className="nav-links" id="navLinks">
            <ul>
              <li><a href="/index.html">HOME</a></li>
              <li><a href="#articles" className="smooth-scroll">ARTICLES</a></li>
              <li><a href="#quotes" className="smooth-scroll">QUOTES </a></li>
              <li><a href="#summary" className="smooth-scroll">SUMMARIES</a></li>
              <li><a href="#reading" className="smooth-scroll">BOOKS </a></li>
            </ul>
          </div>
          <div className="hamburger" id="ham">
            <svg stroke="currentColor" fill="currentColor" strokeWidth   viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
            </svg>
          </div>
        </nav>
        <div className="menu" id="menu">
          <ul className="menu-link">
            <li><a href="/index.html">HOME</a></li>
            <li><a href="#articles">ARTICLES</a></li>
            <li><a href="#quotes">QUOTES </a></li>
            <li><a href="#summary">SUMMARIES</a></li>
            <li><a href="#reading">BOOKS </a></li>
          </ul>
        </div>
        <div className="contain">
          <img className="image" src="https://images2.alphacoders.com/261/thumb-1920-26102.jpg" style={{ width: '100%', height: '40%' }} />
          <div className="center">
            <h1 id="title"><span className="heading-starting">Welcome to Our </span><span className="heading-title">Reading Therapy</span><img className="reading1" src="../images/reading1.png" alt="" /></h1>
            <h3 id="subtitle">Read Articles, Motivational Quotes and listen to summaries of famous books <br /> to gain some happiness, knowledge and also lighten your stress side by side.</h3>
          </div>
        </div>
      </header>
      <div className="black-background">
        <section id="Benefits" style={{ height: '45rem' }}>
          <h1 style={{ fontSize: '2.3rem' }}>Reading Therapy</h1>
          <div className="right-side">
            <h3 id="subtitle" style={{ height: 'auto', width: '450px', padding: '25px 25px', marginTop: '5rem' }}>Bibliotherapy (also referred to as book therapy, reading therapy, poetry therapy or therapeutic storytelling) is a creative arts therapy that involves storytelling or the reading of specific texts. It uses an individual's relationship to the content of books and poetry and other written words as therapy. Bibliotherapy partially overlaps with, and is often combined with, writing therapy.</h3>
          </div>
          <div className="left-side">
            <h2 className="readingbenefits">Benefits of Reading</h2>
            <div className="vl"></div>
            <div className="card" style={{ top: '-20rem', marginLeft: '13rem', width: '450px', height: '300px' }}>
              <h3 className="subtitle" style={{ color: 'white' }}>
                <p className="benefit-points">Reduces stress</p>
                <p className="benefit-points"> Increases your ability to empathize</p>
                <p className="benefit-points"> Helps prevent age-related cognitive decline</p>
                <p className="benefit-points"> Builds your vocabulary</p>
                <p className="benefit-points"> Prepares you for a good night’s rest</p>
                <p className="benefit-points"> Helps alleviate depression symptoms</p>
              </h3>
            </div>
          </div>
        </section>
        <section id="articles">
          <h1 style={{ fontSize: '2.3rem' }}>Articles</h1>
          <h2>Inspirational Stories</h2>
          <div className="collection">
            <div className="playlist">
              <iframe src="https://ahigherthought.com/the-best-way-to-refresh-mind-body-soul/"     width="100%" height="380px"></iframe>
            </div>
            <div className="playlist">
              <iframe src="https://www.developgoodhabits.com/inspirational-stories/"     width="100%" height="380px"></iframe>
            </div>
            <div className="playlist">
              <iframe src="https://www.whatsdannydoing.com/blog/short-inspirational-stories-with-a-moral"     width="100%" height="380px"></iframe>
            </div>
            <div className="playlist">
              <iframe src="https://www.theintelligentoptimist.com/2022/01/15-stories-to-boost-your-spirit"     width="100%" height="380px"></iframe>
            </div>
          </div>
        </section>
        <section id="quotes">
          <h1 style={{ fontSize: '2.3rem' }}>Quotes</h1>
          <div className="quote-container">
            <div className="quote-card">
              <div>
                <i className="fas fa-quote-left"></i>
                <p>“The only way to do great work is to love what you do.”</p>
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
            <div className="quote-card">
              <div>
                <i className="fas fa-quote-left"></i>
                <p>“You don’t have to be great to start, but you have to start to be great.”</p>
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
            <div className="quote-card">
              <div>
                <i className="fas fa-quote-left"></i>
                <p>“The only way to do great work is to love what you do.”</p>
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
            <div className="quote-card">
              <div>
                <i className="fas fa-quote-left"></i>
                <p>“You don’t have to be great to start, but you have to start to be great.”</p>
                <i className="fas fa-quote-right"></i>
              </div>
            </div>
          </div>
        </section>
        <section id="summary">
          <h1 style={{ fontSize: '2.3rem' }}>Summaries</h1>
          <div className="summary-container">
            <div className="summary-card">
              <div>
                <h2>Summary of "The Alchemist"</h2>
                <p>The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he decides to travel to a Romani fortune-teller in a nearby town to discover its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.</p>
              </div>
            </div>
            <div className="summary-card">
              <div>
                <h2>Summary of "Think and Grow Rich"</h2>
                <p>Think and Grow Rich was written by Napoleon Hill in 1937 and promoted as a personal development and self-improvement book. He claimed to be inspired by a suggestion from business magnate and later-philanthropist Andrew Carnegie. While the book's title and much of the writing concerns increasing income, the author insists that his philosophy can help people succeed in any line of work, to do and be anything they can imagine.</p>
              </div>
            </div>
          </div>
        </section>
        <section id="reading">
          <h1 style={{ fontSize: '2.3rem' }}>Books</h1>
          <div className="book-container">
            <div className="book-card">
              <img src="../images/alchemist.jpg" alt="" />
              <div className="content">
                <h2>The Alchemist</h2>
                <p>Paulo Coelho</p>
                <a href="https://www.amazon.com/Alchemist-Paulo-Coelho/dp/0062315005">View on Amazon</a>
              </div>
            </div>
            <div className="book-card">
              <img src="../images/think_and_grow_rich.jpg" alt="" />
              <div className="content">
                <h2>Think and Grow Rich</h2>
                <p>Napoleon Hill</p>
                <a href="https://www.amazon.com/Think-Grow-Rich-Napoleon-Hill/dp/1585424331">View on Amazon</a>
              </div>
            </div>
          </div>
        </section>
      </div>
      <footer>
        <div className="footer-content">
          <h3 id="about">About Us</h3>
          <p>Our mission is to provide you with a unique collection of articles, quotes, summaries, and books to help you on your journey of self-improvement and personal growth.</p>
        </div>
        <div className="footer-content">
          <h3 id="contact">Contact Us</h3>
          <p>Email: contact@sukoon.com</p>
          <p>Phone: +1 234 567 8901</p>
        </div>
      </footer>
    </div>
  );
}

export default ReadingTherapy;
