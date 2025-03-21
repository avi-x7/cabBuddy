import { useState } from "react";
import Header from "../common/Header";
import { useNavigate } from "react-router-dom";
// import "./common/common.css";
import axios from "axios";
 
const UserLogin = () => {
  const URL= `http://localhost:3000/user/login`;
  const navigate=useNavigate()
  
  const [loginData, setloginData] = useState({
    userEmail: "",
    password: "",
  });

  const setValues = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      const serverResponse = await axios.post(URL, loginData);
      console.log("llllllll",serverResponse);

      if (serverResponse.data.status === "Success") {
        alert(serverResponse.data.message);
        console.log(serverResponse.data)
        localStorage.setItem("key",serverResponse.data.token)
        
        navigate("/userhome");
      } else {
        alert(serverResponse.data.message);
      }
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      <Header />
      <h1 className="cu-heading">User login panel</h1>
      <div className="container">
        <div className="left">
          <p>Get in with </p>
          <div className="l-box">
            <form onSubmit={submitData} method="get">
              
              <div className="l-box-itm">
                <label htmlFor="userEmail">Email:</label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Enter your email"
                  value={loginData.userEmail}
                  onChange={setValues}
                  required
                />
              </div>
              <div className="l-box-itm">
                <label htmlFor="userName">Password :</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={setValues}
                  required
                />
              </div>

              <button type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserLogin;
