const Footer = () => {
  return (
    <footer className="footer mt-5 py-4 text-light bg-dark">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4 mb-3">
            <h5>About CabBuddy</h5>
            <p>CabBuddy is your trusted cab-sharing platform, ensuring safe and affordable rides.</p>
          </div>
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#" className="text-light text-decoration-none">About Us</a></li>
              <li><a href="#" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <div className="d-flex justify-content-center gap-3">
              <a href="#" className="text-light fs-4"><i className="bi bi-facebook"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-twitter"></i></a>
              <a href="#" className="text-light fs-4"><i className="bi bi-instagram"></i></a>
            </div>
          </div>
        </div>
        <hr className="my-4 border-light" />
        <p className="mb-0">&copy; {new Date().getFullYear()} CabBuddy. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer