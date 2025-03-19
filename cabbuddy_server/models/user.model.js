import mongoose from "mongoose"
const User = new mongoose.Schema({
    userName: { type: String, required: true },
    userEmail: { type: String, required: true },
    password: { type: String , required: true},
    confirmPassword: { type: String },
    phone: { type: Number , required: true},
    gender: { type: String },
    city: { type: String , required: true},
    address: { type: String , required: true},
    profilePic: { type: String },
    date: { type: String, default: (new Date().toISOString().split("T"))[0] }
})

const user_reg = mongoose.model("userauth", User)
export default user_reg


