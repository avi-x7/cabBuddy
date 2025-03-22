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
    <div class="hero-section d-flex align-items-center text-center">
        <div class="container">
            <h1 class="display-4 fw-bold">Find & Share Your Ride with Ease</h1>
            <p class="lead">Safe, Affordable, and Convenient Carpooling</p>
            <a href="#features" class="btn btn-warning btn-lg">Get Started</a>
        </div>
    </div>

    {/* <!-- Features Section --> */}
    <section id="features" class="py-5 text-center">
        <div class="container">
            <h2 class="fw-bold">Why Choose CabBuddy?</h2>
            <div class="row mt-4">
                <div class="col-md-4">
                    <i class="feature-icon bi bi-shield-lock"></i>
                    <h4>Safe & Secure</h4>
                    <p>Verified users, real-time tracking, and emergency assistance.</p>
                </div>
                <div class="col-md-4">
                    <i class="feature-icon bi bi-cash-stack"></i>
                    <h4>Affordable Rides</h4>
                    <p>Split fares with co-travelers and save money.</p>
                </div>
                <div class="col-md-4">
                    <i class="feature-icon bi bi-clock-history"></i>
                    <h4>Time-Saving</h4>
                    <p>Match with nearby riders and reach your destination faster.</p>
                </div>
            </div>
        </div>
    </section>

    {/* <!-- Image Carousel --> */}
    <div id="carouselExample" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <img src="https://source.unsplash.com/1600x600/?taxi" class="d-block w-100" alt="Taxi"/>
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1600x600/?city,car" class="d-block w-100" alt="City Ride"/>
            </div>
            <div class="carousel-item">
                <img src="https://source.unsplash.com/1600x600/?roadtrip" class="d-block w-100" alt="Roadtrip"/>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
    </div>

    {/* <!-- Contact Section --> */}
    <section id="contact" class="py-5 bg-light text-center">
        <div class="container">
            <h2>Get in Touch</h2>
            <p>Have questions? Contact us today.</p>
            <a href="mailto:support@cabbuddy.com" class="btn btn-primary">Email Us</a>
        </div>
    </section>
      <Footer/>
    </>
  )
}

export default App
