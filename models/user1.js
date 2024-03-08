import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    email:{
        type:String,
        required:true,
        unique: true,
    },

    password:{
        type:String,
        required:true, 
        select: false
    },

    createdAt:{
        type: Date,
        default: Date.now,
    }
})

export const N_User = mongoose.model("N_User",userSchema);