import 'dotenv/config'; 
import mongoose from "mongoose"
const DB_URL = process.env.MONGO_URI

const dbConnect = async () => {
    try {
        const connection = await mongoose.connect(DB_URL)
        console.log("Connection established with database")
     }
    catch (e) {
        console.log(e.message)
    }
}

export default dbConnect