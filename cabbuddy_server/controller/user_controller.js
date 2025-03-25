import User from "../models/user.model.js";
import Feedback from "../models/feedback.model.js"
//userEdit Profile
export const editProfile = async (request, response) => {
    console.log("reques received : ", request.body)
    const userObject = request.body
    const { phone, city, address } = userObject
    const { useremail } = request.query

    try {
        const filterCondition = { userEmail: useremail }
        const modifiedData = { $set: { phone, city, address } }
        const updateStatus = await User.updateOne(filterCondition, modifiedData)
        console.log("updated status is : ", updateStatus)
        response.status(200).json({ "message": updateStatus })
    }
    catch (e) {
        console.log(e);

    }
}


// user Registration
const userRegister = async (req, res) => {
    const registerData = req.body
    const { userName, userEmail, password, confirmPassword, phone, gender, city, address, profilePic } = registerData
    try {
        const pic = req.file.filename
        // console.log("pic is",pic)

        const userRegDoc = new User({ userName, userEmail, password, confirmPassword, phone, gender, city, address, profilePic: pic })
        await userRegDoc.save()
        res.status(201).json({ "message": "Registration successfull !!" })
    }
    catch (e) {
        console.log(e.message); //rtewtwnrnn

    }
}

// user LOgin
export const userLogin = async (request, response) => {
    const userdata = request.body
    const { userEmail, password } = userdata
    try {
        const userobject = await User.findOne({ userEmail: userEmail })
        //console.log(userobject);
        if (userobject != null) {
            if (userobject.password === password) {
                // console.log("passsworddddd is : ", userobject.password)
                return response.json({ "message": "Login successfull 🚀🚀",name:userobject.userName, "status": "Success", "token": userobject.userEmail })
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
// Fetch user profile
export const getProfile = async (req, res) => {
    const { token } = req.query

    try {
        const userO = await User.findOne({ userEmail: token })
        // console.log(userO)
        res.status(200).json({ userO })
    }
    catch (e) { console.log(e.message) }
}

// Add user feedback
export const addFeedback = async (req, res) => {
    const feedData = req.body
    const { userName, userEmail, message, rating } = feedData
 try{
    const feedDoc = new Feedback({ userName, userEmail, message, rating })
    feedDoc.save()
    res.status(200).json({"message":"Thanks for your valueable feedback"})
 }
 catch(e){
    console.log(e)
 }   
}





export default userRegister