import express from "express";
import { config } from "dotenv";
import userRouter from "../routes/user.js";
import taskRouter from "../routes/task.js";
import cookieParser from "cookie-parser";

// configuration.....
config({
    path: "./data/config.env"
})

// app...
const app = express();

// Middelwares.....
app.use(express.json());
app.use(cookieParser());

// using routes
app.use("/app/v1/users", userRouter);
app.use("/app/v1/task", taskRouter);
app.get("/", (req, res) => {
    res.send("Working......");
})


// -------------------------------------------------------------------------------------------------
export { app };

