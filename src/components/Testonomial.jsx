import React from 'react'

function Testonomial() {
  return (
    <section id="testimonial" class="section-100">
    <div class="testimonials_heading">
      <h1>Testimonials</h1>
    </div>
    <div class="testimonial-view">
      <div class="owl-carousel">
        <div class="testimonial-box">

          <figure class="testimonal-Card"/>
            <blockquote> I've explored all therapy pages, but my fav one was audio therapy. It have different calming &
              mood soothing sounds, there are also many podcasts as well. Sukoon website really helped me to get relief
              from my stress.
              <div class="arrow"></div>
            </blockquote>
            <img src="./images/Mohit.jpg" alt="sample3" />
            <div class="author">
              <h5>Mohit Namdev</h5>
            </div>
        </div>
        <div class="testimonial-box">
          {/* <!-- <i class="fa fa-quote-left quote-icon"></i> --> */}
          <figure class="testimonal-Card hover">
            <blockquote> I'm really loving the laughing therapy and reading therapy pages. The standup videos present in
              the laughing therapy page cheer me up, and the quotes present in the reading therapy page are really
              motivating. <div class="arrow"></div>
            </blockquote>
            <img src="./images/vanshita.jpg" alt="sample47" />
            <div class="author">
              <h5>Vanshita Mathur</h5>
            </div>
          </figure>
        </div>
        <div class="testimonial-box">
          {/* <!-- <i class="fa fa-quote-left quote-icon"></i> --> */}
          <figure class="testimonal-Card">
            <blockquote>As a student, I love using this website, sukoon is like having a personal therapist. Features
              and UI of the website is amazing and it really helped me to manage a lot of my anxiety and stress. I also
              feel much supported by the lines of quotes than a human.
              <div class="arrow"></div>
            </blockquote>
            <img src="./images/Shravani Kaware.jpg" alt="sample17" />
            <div class="author">
              <h5>Shravani Kaware</h5>
            </div>
          </figure>

        </div>
        <div class="testimonial-box">
          {/* <!-- <i class="fa fa-quote-left quote-icon"></i> --> */}
          <figure class="testimonal-Card">
            <blockquote>I'm really liking Audio, Reading and Yoga therapy because it's helpful for me during studying
              time and last but not least Laughing therapy is also my favorite because whenever I am feeling lonely at
              that time I am watching my childhoods cartoon show like Mr. bean and also watching memes.
              <div class="arrow"></div>
            </blockquote>
            <img src="./images/Kelvin Parmar.jpg" alt="sample17" />
            <div class="author">
              <h5>Kelvin Parmar</h5>
            </div>
          </figure>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Testonomial