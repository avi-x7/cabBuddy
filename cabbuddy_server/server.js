import cors from 'cors'
import express from 'express'
import dbConnect from './database/dbConnection.js'
import user_router from './router/user_router.js'
import admin_router from './router/admin_router.js'

const app = express()
const port = 3000

// Data base connectin code
dbConnect()

app.use(express.json()) // middle ware)
app.use(cors())
app.use(express.static("public"))
app.use("/u", user_router)
app.use("/a", admin_router)

app.listen(port, () => {
    console.log(`server is opened on : ${port}`)
})

