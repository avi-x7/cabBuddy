import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Contact = () => {
  return (
    <>
    <Header/>
      {/* <!-- Hero Section --> */}
    <div className="contact-header">
        Get in Touch with Us
    </div>

    {/* <!-- Contact Form --> */}
    <section className="py-5">
        <div className="container">
            <h2 className="text-center">Contact Us</h2>
            <p className="text-center text-muted">We’d love to hear from you! Fill out the form below or reach out to us.</p>
            <form className="contact-form">
                <div className="mb-3">
                    <label for="name" className="form-label">Your Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter your name" required/>
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Your Email</label>
                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                </div>
                <div className="mb-3">
                    <label for="message" className="form-label">Your Message</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="Enter your message" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary w-100">Send Message</button>
            </form>
        </div>
    </section>

    {/* <!-- Contact Details --> */}
    <section className="py-5 bg-light text-center">
        <div className="container">
            <div className="row">
                <div className="col-md-4">
                    <div className="icon-box mb-2">📍</div>
                    <h5>Our Location</h5>
                    <p>123 Street, City, Country</p>
                </div>
                <div className="col-md-4">
                    <div className="icon-box mb-2">📧</div>
                    <h5>Email Us</h5>
                    <p>support@cabbuddy.com</p>
                </div>
                <div className="col-md-4">
                    <div className="icon-box mb-2">📞</div>
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