import { N_User } from "../models/user1.js";
import bcrypt from "bcrypt";
import { sendCookies } from "../utils/features.js";


export const getLoginPage = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await N_User.findOne({ email }).select("+password");
        if (!user) return res.status(404).json({ success: false, message: "Invalid username" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(404).json({ success: false, message: "Invalid Password" });
       
        sendCookies(user, res, `Wellcome Back, ${user.name}`, 200);
    } catch (error) {
        console.log(error);
    }
}

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await N_User.findOne({ email });

        if (user) {
            return res.status(400).json({
                success: false,
                message: "User Already Exist",
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        user = await N_User.create({ name, email, password: hashedPassword });
        sendCookies(user, res,"Registered Successfully..", 201);

    } catch (error) {
        console.log(error);
    }
}


export const logout = (req, res) => {
    res
        .status(200)
        .cookie("token", "", {
            expires: new Date(Date.now())
        })
        .json({
            success: true,
            message: "Logout Successfully",
        })
}


export const getMyProfile = (req,res)=>{
   res
   .status(200)
   .json({
     success:true,
     user: req.user,
   })
}

