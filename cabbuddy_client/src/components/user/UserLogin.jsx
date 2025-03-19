import { useState } from "react";
// import Header from "./common/Header";
// import "./common/common.css";

const UserLogin = () => {
  const [loginData, setContactData] = useState({
    userName: "",
    userEmail: "",
    password: "",
  });

  const setValues = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const submitData = (e) => {
    e.preventDefault();
    console.log(contactData);
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
                <label htmlFor="userName">Username :</label>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your name"
                  value={contactData.userName}
                  onChange={setValues}
                  required
                />
              </div>

              <div className="l-box-itm">
                <label htmlFor="userEmail">Email:</label>
                <input
                  type="email"
                  name="userEmail"
                  placeholder="Enter your email"
                  value={contactData.userEmail}
                  onChange={setValues}
                  required
                />
              </div>
              <div className="l-box-itm">
                <label htmlFor="userName">Password :</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your name"
                  value={contactData.password}
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
