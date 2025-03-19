import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../css/UserRegistration'

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
    formData.append("userEmail", regData.userEmail);
    formData.append("password", regData.password);
    formData.append("confirmPassword", regData.confirmPassword);
    formData.append("userName", regData.userName);
    formData.append("phone", regData.phone);
    formData.append("gender", regData.gender);
    formData.append("city", regData.city);
    formData.append("address", regData.address);
    formData.append("pic", profilePic);

    try {
      const response = await axios.post(url, formData);
      console.log(response);
      alert(response.data);
      alert("Registration done successfully");
      //clear all fields

      setRegData({
        userEmail: "",
        password: "",
        confirmPassword: "",
        userName: "",
        phone: "",
        gender: "",
        city: "",
        address: "",
      });
      setprofilePic(null);
      // navigate("/user_login"); // for redirection
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="body">
      <div className="w-100 text-center">
        <h1>User Registration</h1>
      </div>

      <div className="row justify-content-center align-items-center h-50 w-100">
        <div className="col-md-6 pt-2">
          <form onSubmit={submitData}>
            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-user-circle"></i>
              </span>
              <div className="form-floating">
                <label htmlFor="userName">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="userName"
                  placeholder="username"
                  name="userName"
                  value={regData.userName}
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-envelope-square"></i>
              </span>
              <div className="form-floating">
                <label htmlFor="userEmail">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="userEmail"
                  placeholder="email"
                  name="userEmail"
                  value={regData.userEmail}
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-key"></i>
              </span>
              <div className="form-floating">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="password"
                  name="password"
                  value={regData.password}
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-key"></i>
              </span>
              <div className="form-floating">
                <label htmlFor="confirmPassword">Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  placeholder="password"
                  name="confirmPassword"
                  value={regData.confirmPassword}
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-phone"></i>
              </span>
              <div className="form-floating">
                <label htmlFor="phone">Phone</label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="phone"
                  name="phone"
                  value={regData.phone}
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-map"></i>
              </span>
              <div className="form-floating">
                <label htmlFor="address">Address</label>
                <textarea
                  className="form-control"
                  id="address"
                  placeholder="address"
                  name="address"
                  value={regData.address}
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="text-center mb-3">
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="male">
                  Male
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="male"
                  value="male"
                  checked={regData.gender === "male"}
                  onChange={fetchData}
                />
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="female">
                  Female
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="female"
                  value="female"
                  checked={regData.gender === "female"}
                  onChange={fetchData}
                />
              </div>
              <div className="form-check form-check-inline">
                <label className="form-check-label" htmlFor="other">
                  Other
                </label>
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  id="other"
                  value="other"
                  checked={regData.gender === "other"}
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-map-marker-alt"></i>
              </span>
              <select
                className="form-select"
                aria-label="Default select example"
                name="city"
                value={regData.city}
                onChange={fetchData}
              >
                <option value="">Select City</option>
                <option value="lucknow">Lucknow</option>
                <option value="Delhi">Delhi</option>
                <option value="varanasi">Varanasi</option>
              </select>
            </div>

            <div className="input-group mb-3">
              <span className="input-group-text">
                <i className="fas fa-user"></i>
              </span>
              <div className="form-floating">
                <input
                  type="file"
                  name="pic"
                  className="form-control"
                  onChange={fetchData}
                />
              </div>
            </div>

            <div className="text-center">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserRegistration;
