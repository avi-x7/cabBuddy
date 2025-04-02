import express from "express"
import {adminLogin, allContacts, allFeedbacks} from '../controller/admin_controller.js'
const admin_router = express.Router()

admin_router.post('/login',adminLogin)
admin_router.get('/allcontacts',allContacts)
admin_router.get('/allfeedbacks',allFeedbacks)


export default admin_router


