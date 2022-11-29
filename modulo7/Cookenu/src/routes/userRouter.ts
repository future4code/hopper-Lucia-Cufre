import { UserController } from './../controller/userController';
import express from "express"

export const userRouter = express.Router()
const userController = new UserController()

userRouter.post("/signup", userController.signup)
userRouter.post("/login", userController.login)
userRouter.post("/follow", userController.followUser)
userRouter.get("/profile", userController.getProfile)
userRouter.get("/:id", userController.getUserProfile)
userRouter.get("/feed", userController.getFeed)
userRouter.delete("/unfollow", userController.unfollowUser)
