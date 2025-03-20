import mongoose from 'mongoose'
const contactSchema=new mongoose.Schema({
userName:{type:String,required:true},
userEmail:{type:String,required:true},
message:{type:String,required:true},
dat:{type:String,default:new Date().toISOString().split('T')[0]},



})
const contact=mongoose.model("contact",contactSchema)
export default contact