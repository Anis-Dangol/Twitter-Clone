import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getNotifications, deleteNotifications, /*deleteNotificationsById*/ } from "../controllers/notification.controller.js";

const router = express.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);
// router.delete("/:id", protectRoute, deleteNotificationsById);    //for deleting a single notification by id


export default router;