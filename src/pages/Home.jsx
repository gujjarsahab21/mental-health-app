import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import About from '../components/About'
import Services from '../components/Services'
import FAQ from '../components/FAQ'

function Home() {
  return (
    <>
    <header>
    <Header/>
    <div className="content">
      <h1>Welcome to Health Care</h1>
      <div className="container">
        <h3>The one-step solution to get relief from your stress. Live a stress-free life!</h3>
      </div>
      <a href="#services" className="rainbow-button" alt="Explore"></a>
    </div>
    </header>
    <Services/>
    <FAQ/>
    <Footer />
    </>
  )
}

export default Home