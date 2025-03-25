import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import { Link } from "react-router-dom";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/* <!-- Hero Section --> */}
      <div className="hero-section d-flex align-items-center text-center">
        <div className="container">
          <h1 className="display-4 fw-bold" style={{margin:"5% auto 3% auto"}}>
            Find & Share Your Ride with Ease
          </h1>
          <p className="lead mb-5">Safe, Affordable, and Convenient Carpooling</p>
          <a href="#features" className="btn btn-warning btn-lg">
            Get Started
          </a>
        </div>
      </div>

      {/* <!-- Features Section --> */}
      <section id="features" className="py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">Why Choose CabBuddy?</h2>
          <div className="row mt-4 mx-auto">
            <div className="card bg-dark text-white mb-3" style={{margin:"3% 4%",width:"20rem"}}>
              <div className="col-md-4 card-body w-100">
                <i className="feature-icon bi bi-shield-lock"></i>
                <h4 className="card-title">Safe & Secure</h4>
                <p className="card-text">
                  Verified users, real-time tracking, and emergency assistance.
                </p>
              </div>
            </div>
            <div className="card bg-dark text-white mb-3" style={{margin:"3% 4%",width:"20rem"}}>
              <div className="col-md-4 card-body w-100">
                <i className="feature-icon bi bi-cash-stack"></i>
                <h4 className="card-title">Affordable Rides</h4>
                <p className="card-text">
                  Split fares with co-travelers and save money.
                </p>
              </div>
            </div>
            <div className="card bg-dark text-white mb-3" style={{margin:"3% 4%",width:"20rem"}}>
              <div className="col-md-4 card-body w-100">
                <i className="feature-icon bi bi-clock-history"></i>
                <h4 className="card-title">Time-Saving</h4>
                <p className="card-text">
                  Match with nearby riders and reach your destination faster.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Image Carousel --> */}
      <div
        id="carouselExample"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/cab-share1.jpg"
              className="d-block w-50 mx-auto"
              alt="Taxi"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/cab-share2.jpg"
              className="d-block w-50 mx-auto"
              alt="City Ride"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/cab-share3.jpg"
              className="d-block w-50 mx-auto"
              alt="Roadtrip"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExample"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>

      {/* <!-- Contact Section --> */}
      <section id="contact" className="py-5 bg-light text-center">
        <div className="container">
          <h2>Get in Touch</h2>
          <p>Have questions? Contact us today.</p>
          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
