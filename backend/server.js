import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import connectMongoDB from "./db/connectMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());    // To parse req.body bodies
app.use(express.urlencoded({ extended: true })); // To parse URL-encoded bodies || to parse form data(urlencoded)

app.use(cookieParser());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});