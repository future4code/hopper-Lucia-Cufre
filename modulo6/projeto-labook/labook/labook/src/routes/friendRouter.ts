import { FriendsController } from './../Controller/FriendsController';
import  express  from 'express';
export const friendRouter = express.Router()
const friendController = new FriendsController()

friendRouter.post("/", friendController.createFriendship)
