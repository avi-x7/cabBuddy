import User from "../models/user.model.js";
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

export const userLogin = async (request, response) => {
    const userdata = request.body
    const { userEmail, password } = userdata
    // console.log(password);
    // console.log(userName);


    try {
        const userobject = await User.findOne({ userEmail: userEmail })
        //console.log(userobject);
        if (userobject != null) {
            if (userobject.password === password) {
                // console.log("passsworddddd is : ", userobject.password)
                return response.json({ "message": "Hello " + userobject.userName, "status": "Success", "token": userobject.userEmail })
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
        const userO = await User.findOne({ userEmail: token })
        // console.log(userO)
        res.status(200).json({ userO })
    }
    catch (e) { console.log(e.message) }
}
export default userRegister