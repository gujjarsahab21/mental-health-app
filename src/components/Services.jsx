import React from "react";
import SpecialTherapy  from "../assets/specialtherapy.jpg"
import SpritualTherapy  from "../assets/spiritualtherapy.jpg"
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
        <div className="responsive reading">
          <div className="round-image">
            <img src={reading} alt="read" loading="lazy" />
          </div>
          <div className="description">
            <h2>Reading Therapy</h2>
            <p>
              Motivational quotes and books can help us to divert and change our
              mood.
            </p>
            <a href="html/readingTherapy.html">Let's Explore</a>
          </div>
        </div>
        <div className="responsive yoga">
          <div className="round-image">
            <img src={yogaTherapy} alt="yoga" loading="lazy" />
          </div>
          <div className="description">
            <h2>Yoga Therapy</h2>
            <p>Yoga and exercise plays a very important role in our lives.</p>
            <a href="html/yogatherapy.html">Let's Explore</a>
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
            <a href="html/laughTherapy.html">Let's Explore</a>
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
            <a href="./html/childTherapy.html">Let's Explore</a>
          </div>
        </div>
        <div className="responsive special">
          <div className="round-image">
            <img
              src={SpecialTherapy}
              alt="special"
              loading="lazy"
            />
          </div>
          <div className="description">
            <h2>Special Therapy</h2>
            <p>If you need special attention and help from us.</p>
            <a href="./html/specialTherapy.html" target="_blank">
              Let's Explore
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
