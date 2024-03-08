import mongoose from "mongoose";
import { N_User } from "./user1.js";

const taskSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    iscompleted:{
        type:Boolean,
        default:false,
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref: N_User,
        required:true,
    },

    createdAt:{
        type:Date,
        default: Date.now,
    }
})

export const N_task = mongoose.model("N_task",taskSchema);