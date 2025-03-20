import { useState } from "react";
import Header from "./Header";
// import "./common.css";
import Footer from "./Footer"
import axios from "axios"

const Contact = () => {
const url="http://localhost:5800/addContact"

  const [contactData, setContactData] = useState({userName: "",userEmail: "", message: "",});

  const setValues = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };
  const submitData = async(e)=>{
    e.preventDefault();
    try{
      const res=await axios.post(url,contactData);
    } catch(er){
      console.log(er.message);
    }
    console.log(contactData);};

  return (
    <>
      <Header />
      <h1 className="cu-heading">Contact Us</h1>
      {/* <p className="desc">Dear Customer, if you are facing any kind of inconvenience kindly connect us on below address. Leave a message for authorities. <br />Thank you</p> */}
      <div className="container">
        <div className="right">
          <img src="/car.svg" alt="" srcSet="" width="80px" className="car" />

          <div className="r-box">
            <div className="r-sub">
              <i className="fas fa-home"></i>
              <span> 821 Pursglove Court Eldorado</span>
            </div>
            <div className="r-sub">
              <i className="fas fa-phone-alt"></i>
              <span> +1 937-273-6018</span>
            </div>
            <div className="r-sub">
              <i className="fas fa-envelope"></i>
              <span> support@cabbuddy.com</span>
            </div>
          </div>
        </div>

        <div className="left">
          <p>Leave a Message</p>
          <div className="l-box">
            <form onSubmit={submitData} method="get">
              <div className="l-box-itm">
                <label htmlFor="userName">Name:</label>
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
                <label htmlFor="message">Message:</label>
                <textarea
                  name="message"
                  placeholder="Type your message here..."
                  rows="4"
                  value={contactData.message}
                  onChange={setValues}
                  required
                ></textarea>
              </div>

              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;

