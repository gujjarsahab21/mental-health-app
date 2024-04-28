import React from "react";
import audioTherapy from "../assets/audio.png";
import laughing  from "../assets/laughing.png"
import child  from "../assets/child.jpg" 
import reading from '../assets/reading.png'
import doctorConsult from "../assets/doctor.png"
import yogaTherapy from "../assets/yoga.png"

function Services() {
  return (
    <section id="services">
      <h1>Our Services</h1>
      <div className="container">
      
        <div className="responsive yoga">
          <div className="round-image">
            <img src={yogaTherapy} alt="yoga" loading="lazy" />
          </div>
          <div className="description">
            <h2>Yoga Therapy</h2>
            <p>Yoga and exercise plays a very important role in our lives.</p>
            <a href="/yoga">Let's Explore</a>
          </div>
        </div>
        <div
          className="responsive laugh"
        >
          <div className="round-image">
            <img src={laughing} alt="laughing" />
          </div>
          <div className="description">
            <h2>Laughing Therapy</h2>
            <p>Laughing is the only medicine which refreshes our mind.</p>
            <a href="/laugh">Let's Explore</a>
          </div>
        </div>
        <div className="responsive doctor">
          <div className="round-image">
            <img src={doctorConsult} alt="doctor" loading="lazy" />
          </div>
          <div className="description">
            <h2>Consult A Doctor</h2>
            <p>
              If you're facing too many problems, you should consult a doctor.
            </p>
            <a href="https://www.practo.com/counselling-psychology" target="_blank">Let's Explore</a>
          </div>
        </div>
        <div className="responsive child">
          <div className="round-image">
            <img src={child} alt="child" loading="lazy" />
          </div>
          <div className="description">
            <h2>Child Therapy</h2>
            <p>Children make us forget about worries with their innocence.</p>
            <a href="/child">Let's Explore</a>
          </div>
        </div>
        <div className="responsive special">
          <div className="round-image">
            <img
              src={audioTherapy}
              alt="special"
              loading="lazy"
            />
          </div>
          <div className="description">
            <h2>Audio Therapy</h2>
            <p>If you need special attention and help from us.</p>
            <a href="/audio">
              Let's Explore
            </a>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default Services;
