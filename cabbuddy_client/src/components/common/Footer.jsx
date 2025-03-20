import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About Us</h5>
            <p>We provide high-quality services to enhance your digital experience.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">Services</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Follow Us</h5>
            <div>
              <a href="#" className="text-light me-3"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="text-light me-3"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-light"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-3" />
        <p className="mb-0">&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;