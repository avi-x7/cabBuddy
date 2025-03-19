import User from "../models/user.model.js";
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

export default userRegister