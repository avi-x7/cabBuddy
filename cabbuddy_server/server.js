import express from 'express'
import commonRoute from './router/common_router.js'
import dbConnect from './database/dbConnection.js'
import cors from 'cors'
import user_router from './router/user_router.js'
const app = express()
const port = 3000

// Data base connectin code
dbConnect()

app.use(express.json()) // middle ware)
app.use(cors())//to work with front end and backend
app.use(express.static("public"))//to tell the server all doc will add in this folder

app.use("/",commonRoute)
app.use("/user", user_router)

app.listen(port, () => {
    console.log(`server is opened on : ${port}`)
})

