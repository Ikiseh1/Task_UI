 import './Testimonials.css'

function Testimonials() {
    return (
      <section className="" id="testimonial">
        <div className="testimonial__container">
          <h1>Loved by businesses worldwide.</h1>
          <p>Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features</p>
          <div className="testimonial__wrapper">
            <div className="testimonial__card">
              <i className='bx bxs-quote-alt-left blockquote__icon'></i>
              <blockquote className="testimonial__blockquote">
                <p>TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Sheryl Berge</h2>
                  <p>CEO at Lynch LLC</p>
                </div>
                <img src="image/avatars/avatar-1.png" alt="Sheryl Berge" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className='bx bxs-quote-alt-left blockquote__icon'></i>
              <blockquote className="testimonial__blockquote">
                <p>TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Russell White</h2>
                  <p>Director at Acme</p>
                </div>
                <img src="image/avatars/avatar-2.png" alt="Russell White" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className='bx bxs-quote-alt-left blockquote__icon'></i>
              <blockquote className="testimonial__blockquote">
                <p>TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Denzel Schmidt</h2>
                  <p>CEO at Lynch LLC</p>
                </div>
                <img src="image/avatars/avatar-3.png" alt="Denzel Schmidt" />
              </div>
            </div>
            <div className="testimonial__card">
              <i className='bx bxs-quote-alt-left blockquote__icon'></i>
              <blockquote className="testimonial__blockquote">
                <p>TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.</p>
              </blockquote>
              <div className="testimonial__info">
                <div>
                  <h2>Loretta Johnson</h2>
                  <p>Director at Acme</p>
                </div>
                <img src="image/avatars/avatar-4.png" alt="Loretta Johnson" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  export default Testimonials;
