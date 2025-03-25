import mongoose from "mongoose"
const Feedback = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: String, required: true },
    date: { type: String, default: (new Date().toISOString().split("T"))[0] }

})
const add_feed = mongoose.model("feedback",Feedback)
export default add_feed