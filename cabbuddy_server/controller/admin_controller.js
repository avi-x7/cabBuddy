import Contact from "../models/contact.model.js"
import Admin from '../models/admin.model.js'
export const adminLogin = async (request, response) => {
    const userdata = request.body
    const { userEmail, password } = userdata
    try {
        const userobject = await User.findOne({ userEmail: userEmail })
        //console.log(userobject);
        if (userobject != null) {
            if (userobject.password === password) {
                // console.log("passsworddddd is : ", userobject.password)
                return response.json({ "message": "Login successfull 🚀🚀", name: userobject.userName, "status": "Success", "token": userobject.userEmail })
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

export const allContacts = async (req, res) => {
    try { 
        const contactDocs =await Contact.find()
        res.status(200).json({"contactQuery":contactDocs})
    }
    catch (err) {
        console.log(err);

    }
}