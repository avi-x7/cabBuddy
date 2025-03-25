import { useState } from "react";
import Header from "../common/Header";
// import "../css/UserLogin.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer";
import Swal from "sweetalert2";
const UserLogin = () => {
  const URL = "http://localhost:3000/u/login";
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({
    // userName: "",
    userEmail: "",
    password: "",
  });

  const setValues = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const submitdata = async (e) => {
    e.preventDefault();
    if (loginData.password.length <= 0) {
      alert("Password should be 4 character long");
      document.getElementById("password").focus();
      return;
    } else {
      try {
        const serverResponse = await axios.post(URL, loginData);
        if (serverResponse.data.status === "Success") {
          Swal.fire({
            position: "center",
            icon: "success",
            title: serverResponse.data.name,
            text: serverResponse.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("data after login", serverResponse.data);
          localStorage.setItem("key", serverResponse.data.token);
          navigate("/userhome");
        } else {
          alert(serverResponse.data.message);
        }
      } catch (err) {
        console.log(err.message);
      }
    }
  };

  return (
    <>
      <Header />
      <div
        className="specialbg py-5 mb-5"
        style={{ background: "url(/cab-share5.jpg) center/cover no-repeat" }}
      >
        <div className="login-container d-flex align-items-center justify-content-center min-vh-75">
          <div className="card shadow-lg p-4 rounded d-flex flex-lg-row flex-column align-items-center">
            <div className="image-container me-lg-4 mb-4 mb-lg-0">
              {/* <img src={loginImage} alt="Login Illustration" className="img-fluid" /> */}
            </div>
            <div className="form-container shadows">
              <h2 className="text-center mb-4">User Login Panel</h2>
              <p className="text-center">Get in with</p>
              <form onSubmit={submitdata} method="get">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <div className="form-floating ">
                    <input
                      type="text"
                      className="form-control"
                      name="userEmail"
                      id="userEmail"
                      placeholder="Enter your name"
                      value={loginData.userEmail}
                      onChange={setValues}
                      required
                    />
                    <label htmlFor="userEmail">User Email</label>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      id="password"
                      placeholder="Enter your password"
                      value={loginData.password}
                      onChange={setValues}
                      required
                    />
                    <label htmlFor="password">Password</label>
                  </div>
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserLogin;
