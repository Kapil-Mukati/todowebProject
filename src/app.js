import express from "express";
import { config } from "dotenv";
import userRouter from "../routes/user.js";
import taskRouter from "../routes/task.js";
import cookieParser from "cookie-parser";
import cors from "cors";

// configuration.....
config({
    path: "./data/config.env"
})

// app...
const app = express();

// Middelwares.....
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: [process.env.FRONTEND_URL],
      methods: ["GET", "POST", "PUT", "DELETE"],
      credentials: true,
    })
);

// using routes
app.use("/app/v1/users", userRouter);
app.use("/app/v1/task", taskRouter);
app.get("/", (req, res) => {
    res.send("Not Working......");
})


// -------------------------------------------------------------------------------------------------
export { app };

