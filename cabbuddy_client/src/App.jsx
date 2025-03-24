import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/common/Header'
import Footer from './components/common/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* <!-- Hero Section --> */}
    <div className="hero-section d-flex align-items-center text-center">
        <div className="container">
            <h1 className="display-4 fw-bold">Find & Share Your Ride with Ease</h1>
            <p className="lead">Safe, Affordable, and Convenient Carpooling</p>
            <a href="#features" className="btn btn-warning btn-lg">Get Started</a>
        </div>
    </div>

    {/* <!-- Features Section --> */}
    <section id="features" className="py-5 text-center">
        <div className="container">
            <h2 className="fw-bold">Why Choose CabBuddy?</h2>
            <div className="row mt-4">
                <div className="col-md-4">
                    <i className="feature-icon bi bi-shield-lock"></i>
                    <h4>Safe & Secure</h4>
                    <p>Verified users, real-time tracking, and emergency assistance.</p>
                </div>
                <div className="col-md-4">
                    <i className="feature-icon bi bi-cash-stack"></i>
                    <h4>Affordable Rides</h4>
                    <p>Split fares with co-travelers and save money.</p>
                </div>
                <div className="col-md-4">
                    <i className="feature-icon bi bi-clock-history"></i>
                    <h4>Time-Saving</h4>
                    <p>Match with nearby riders and reach your destination faster.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Image Carousel --> */}
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="https://source.unsplash.com/1600x600/?taxi" className="d-block w-100" alt="Taxi"/>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1600x600/?city,car" className="d-block w-100" alt="City Ride"/>
            </div>
            <div className="carousel-item">
                <img src="https://source.unsplash.com/1600x600/?roadtrip" className="d-block w-100" alt="Roadtrip"/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>

    {/* <!-- Contact Section --> */}
    <section id="contact" className="py-5 bg-light text-center">
        <div className="container">
            <h2>Get in Touch</h2>
            <p>Have questions? Contact us today.</p>
            <a href="mailto:support@cabbuddy.com" className="btn btn-primary">Email Us</a>
        </div>
    </section>
      <Footer/>
    </>
  )
}

export default App
