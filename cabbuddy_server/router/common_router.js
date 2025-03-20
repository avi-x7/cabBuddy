import express from 'express'
import { addContact } from "../controller/common_controller.js";

const commonRoute=express.Router()

commonRoute.post("/addcontacts",addContact)

export default commonRoute