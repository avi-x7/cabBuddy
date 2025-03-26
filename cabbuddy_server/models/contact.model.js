import mongoose from "mongoose"
const Contact = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    message: { type: String, required: true },
})
const add_contact= mongoose.model("contact",Contact)
export default add_contact