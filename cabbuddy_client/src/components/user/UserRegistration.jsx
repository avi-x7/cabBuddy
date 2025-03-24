import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "../css/UserRegistration.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
const UserRegistration = () => {
  const navigate = useNavigate();
  const url = `http://localhost:3000/u/registration`;

  const [regData, setRegData] = useState({
    userName: "",
    useruserEmail: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
    city: "",
    address: "",
  });

  const [profilePic, setprofilePic] = useState(null);

  const fetchData = (e) => {
    const { name, value, type, files } = e.target;

    if (type === "file") {
      console.log(files[0]);
      setprofilePic(files[0]); //it is an object->
    } else {
      setRegData({ ...regData, [name]: value });
    }
  };

  const submitData = async (e) => {
    e.preventDefault();
    console.log(profilePic);
    //setting all data in formData object
    const formData = new FormData();
    formData.append("userName", regData.userName);
    formData.append("userEmail", regData.userEmail);
    formData.append("password", regData.password);
    formData.append("confirmPassword", regData.confirmPassword);
    formData.append("phone", regData.phone);
    formData.append("gender", regData.gender);
    formData.append("city", regData.city);
    formData.append("address", regData.address);
    formData.append("profilePic", profilePic);

    try {
      const response = await axios.post(url, formData);
      console.log("form data isssssssssssssssss",formData)
      console.log(response);
      alert(response.data);
      alert("Registration done successfully");
      navigate("/user-login");
      //clear all fields

      // setRegData({
      //   userName: "",
      //   userEmail: "",
      //   password: "",
      //   confirmPassword: "",
      //   phone: "",
      //   gender: "",
      //   city: "",
      //   address: "",
      // });
      setprofilePic(null);
      // navigate("/user_login"); // for redirection
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      <Header />
      <div className="container mt-5">
        <div className="card shadow p-4 w-50 mx-auto">
          <h2 className="text-center mb-4">User Registration</h2>
          <form onSubmit={submitData}>
            {/* User Name */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-user"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingUser"
                    placeholder="User Name"
                    name="userName"
                    value={regData.userName}
                    onChange={fetchData}
                  />
                  <label htmlFor="floatingUser">User Name</label>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="email"
                    className="form-control"
                    id="floatingEmail"
                    placeholder="Email"
                    name="userEmail"
                    value={regData.userEmail}
                    onChange={fetchData}
                  />
                  <label htmlFor="floatingEmail">Email</label>
                </div>
              </div>
            </div>

            {/* Password */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingPassword"
                    placeholder="Password"
                    name="password"
                    value={regData.password}
                    onChange={fetchData}
                  />
                  <label htmlFor="floatingPassword">Password</label>
                </div>
              </div>
            </div>

            {/* Confirm Password */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="password"
                    className="form-control"
                    id="floatingConfirmPassword"
                    placeholder="Confirm Password"
                    name="confirmPassword"
                    value={regData.confirmPassword}
                    onChange={fetchData}
                  />
                  <label htmlFor="floatingConfirmPassword">
                    Confirm Password
                  </label>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-phone"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingPhone"
                    placeholder="Phone"
                    name="phone"
                    value={regData.phone}
                    onChange={fetchData}
                  />
                  <label htmlFor="floatingPhone">Phone</label>
                </div>
              </div>
            </div>

            {/* Gender */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-venus-mars"></i>
                </span>
                <select
                  className="form-select"
                  id="floatingGender"
                  name="gender"
                  value={regData.gender}
                  onChange={fetchData}
                >
                  <option value="">Select Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            {/* City */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-city"></i>
                </span>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    id="floatingCity"
                    placeholder="City"
                    name="city"
                    value={regData.city}
                    onChange={fetchData}
                  />
                  <label htmlFor="floatingCity">City</label>
                </div>
              </div>
            </div>

            {/* Address */}
            <div className="w-100 mt-3">
              <div className="input-group mb-3">
                <span className="input-group-text">
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <div className="form-floating">
                  <textarea
                    className="form-control"
                    id="floatingAddress"
                    placeholder="Address"
                    rows="3"
                    name="address"
                    value={regData.address}
                    onChange={fetchData}
                  ></textarea>
                  <label htmlFor="floatingAddress">Address</label>
                </div>
              </div>
            </div>

            <div className="input-group mb-3">
              <label className="input-group-text" htmlFor="inputGroupFile01">
                Profile Pic
              </label>
              <input
                type="file"
                className="form-control"
                id="inputGroupFile01"
                name="profilePic"
                onChange={fetchData}
              />
            </div>

            {/* Submit Button */}
            <div className="text-center mt-4">
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default UserRegistration;
