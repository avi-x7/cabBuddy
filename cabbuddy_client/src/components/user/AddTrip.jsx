import { useState } from "react";
import UserHeader from "./Userheader";
import Footer from "../common/Footer";
const AddTrip = () => {
  const [tripData, setTripData] = useState({
    userEmail: "",
    source: "",
    destination: "",
    travelTime: "",
    status: "",
    description: "",
    whatsapp: "",
    totalFare: "",
    // estimatedFare: "",
  });
  const setData = (e) => {
    setTripData({ ...tripData, [e.target.name]: e.target.value });
  };
  const submitData=(e)=>{
    e.preventDefault()
    console.log(tripData)
  }
  return (
    <>
    <UserHeader/>
       <div className="specialbg" style={{background:"url(/cab-share6.jpg) center/cover no-repeat"}}>
        <div className="container py-5">
          <div className="card shadow p-4 w-50 mx-auto">
            <h2 className="text-center mb-4">Add trip details</h2>
            <form onSubmit={submitData} method="post">
              {/* User Email */}
              <div className="w-100 mt-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-user"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingEmail"
                      placeholder="User Email"
                      name="userEmail"
                      value={tripData.userEmail}
                      onChange={setData}
                    />
                    <label htmlFor="floatingEmail">User Email</label>
                  </div>
                </div>
              </div>

              {/* Source*/}
              <div className="w-100 mt-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-envelope"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingSource"
                      placeholder="Source"
                      name="source"
                      value={tripData.source}
                      onChange={setData}
                    />
                    <label htmlFor="floatingSource">Source</label>
                  </div>
                </div>
              </div>

              {/* Destination */}
              <div className="w-100 mt-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingdestination"
                      placeholder="destination"
                      name="destination"
                      value={tripData.destination}
                      onChange={setData}
                    />
                    <label htmlFor="floatingdestination">Destination</label>
                  </div>
                </div>
              </div>

              {/* travelTime */}
              <div className="w-100 mt-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-lock"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="datetime-local"
                      className="form-control"
                      id="floatingtravelTime"
                      placeholder="Select startind date-time"
                      name="travelTime"
                      value={tripData.travelTime}
                      onChange={setData}
                    />
                    <label htmlFor="floatingtravelTime">
                      Select startind date-time
                    </label>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="w-100 mt-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-phone"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingdescription"
                      placeholder="description"
                      name="description"
                      value={tripData.description}
                      onChange={setData}
                    />
                    <label htmlFor="floatingdescription">Description</label>
                  </div>
                </div>
              </div>

              {/* Whats app number */}
              <div className="w-100 mt-3">
                <div className="input-group mb-3">
                  <span className="input-group-text">
                    <i className="fas fa-city"></i>
                  </span>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingwhatsapp"
                      placeholder="whatsapp"
                      name="whatsapp"
                      value={tripData.whatsapp}
                      onChange={setData}
                    />
                    <label htmlFor="floatingwhatsapp">Whatsapp number</label>
                  </div>
                </div>
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
      </div>
      <Footer/>
    </>
  );
};

export default AddTrip;
