import express, { Router } from "express";
// import db from "./database.js";
import bodyParser from "body-parser";
import dotenv from "dotenv"
import router from "./routes/route.js";
const  app = express()

dotenv.config()
const PORT = process.env.PORT


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use("/", router)

app.listen(PORT, () => {
    console.log('server berjalan di http://localhost:' + PORT);
})