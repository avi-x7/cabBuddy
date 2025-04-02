import mongoose from "mongoose";
const Trip = mongoose.Schema({
    userEmail: { type: String, required: true },
    source: { type: String, required: true },
    destination: { type: String, required: true },
    travelTime: { type: String, required: true },
    status: { type: String },
    description: { type: String, required: true },
    whatsapp: { type: String, required: true },
    totalFare: { type: String, required: true },
    estimatedFare: { type: String, required: true }

})
const aldfh = mongoose.model("Trip", Trip)
export default aldfh