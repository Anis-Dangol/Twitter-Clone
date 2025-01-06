import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookies = (userId, res) => {
    const token = jwt.sign({userId}, process.env.JWT_SECRET, {
        expiresIn: "15d",
    });

    res.cookie("jwt", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, //Miliseconds
        httpOnly: true, //Cookie cannot be accessed by client side scripts
        sameSite: "strict", // CSRF attacks cross-site request forgery attacks
        secure: process.env.Node_ENV !== "development", //Cookie only sent over HTTPS
    })
}