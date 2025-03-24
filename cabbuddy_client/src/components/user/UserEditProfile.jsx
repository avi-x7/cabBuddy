import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserHeader from "./Userheader";
import Footer from "../common/Footer";
const UserEditProfile = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("key");
  const url = "http://localhost:3000/u/getprofile";

  const Edit_Profile_url = "http://localhost:3000/u/getprofile";

  const [user, setUser] = useState({});

  useEffect(() => {
    if (!token || token == null) {
      navigate("/u/login");
    } else {
      fetchUserDetails();
    }
  }, []);

  const fetchUserDetails = async (token) => {
    try {
      const params = { token: token };
      const serverResponse = await axios.get(url, { params });
      setUser(serverResponse.data.userO);
    } catch (err) {
      console.log(err.message)
    }
  };

   //edit profile code
   const fetchdata=()=>{
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
}
const submitData=async(e)=>{
    e.preventDefault()
    try{
        const params={useremail:tokenEmail}

        const serverResponse=await axios.put(Edit_Profile_URL ,user,{params})
        console.log(serverResponse)

    }
    catch(err){console.log(err.messsage)}
};


  return (
    <>
      <UserHeader />
      <div className="card mx-auto shadow" style={{ width: "18rem" }}>
            <form>
        <img
          src={`http://localhost:3000/profilePics/${user.profilePic}`}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">Phone :
            <input type="text" name="phone" value={user.phone} className="form-control" required onChange={fetchData} /></h5>
          <p className="card-text">City :
            <input type="text" name="city" value={user.city} className="form-control" required onChange={fetchData}/> </p>
          <p className="card-text">Address :
            <textarea name="address" className='form-control'required onChange={fetchData}
            value={user.address}> </textarea>
            </p>

            <button>EditProfile</button>
        </div>
        </form>
      </div>
      <Footer/>
    </>
  );
};

export default UserEditProfile;
