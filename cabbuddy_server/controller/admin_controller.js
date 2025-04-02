import Contact from "../models/contact.model.js"
import Feedback from "../models/feedback.model.js"
import Admin from '../models/admin.model.js'
export const adminLogin = async (request, response) => {
    const userdata = request.body
    const { userEmail, password } = userdata
    try {
        const adminobject = await Admin.findOne({ email: userEmail })
        //console.log(adminobject);
        if (adminobject != null) {
            console.log(adminobject,password)
            if (adminobject.password == password) {
                return response.json({ "message": "Login successfull 🚀🚀", "status": "Success", "token": adminobject.email })
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

export const allFeedbacks = async (req, res) => {
    try { 
        const feedbackDocs =await Feedback.find()
        res.status(200).json({"feedbackQuery":feedbackDocs})
    }
    catch (err) {
        console.log(err);

    }
}