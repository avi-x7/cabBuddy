import express from "express"
// import userRegister, { addFeedback } from "../controller/user_controller.js"
// import { image_upload } from "../middleware/doc_upload_middleware.js"
// import { userLogin,getProfile,editProfile, addContact } from "../controller/user_controller.js"
import {adminLogin, allContacts} from '../controller/admin_controller.js'
const admin_router = express.Router()

admin_router.post('/login',adminLogin)
admin_router.get('/allcontacts',allContacts)
// admin_router.post('/registration',image_upload, userRegister)
// admin_router.post('/login',userLogin)
// admin_router.put('/editprofile',editProfile)
// admin_router.post('/addfeedback',addFeedback)
// admin_router.post('/addcontact',addContact)

export default admin_router


