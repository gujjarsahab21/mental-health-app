import React from "react";

function FAQ() {
  return (
    <section className="faq">
      <div className="faq_heading">
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className="accordion">
        <div className="accordion__item">
          <button className="accordion__btn">
            <span className="accordion__caption">
              <i className="far fa-lightbulb"></i>Who are we and what do we do?
            </span>
            <span className="accordion__icon">
              <i className="fa fa-plus"></i>
            </span>
          </button>

          <div className="accordion__content">
            <p>
              We are a team of open source contributors who have created this
              website "sukoon" with the aim to provide a one step solution to
              get relief from stress. We hope that everyone can live a stress
              free life with the help of sukoon.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <button className="accordion__btn">
            <span className="accordion__caption">
              <i className="far fa-lightbulb"></i>What are the services we offer?
            </span>
            <span className="accordion__icon">
              <i className="fa fa-plus"></i>
            </span>
          </button>

          <div className="accordion__content">
            <p>
              We offer multiple services like:
              <br />
              1. Audio Therapy
              <br />
              2. Reading Therapy
              <br />
              3. Yoga Therapy
              <br />
              4. Laughing Therapy
              <br />
              5. Talking Therapy
              <br />
              6. Doctor Consultation
              <br />
              7. Child Therapy
              <br />
              8. Spiritual Therapy
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <button className="accordion__btn">
            <span className="accordion__caption">
              <i className="far fa-lightbulb"></i>How can you Contact Us?
            </span>
            <span className="accordion__icon">
              <i className="fa fa-plus"></i>
            </span>
          </button>

          <div className="accordion__content">
            <p>
              {" "}
              You can contact us via{" "}
              <a className="email" href="mailto:sukoon665@gmail.com">
                sukoon665@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <button className="accordion__btn">
            <span className="accordion__caption">
              <i className="far fa-lightbulb"></i>What is Reading Therapy?
            </span>
            <span className="accordion__icon">
              <i className="fa fa-plus"></i>
            </span>
          </button>

          <div className="accordion__content">
            <p>
              Reading therapy is a creative art therapy that uses literature to
              support good mental health and is a versatile and cost-effective
              treatment. It includes storytelling or the reading of specific
              texts.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <button className="accordion__btn">
            <span className="accordion__caption">
              <i className="far fa-lightbulb"></i>What is Yoga Therapy?
            </span>
            <span className="accordion__icon">
              <i className="fa fa-plus"></i>
            </span>
          </button>

          <div className="accordion__content">
            <p>
              Yoga therapy uses yoga postures, breathing exercises, meditation,
              and guided imagery to improve mental and physical health.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <button className="accordion__btn">
            <span className="accordion__caption">
              <i className="far fa-lightbulb"></i>What is Laughing Therapy?
            </span>
            <span className="accordion__icon">
              <i className="fa fa-plus"></i>
            </span>
          </button>

          <div className="accordion__content">
            <p>
              Laughing therapy uses humor to help relieve pain and stress and
              improve a person's sense of well-being through jokes and playful
              exercises that encourage hearty, continuous, and lively laughter.
            </p>
          </div>
        </div>

        <div className="accordion__item">
          <button className="accordion__btn">
            <span className="accordion__caption">
              <i className="far fa-lightbulb"></i>What is Child Therapy?
            </span>
            <span className="accordion__icon">
              <i className="fa fa-plus"></i>
            </span>
          </button>

          <div className="accordion__content">
            <p>
              Child therapy includes the watching of cute videos and images of
              children, as children make us forget about our problems with their
              innocence and cuteness.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}

export default FAQ;
