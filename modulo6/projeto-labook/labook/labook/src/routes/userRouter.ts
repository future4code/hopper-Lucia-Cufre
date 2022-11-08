import { UserController } from './../Controller/UserController';
import express from 'express'

export const userRouter = express.Router()

const userController = new UserController()

userRouter.post("/", userController.createUser)
