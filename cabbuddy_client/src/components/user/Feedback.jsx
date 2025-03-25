// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import UserHeader from "./Userheader";
import Footer from "../common/Footer";
import { useState } from "react";
import axios from "axios";
import IsLogin from "../common/IsLogin";
const Feedback = () => {
  const URL = "http://localhost:3000/u/addfeedback"
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    message: "",
    rating: "",
  });
  const setValues = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const submitData = async (e) => {
    e.preventDefault();
    const response = await axios.post(URL, formData)
    console.log(response)
    console.log(formData);
  };
  // const navigate = useNavigate()
  // const token = localStorage.getItem("key")
  //  useEffect(() => {
  //     if (!token || token == null) {
  //       navigate("/u/login");
  //     }
  //   }, []);
  return (
    <><IsLogin/>
      <UserHeader />
      <div className="specialbg py-5 mt-5" style={{background:"url(/cab-share6.jpg) center/cover no-repeat"}}>
      
      <div className="feedback-container">
        <div className="container">
          <div className="card shadow-lg p-4 rounded mx-auto w-50">
            <h2 className="text-center mb-4">Feedback Form</h2>
            <form onSubmit={submitData}>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="Your Name"
                  name="userName"
                  value={formData.userName}
                  onChange={setValues}
                />
                <label htmlFor="floatingName">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  name="userEmail"
                  value={formData.userEmail}
                  onChange={setValues}
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingMessage"
                  placeholder="Your Message"
                  name="message"
                  value={formData.message}
                  onChange={setValues}
                  style={{ height: "100px" }}
                ></textarea>
                <label htmlFor="floatingMessage">Message</label>
              </div>

              <div className="mb-3 text-center">
                <label className="form-label d-block">Rating</label>
                <div className="d-flex justify-content-center gap-2">
                  <input
                    type="radio"
                    name="rating"
                    id="rating1"
                    className="btn-check"
                    value="1"
                    onChange={setValues}
                    checked={formData.rating === "1"}
                  />
                  <label
                    htmlFor="rating1"
                    className="btn btn-outline-secondary"
                  >
                    1 😡
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="rating2"
                    className="btn-check"
                    value="2"
                    onChange={setValues}
                    checked={formData.rating === "2"}
                  />
                  <label
                    htmlFor="rating2"
                    className="btn btn-outline-secondary"
                  >
                    2 😞
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="rating3"
                    className="btn-check"
                    value="3"
                    onChange={setValues}
                    checked={formData.rating === "3"}
                  />
                  <label
                    htmlFor="rating3"
                    className="btn btn-outline-secondary"
                  >
                    3 🙂
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="rating4"
                    className="btn-check"
                    value="4"
                    onChange={setValues}
                    checked={formData.rating === "4"}
                  />
                  <label
                    htmlFor="rating4"
                    className="btn btn-outline-secondary"
                  >
                    4 😊
                  </label>

                  <input
                    type="radio"
                    name="rating"
                    id="rating5"
                    className="btn-check"
                    value="5"
                    onChange={setValues}
                    checked={formData.rating === "5"}
                  />
                  <label
                    htmlFor="rating5"
                    className="btn btn-outline-secondary"
                  >
                    5 😍
                  </label>
                </div>
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Submit Feedback
              </button>
            </form>
          </div>
        </div>
      </div></div>
      <Footer />
    </>
  );
};

export default Feedback;
