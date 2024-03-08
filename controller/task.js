import { N_task } from "../models/task.js";

export const newTask = async (req, res) => {
    try {
        const { title, description } = req.body;
        console.log(req.user);

        await N_task.create({
            title,
            description,
            user: req.user,
        })

        res
            .status(201)
            .json({
                success: true,
                message: "Task Added Successfully.",
            })

    } catch (error) {
        console.log(error);
    }
}

export const getMyTask = async (req, res) => {
    try {
        const userid = req.user._id;
        const task = await N_task.find({ user: userid })
        console.log(userid);
        res.status(200)
            .json({
                success: false,
                task,
            })
    } catch (error) {
        console.log(error);
    }
}

export const update = async (req, res, next) => {
    try {
        const { id } = req.params;
        const task = await N_task.findById(id);

        if (!task) return res.status(404).json({
            success: false,
            message: "Failed to Updated....",
        })

        task.iscompleted = !task.iscompleted;
        await task.save();

        res.status(200).json({
            success: true,
            message: "Successfully Updated....",
        })

    } catch (error) {
        console.log(error);
    }
}

export const deleteTask = async (req, res, next) => {
    try {
        const task = await N_task.findById(req.params.id);

        if (!task) return res.status(400).json({
            success: false,
            message: "Data Not Found..",
        })

        await task.deleteOne();

        res.status(200)
            .json({
                success: true,
                message: "Deleted Successfully....",
            })

    } catch (error) {
        console.log(error);
    }
}