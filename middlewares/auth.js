import { N_User } from "../models/user1.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;
        if (!token) {
            return res.status(400)
                .json({
                    success: "False",
                    message: "Login first",
                })
        }

        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = await N_User.findById(decoded._id);
        next();
    } catch (error) {
        console.log(error);
    }
}







