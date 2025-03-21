import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router-dom'
// import UserHeader from './UserHeader'
import { useEffect,useState } from 'react'


function UserHome(){
    const navigate =useNavigate()
const tokenEmail=localStorage.getItem("key")
const URL ="http://localhost:3000/user/profile"
const[user,setuser] = useState({})

useEffect(()=>{
    if(!tokenEmail||tokenEmail==null)
    {
        navigate("/user-login")
    }

    else{
        fetctUserDetails()
    }
},[])// userEffect close

    const fetctUserDetails=async ()=>{
        try{
          console.log("wesdrftvhunj");
          
            const params={email:tokenEmail}
            const serverResponse=await axios.get(URL,{params})
            console.log(serverResponse);
            setuser(serverResponse.data.userObject)// setting User profile detail in user object

        }

        catch(error){
            console.log(error.message);
        }


}

  return(
       
<>
 <UserHeader/>


    <div className="card mx-auto shadow text-center" style={{width: "18rem", backgroundColor:"pink",margin:"100px"}}>
  <img style={{borderRadius:"50%",height:"130",width:"50%",margin:"auto"}} src={`http://localhost:3000/profilePics/${user.pic}`} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Phone : {user.phone}</h5>
    <p className="card-text">City:{user.city}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</>

  )

}
 export default UserHome