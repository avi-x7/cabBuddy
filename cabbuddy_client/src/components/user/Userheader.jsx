import { Link, useNavigate } from "react-router-dom";

function UserHeader() {
  const navigate = useNavigate();
  const logout = () => {
    const tokenEmail = localStorage.getItem("key");               
    if (!tokenEmail) {
      navigate("/user-login");
    } else {
      localStorage.removeItem("key");
      closeOffcanvas()
      navigate("/user-login");
    }
  };
  const closeOffcanvas = () => {
    const offcanvasElement = document.getElementById("sidebarMenu");
    if (offcanvasElement) {
      const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
      if (bsOffcanvas) bsOffcanvas.hide();
    }
  };

  return (
    <>
      <nav
        className="navbar fixed-top"
        style={{ background: "linear-gradient(to right,#678e98,#1dabcf)" }}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <Link className="navbar-brand mx-auto" to="/">
            {/* <img src="/car.svg" alt=""  height={20} width={40} />{" "} */}
            CabBuddy
          </Link>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end "
        style={{ background: "linear-gradient(to right,#678e98,#1dabcf)" }}
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            <i className="fas fa-user"></i> Welcome, User!
          </h5>
          <button
            type="button"
            className="btn-close btn-close-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/userhome" onClick={closeOffcanvas}>
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/usereditprofile" onClick={closeOffcanvas}>
                <i className="fas fa-user-edit"></i> Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/feedback" onClick={closeOffcanvas}>
                <i className="fas fa-comments"></i> Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="#" onClick={closeOffcanvas}>
                <i className="fas fa-tasks"></i> Tasks
              </Link>
            </li>
            <li className="nav-item">
              <button
                type="button"
                className="btn btn-danger w-100 mt-2"
                onClick={logout}
              >
                <i className="fas fa-sign-out-alt"></i> Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default UserHeader;
