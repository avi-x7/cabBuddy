import { useState } from "react";
import Header from "../common/Header";
// import "./common/common.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Footer from "../common/Footer";

const UserLogin = () => {
  const URL = "http://localhost:3000/u/login";
  const navigate = useNavigate();
  const [loginData, setloginData] = useState({
    userName: "",
    // userEmail: "",
    password: "",
  });

  const setValues = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const submitdata = async (e) => {
    e.preventDefault();
    try {
      const serverResponse = await axios.post(URL, loginData);

      if (serverResponse.data.status === "Success") {
        alert(serverResponse.data.message);
        console.log(serverResponse.data);
        localStorage.setItem("key", serverResponse.data.token);
        navigate("/userhome");
      } else {
        alert(serverResponse.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
    // console.log(userdata);
  };

  return (
    <>
      <Header />
      <div className="login-container d-flex align-items-center justify-content-center min-vh-100">
        <div className="card shadow-lg p-4 rounded d-flex flex-lg-row flex-column align-items-center">
          <div className="image-container me-lg-4 mb-4 mb-lg-0">
            {/* <img src={loginImage} alt="Login Illustration" className="img-fluid" /> */}
          </div>
          <div className="form-container">
            <h2 className="text-center mb-4">User Login Panel</h2>
            <p className="text-center">Get in with</p>
            <form onSubmit={submitdata} method="get">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="userName"
                  placeholder="Enter your name"
                  value={loginData.userName}
                  onChange={setValues}
                  required
                />
                <label htmlFor="userName">Username</label>
              </div>
              
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={setValues}
                  required
                />
                <label htmlFor="password">Password</label>
              </div>
              
              <button type="submit" className="btn btn-primary w-100">Login</button>
            </form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );



  // return (
  //   <>
  //     <Header />
  //     <h1 className="cu-heading">User login panel</h1>
  //     <div className="container">
  //       <div className="left">
  //         <p>Get in with </p>
  //         <div className="l-box">
  //           <form onSubmit={submitdata} method="get">
  //             <div className="l-box-itm">
  //               <label htmlFor="userName">Username :</label>
  //               <input
  //                 type="text"
  //                 name="userName"
  //                 placeholder="Enter your name"
  //                 value={loginData.userName}
  //                 onChange={setValues}
  //                 required
  //               />
  //             </div>

  //             {/* <div className="l-box-itm">
  //               <label htmlFor="userEmail">Email:</label>
  //               <input
  //                 type="email"
  //                 name="userEmail"
  //                 placeholder="Enter your email"
  //                 value={loginData.userEmail}
  //                 onChange={setValues}
  //                 required
  //               />
  //             </div> */}
  //             <div className="l-box-itm">
  //               <label htmlFor="userName">Password :</label>
  //               <input
  //                 type="password"
  //                 name="password"
  //                 placeholder="Enter your name"
  //                 value={loginData.password}
  //                 onChange={setValues}
  //                 required
  //               />
  //             </div>

  //             <button type="submit">Login</button>
  //           </form>
  //         </div>
  //       </div>
  //     </div>
  //   </>
  // );
};

export default UserLogin;
