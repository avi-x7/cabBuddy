import express from "express"
import userRegister from "../controller/user_controller.js"
import { image_upload } from "../middleware/doc_upload_middleware.js"
import { userLogin,getProfile,editProfile } from "../controller/user_controller.js"
// import {  } from "../controller/user_controller.js"
// import {  } from "../controller/user_controller.js"

const user_router = express.Router()

user_router.post('/registration',image_upload, userRegister)
user_router.post('/login',userLogin)
user_router.post('/login',userLogin)
user_router.get('/getprofile',getProfile)
user_router.put('/editprofile',editProfile)

export default user_router


