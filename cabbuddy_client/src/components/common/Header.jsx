import { Link } from "react-router-dom";
import Contact from "./Contact";
import"../css/Header.css"
const Header = () => {
  return (
    <nav className=" navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid shadow  ">
        <a className="navbar-brand" href="#">
          CabBuddy
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Service
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">
                Contact
              </a>
            </li>
            <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/feedback">
              Feedback
            </Link>
          </li>
          </ul>
        </div>
      </div>
      <div>
        <ul className="navbar-nav bg-warning" >
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/user-registration">
              Registraion/
            </Link>
          </li>
          <li className="nav-item bg-info">
            <a className="nav-link active" aria-current="page" href="#">
              Login
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
