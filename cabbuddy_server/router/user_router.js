import express from "express"
import userRegister from "../controller/user_controller.js"
import { image_upload } from "../middleware/doc_upload_middleware.js"

const user_router = express.Router()

user_router.post('/registration',image_upload, userRegister)
export default user_router


