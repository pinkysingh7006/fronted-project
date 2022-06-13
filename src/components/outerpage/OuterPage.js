import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import ladyImage from "../images/lady-img.jpg";
import drinking from "../images/img1.webp";
import img4 from "../images/img4.jpg";
import img5 from "../images/img5.jpg";

const OuterPage = () => {
  return (
    <>
      <section className="color-section" id="title">
        <div className="container-fluid">
          {/* <!-- Nav Bar --> */}

          <nav className="navbar navbar-expand-sm navbar-dark">
            <div className="logo">
              <img
                alt="logo"
                className="logo"
                src="https://webneel.com/daily/sites/default/files/images/daily/06-2013/30-world-wildlife-foundation-wwf-logo-parody.jpg"
              />

              <a className="navbar-brand">justChill</a>
            </div>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarTogglerDemo02"
              aria-controls="navbarTogglerDemo02"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="#footer">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#cta">
                    SignUp/LogIn
                  </a>
                </li>
              </ul>
            </div>
          </nav>

          {/* <!-- Title --> */}

          <div className="row">
            <div className="col-lg-6">
              <h1 className="big-heading">
                Your Drink with you within minutes.
                {/* Meet new and interesting dogs nearby. */}
              </h1>
              <Link className="linkstyle" to="/signup">
                <button
                  type="button"
                  className="btn btn-dark btn-lg download-button"
                >
                  {/* <i className="fab fa-apple" to="/signup">
                  Download
                </i> */}
                  Sign Up
                  {/* Download */}
                </button>
              </Link>
              <Link className="linkstyle" to="/login">
                <button
                  type="button"
                  className="btn btn-outline-light btn-lg download-button"
                >
                  {/* <i className="fab fa-google-play"> </i> */}
                  Log In
                  {/* Download */}
                </button>
              </Link>
            </div>
            <div className="col-lg-6">
              <img className="title-image" src={drinking} alt="iphone-mockup" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Features --> */}

      <section className="white-section" id="features">
        <div className="container-fluid">
          <div className="row">
            <div className="feature-sec col-lg-4">
              <i className="icon fas fa-check-circle fa-4x"></i>
              <h3>The whole liquor store</h3>
              <p>Fan favorites, seasonal booze, and local picks.</p>
            </div>
            <div className="feature-sec col-lg-4">
              <i className="icon fas fa-bullseye fa-4x"></i>
              <h3>In 30 min</h3>
              <p>We’re already on our way no need to get up.</p>
            </div>
            <div className="feature-sec col-lg-4">
              <i className="icon fas fa-heart fa-4x"></i>
              <h3>At the drop of a pin</h3>
              <p>We’re outside Cheers! See you for round two.</p>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Testimonials --> */}

      <section className="color-section" id="testimonials">
        <div
          id="testimonial-carousel"
          className="carousel slide"
          data-bs-ride="false"
        >
          <h1 className="font-style">People Love Us</h1>
          <div className="carousel-inner">
            <div className="carousel-item active container-fluid">
              <h5 className="testimonial-heading">
                “The only way I get my beer now! They have a pretty solid
                selection. Haven’t been to the liquor store in months.”
              </h5>
              <img
                className="testimonials-image"
                src={ladyImage}
                alt="dog-profile"
              />
              <em className="name-address">Pebbles, New York</em>
            </div>

            <div className="carousel-item container-fluid">
              <h5 className="testimonial-heading">
                “Entertaining is way easier. I don’t have to leave the party to
                replenish the well, so I get more time with my friends and my
                buzz.”
              </h5>
              <img
                className="testimonials-image"
                src={img4}
                alt="lady-profile"
              />
              <em className="name-address">Beverly, Illinois</em>
            </div>
            <div className="carousel-item container-fluid">
              <h5 className="testimonial-heading">
                “Honestly I initially used Saucey simply because I love the idea
                of alcohol delivered to my door… The last time I used Saucey I
                got awesome bourbon with ginger ale and lime (for the hubs, I
                drink it straight) for less than I could have paid at the store,
                even including tip. DAMN!”
              </h5>
              <img
                className="testimonials-image"
                src={img5}
                alt="lady-profile"
              />
              <em className="name-address">Matheus New York</em>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#testimonial-carousel"
            role="button"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon"></span>
          </a>
          <a
            className="carousel-control-next"
            href="#testimonial-carousel"
            role="button"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon"></span>
          </a>
        </div>
      </section>

      {/* <!-- Press --> */}

      {/* <section className="color-section" id="press"> */}
      {/* <img
          className="press-logo"
          src="components/images/techcrunch.png"
          alt="tc-logo"
        /> */}
      {/* <img className="press-logo" src="images/tnw.png" alt="tnw-logo" /> */}
      {/* <img
          className="press-logo"
          src="components/images/bizinsider.png"
          alt="biz-insider-logo"
        /> */}
      {/* <img
          className="press-logo"
          src="components/images/mashable.png"
          alt="mashable-logo"
        /> */}
      {/* </section> */}

      {/* <!-- Pricing --> */}

      <section className="white-section" id="pricing">
        <h2 className="big-heading">A Plan for Every Drink Needs</h2>
        <p>Simple and affordable price plans for you.</p>
        <div className="row">
          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Chihuahua</h3>
              </div>
              <div className="card-body">
                <h2 className="big-heading">Free</h2>
                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
                <Link to="/signup">
                  <button className="btn btn-lg w-50 btn-dark" type="button">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="pricing-column col-lg-4 col-md-6">
            <div className="card">
              <div className="card-header">
                <h3>Labrador</h3>
              </div>
              <div className="card-body">
                <h2 className="big-heading">$49 / mo</h2>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <p>Unlimited App Usage</p>
                <Link to="/signup">
                  <button className="btn btn-lg w-50 btn-dark" type="button">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <div className="pricing-column col-lg-4">
            <div className="card">
              <div className="card-header">
                <h3>Mastiff</h3>
              </div>
              <div className="card-body">
                <h2 className="big-heading">$99 / mo</h2>
                <p>Pirority Listing</p>
                <p>Unlimited Matches</p>
                <p>Unlimited Messages</p>
                <Link to="/signup">
                  <button className="btn btn-lg w-50 btn-dark" type="button">
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Call to Action --> */}

      <section className="color-section-div cta-section" id="cta">
        <div className="container-fluid-div">
          <h3 className="cta-text">
            Find the True Love of Your Drink Life Today.
          </h3>
          <Link className="linkstyle" to="/signup">
            <button
              type="button"
              className="btn btn-dark btn-lg download-button"
            >
              {/* <i className="fab fa-apple"></i>  */}
              Sign Up
              {/* Download */}
            </button>
          </Link>
          <Link className="linkstyle" to="/login">
            <button
              type="button"
              className="btn btn-light btn-lg download-button"
            >
              {/* <i className="fab fa-google-play"> </i> */}
              Log In
              {/* Download */}
            </button>
          </Link>
        </div>
      </section>

      {/* <!-- Footer --> */}

      <footer className="white-section footer-section" id="footer">
        <div className="imagestyle">
          <img
            alt="logo"
            className="img-login"
            src="https://webneel.com/daily/sites/default/files/images/daily/06-2013/30-world-wildlife-foundation-wwf-logo-parody.jpg"
          />
        </div>
        <div className="container-fluid">
          <i className=" footer-icon fab fa-facebook-f"></i>
          <i className=" footer-icon fab fa-twitter"></i>
          <i className=" footer-icon fab fa-instagram"></i>
          <i className=" footer-icon fas fa-envelope-square"></i>
          <p>© Copyright 2018 justChill</p>
        </div>
      </footer>
    </>
  );
};

export default OuterPage;
