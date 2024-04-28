import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Services from "../components/Services";
import FAQ from "../components/FAQ";
import "../styles/home.css";
import botIcon from "../assets/bot.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <header className="home-header">
        <Header />
        <div className="content">
          <h1>Welcome to RAHAT Health Care</h1>
          <div className="container">
            <h3>
              The one-step solution to get relief from your mental stress. Live
              a stress-free life!
            </h3>
          </div>
          <a href="#services" className="rainbow-button" alt="Explore"></a>
        </div>
      </header>
      <div className="bot-btn">
        <Link to="/chat">
          <img src={botIcon} />
        </Link>
      </div>
      <Services />
      <FAQ />
      <Footer />
    </>
  );
}

export default Home;
