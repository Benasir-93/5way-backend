import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dataBaseConnection } from "./db.js";
import { router as userRouter } from "./routes/user.js"

dotenv.config();

//Server Setup
const app = express();
const PORT = process.env.PORT;

//Middlewares
app.use(express.json());
app.use(cors());
//Database Connection
dataBaseConnection();
//routes
app.use ("/api/userDetail",userRouter)

//Listening the Server
app.listen(PORT, () => {
    console.log(`Server Started in localhost:${PORT}`);
  });