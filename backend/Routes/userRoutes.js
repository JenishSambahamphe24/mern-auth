import express from "express";
import { authUser, getUserProfile, updateUserProfile, logoutUser, registerUser } from "../controller/userController.js";
import  protect  from "../Middleware/authMiddleware.js";

const router = express.Router()

router.post("/auth" , authUser)
router.post("/logout" , logoutUser)
router.post("/",registerUser)
router.route('/profile').get(protect, getUserProfile).put( protect, updateUserProfile)
export default router
