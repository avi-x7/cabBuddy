import { Link } from "react-router-dom";
const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{borderBottom:"2px solid #00000069"}}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
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
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
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
              <Link className="nav-link active" to="/contact">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link active"
                aria-current="page"
                to="/feedback"
              >
                Feedback
              </Link>
            </li>
          </ul>
          <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link active rounded text-center" style={{backgroundColor:"#ffc107",marginRight:"2%"}}
              aria-current="page"
              to="/user-registration"
            >
              Registraion
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link active rounded text-center" style={{backgroundColor:"#ffc107",marginRight:"2%"}}
              aria-current="page"
              to="/user-login"
            >
              Login
            </Link>
          </li>
        </ul>
      </div>
        </div>
      </div>
     
    </nav>
  );
};

export default Header;
