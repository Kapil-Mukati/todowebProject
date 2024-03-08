import express from "express";
import { isAuthenticated } from "../middlewares/auth.js";
import { newTask, getMyTask, update, deleteTask } from "../controller/task.js";

const router = express.Router();

router.post("/new", isAuthenticated, newTask);
router.get("/my", isAuthenticated, getMyTask);

router
.route("/:id")
.put(isAuthenticated, update)
.delete(isAuthenticated, deleteTask);

export default router;