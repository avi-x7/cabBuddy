import { Link } from "react-router-dom";

const Header = () => {

    const navigate=userNavigate()
const logout=()=>{

  const tokenEmail=localStorage.getItem("key")
  if(!tokenEmail||tokenEmail==null)
    navigate("/user_login")
  else{
  localStorage.removeItme("key")
  navigate("/user_login")
}}


  return (
    <>
      <nav className="navbar navbar-dark bg-info fixed-top">
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
          <Link className="navbar-brand mx-auto" href="#">
            <i className="fas fa-user-circle"></i> MyApp
          </Link>
        </div>
      </nav>

      <div
        className="offcanvas offcanvas-end text-bg-info"
        tabindex="-1"
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
              <Link className="nav-link text-white" href="#">
                <i className="bi bi-house-door"></i> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                <i className="fas fa-user-edit"></i> Edit Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                <i className="fas fa-comments"></i> Feedback
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                <i className="fas fa-tasks"></i> Tasks
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" href="#">
                <i className="fas fa-sign-out-alt"></i> Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default UserHeader;
