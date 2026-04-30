import express from "express"
import authRoutes from "./routes/authRoutes.js"
import navRoutes from "./routes/navRoutes.js"
import dotenv from "dotenv"
import cors from "cors"


dotenv.config()

const app = express()


app.use(express.json())
app.use(cors())

app.use("/api/auth" , authRoutes )

app.use("/api/nav" , navRoutes )


app.get("/" , (req , res) => {
    res.send("Server is running !")    
})


const PORT = process.env.PORT

app.listen( PORT , () => {

    console.log(`Server is running on ${PORT}`)

} )