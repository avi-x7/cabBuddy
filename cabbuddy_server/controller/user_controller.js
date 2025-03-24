import User from "../models/user.model.js";
//userEdit Profile
export const editProfile=async(request,response)=>{
const userObject=request.body
const {phone,city,address}=userObject 
const{email}=request.query


}



const userRegister = async (req, res) => {
    const registerData = req.body
    const { userName, userEmail, password, confirmPassword, phone, gender, city, address, profilePic } = registerData
    try {
        const pic = req.file.filename
console.log(pic)

        const userRegDoc = new User({ userName, userEmail, password, confirmPassword, phone, gender, city, address, profilePic:pic })
        await userRegDoc.save()
        res.status(201).json({ "message": "Registration successfull !!" })
    }
    catch (e) {
        console.log(e.message); //rtewtwnrnn

    }
}

export const userLogin = async (request, response) => {
    const userdata = request.body
    const { userName, password } = userdata
    console.log(password);
    console.log(userName);


    try {
        const userobject = await User.findOne({ userName: userName })
        //console.log(userobject);
        if (userobject != null) {
            if (userobject.password === password) {
                console.log("passsworddddd is : ", userobject.password)
                return response.json({ "message": "Hello " + userobject.userName, "status": "Success", "token": userobject.password })
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

export const getProfile = async (req, res) => {
    const { token } = req.query

    try {
      const  userO = await  User.findOne({userEmail:"a@gmail.com"})
      console.log(userO)
      res.status(200).json({userO})
    }
    catch { }
}
export default userRegister