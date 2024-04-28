import React from "react";
import { assets } from "../assets/chat/assets.js"; // Import assets accordingly
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "../styles/yoga.css";
import logo from "../assets/logo.png";
import yoga1 from "../assets/yoga1.webp";
import yoga2 from "../assets/yoga2.webp";
import yoga3 from "../assets/yoga3.webp";
import Footer from "../components/Footer";
import Header from "../components/Header.jsx";

function YogaTherapy() {
    return (
        <>
        

       <Header/>

  

            <header>
                <div className="filter"></div>
                <div className="text col-lg-5 container-glass">
                    <h1>Yoga Enhances Your Life</h1>
                    <p>
                        A mind and body practice combining various styles of 
                        physical postures, breathing techniques, and meditation or relaxation:
                        Yoga is an ancient practice that may have originated in India.
                    </p>
                </div>
            </header>




            <section className="aasan" id="aasan">
    <div className="row">
        {/* Aasan 1: Ardha Chakrasana */}
        <div className="aasan1" data-aos="fade-up" data-aos-duration="800">
            <div className="aasan1-img">
                <img src={yoga1} alt="Ardha Chakrasana" />
            </div>
            <div className="atext">
                <h1>Ardha Chakrasana</h1>
                <p>
                    Ardha Chakrasana, or the Standing Backward Bend Pose, stretches the
                    front upper torso and tones the arms and shoulder muscles. Know the
                    steps of doing the posture, all its benefits, and
                    contraindications by clicking below.
                </p>
                <a href="https://www.artofliving.org/in-en/yoga/yoga-poses/standing-backward-bend">
                    <button>Read More</button>
                </a>
            </div>
        </div>

        {/* Aasan 2: Virabhadrasana */}
        <div className="aasan1" data-aos="fade-up" data-aos-duration="800">
            <div className="aasan1-img">
                <img src= {yoga2} alt="Virabhadrasana" />
            </div>
            <div className="atext">
                <h1>Virabhadrasana</h1>
                <p>
                    Virabhadrasana or Warrior Pose increases stamina, strengthens
                    arms, and brings courage and grace. It is an excellent yoga pose
                    for those in sedentary jobs. It is also very beneficial in the
                    case of frozen shoulders. Know the steps of doing the posture, all
                    its benefits, and contraindications by clicking below.
                </p>
                <a href="https://www.artofliving.org/in-en/yoga/yoga-poses/warrior-pose-virbhadrasana">
                    <button>Read More</button>
                </a>
            </div>
        </div>

        {/* Aasan 3: Paschim Namaskarasana */}
        <div className="aasan1" data-aos="fade-up" data-aos-duration="800">
            <div className="aasan1-img">
                <img src={yoga3} alt="Paschim Namaskarasana" />
            </div>
            <div className="atext">
                <h1>Paschim Namaskarasana</h1>
                <p>
                    This yoga pose opens the abdomen and stretches the upper back and
                    shoulder joints. Know the steps of doing the posture, all its
                    benefits, and contraindications by clicking below.
                </p>
                <a href="https://www.artofliving.org/in-en/yoga/yoga-poses/reverse-prayer-pose">
                    <button>Read More</button>
                </a>
            </div>
        </div>
    </div>
    <a className="more" href="https://www.artofliving.org/in-en/yoga/yoga-poses/sitting-standing-recumbent-yoga-poses">
        More Asanas
    </a>
</section>


<section className="videos" id="videos">
    <div className="flip-card" data-aos="fade-up" data-aos-duration="800">
        <div className="inner">
            <div className="tajMahal col-lg-6 col-md-12">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/s2NQhpFGIOg"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        <div className="inner">
            <div className="tajMahal col-lg-6 col-md-12">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/g_tea8ZNk5A"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
    <div className="flip-card" data-aos="fade-up" data-aos-duration="800">
        <div className="inner">
            <div className="col-lg-6 col-md-12">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/c8hjhRqIwHE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        <div className="inner">
            <div className="col-lg-6 col-md-12">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/brjAjq4zEIE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
    <div className="flip-card" data-aos="fade-up" data-aos-duration="800">
        <div className="inner">
            <div className="col-lg-6 col-md-12">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0XBcrjkkwQo"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
        <div className="inner">
            <div className="col-lg-6 col-md-12">
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/7Vqv5SmSKHY"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    </div>
</section>

            <Footer />
        </>
    );
}

export default YogaTherapy;
