import React from "react";
import Header from "./Header";
// import '../css/Feedback.css'
import Footer from "./Footer";

const Feedback = () => {
  return (
    <><Header/>
      <div className="feedback-container">
        <div className="container mt-5">
          <div className="card shadow-lg p-4 rounded mx-auto w-50">
            <h2 className="text-center mb-4">Feedback Form</h2>
            <form>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="floatingName"
                  placeholder="Your Name"
                />
                <label htmlFor="floatingName">Name</label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="floatingEmail"
                  placeholder="name@example.com"
                />
                <label htmlFor="floatingEmail">Email address</label>
              </div>

              <div className="form-floating mb-3">
                <textarea
                  className="form-control"
                  id="floatingMessage"
                  placeholder="Your Message"
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
      </div>
      <Footer/>
    </>
  );
};

export default Feedback;
