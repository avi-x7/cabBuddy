import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Header/>
      {/* <!-- Hero Section --> */}
    <div class="contact-header">
        Get in Touch with Us
    </div>

    {/* <!-- Contact Form --> */}
    <section class="py-5">
        <div class="container">
            <h2 class="text-center">Contact Us</h2>
            <p class="text-center text-muted">We’d love to hear from you! Fill out the form below or reach out to us.</p>
            <form class="contact-form">
                <div class="mb-3">
                    <label for="name" class="form-label">Your Name</label>
                    <input type="text" class="form-control" id="name" placeholder="Enter your name" required/>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">Your Email</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your email" required/>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Your Message</label>
                    <textarea class="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary w-100">Send Message</button>
            </form>
        </div>
    </section>

    {/* <!-- Contact Details --> */}
    <section class="py-5 bg-light text-center">
        <div class="container">
            <div class="row">
                <div class="col-md-4">
                    <div class="icon-box mb-2">📍</div>
                    <h5>Our Location</h5>
                    <p>123 Street, City, Country</p>
                </div>
                <div class="col-md-4">
                    <div class="icon-box mb-2">📧</div>
                    <h5>Email Us</h5>
                    <p>support@cabbuddy.com</p>
                </div>
                <div class="col-md-4">
                    <div class="icon-box mb-2">📞</div>
                    <h5>Call Us</h5>
                    <p>+123 456 7890</p>
                </div>
            </div>
        </div>
    </section>
<Footer/>
    </>
  )
}

export default Contact