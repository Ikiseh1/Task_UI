import './Navbar.css'

function Navbar() {
  return (
    <section id="header">
      <div className="nav__wrapper">
        <div>
          <svg aria-hidden="true" viewBox="0 0 109 40">
            {/* SVG content */}
          </svg>
          <a className="nav__link" href="#features">Features</a>
          <a className="nav__link" href="#testimonial">Testimonials</a>
          <a className="nav__link" href="#pricing">Pricing</a>
        </div>
        <div className="nav__item">
          <a className="nav__link" href="#">Sign in</a>
          <div>
            <a className="nav__btn__desktop" href="">Get started today</a>
            <a className="nav__btn__mobile" href="">Get started</a>
          </div>
          <div className="menu__icon">
            <i className='bx bx-menu'></i>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
