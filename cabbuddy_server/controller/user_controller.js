import User from "../models/user.model.js";

// userRegister
const userRegister = async (req, res) => {
    const registerData = req.body
    const { userName, userEmail, password, confirmPassword, phone, gender, city, address, profilePic } = registerData
    try {const pic = req.file.filename


        const userRegDoc = new User({ userName, userEmail, password, confirmPassword, phone, gender, city, address, profilePic })
        await userRegDoc.save()
        res.status(201).json({"message":"Registration successfull !!"})
    }
    catch (e) {
        console.log(e.message); //rtewtwnrnn

    }
}


//userlogin
export const userLogin =async(req,response) =>{
    const logindata=req.body 
    const {userEmail,password}=logindata
    
    
        try {
            const userobject = await User.findOne({userEmail: userEmail })
            //console.log(userobject);
            if (userobject != null) {
                if (userobject.password === password) {
                    console.log("passsworddddd is : ",userobject.password)
                    return response.json({ "message": "Hello " + userobject.userEmail, "status": "Success", "token": userobject.userEmail })
                }
                else {
                    return response.json({ "message": "Invalid Password" })
                }
            }
            else {
                return response.json({ "message": "Email does not exist" })
            }
        }
        catch (err) {
            console.log(err.message);
        }
    }   
    
    
//userprofile
export const userProfile=async(request,response)=>{
console.log("ghcgvbj");

    const userEmail=request.query//it returns object

    const{email}=userEmail

     try{
        const userObject=await User.findOne({userEmail:email})

        return response.status(200).json({userObject})
     }
    
    catch{err}
    }  

export default userRegister