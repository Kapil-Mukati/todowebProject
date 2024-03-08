import jwt from "jsonwebtoken";

export const sendCookies = async (user, res, message, statusCode=200) =>{
    try {
        const token = await jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

        res
        .status(statusCode)
        .cookie("token", token, {
            httpOnly: true,
            maxAge: 15 * 60 * 1000,
        })
        .json({
            success: true,
            message,
        })
    } catch (error) {
        console.log(error);
    }
}