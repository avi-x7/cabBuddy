import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserHeader from "./Userheader";
import Footer from "../common/Footer";
const UserHome = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("key");
  const url = "http://localhost:3000/u/getprofile";

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!token || token == null) {
      navigate("/user-login");
    } else {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async () => {
    try {
      const params = { token: token };
      const serverResponse = await axios.get(url, { params });
      setUser(serverResponse.data.userO);
    } catch {}
  };

  return (
    <>
      <UserHeader />
      <div className="card mx-auto shadow" style={{ width: "18rem" }}>
        <img
          src={`http://localhost:3000/profilePics/${user.profilePic}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Phone : {user.phone}</h5>
          <p className="card-text">City : {user.city} </p>
          <p className="card-text">Address : {user.address} </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default UserHome;
