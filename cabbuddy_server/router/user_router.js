import express from "express"
import userRegister from "../controller/user_controller.js"
import { image_upload } from "../middleware/doc_upload_middleware.js"
import { userLogin } from "../controller/user_controller.js"
import { getProfile } from "../controller/user_controller.js"
const user_router = express.Router()

user_router.post('/registration',image_upload, userRegister)
user_router.post('/login',userLogin)
user_router.get('/getprofile',getProfile)

export default user_router


