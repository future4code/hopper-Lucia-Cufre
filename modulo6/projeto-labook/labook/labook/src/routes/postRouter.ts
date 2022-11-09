import { PostController } from './../Controller/PostController';
import  express  from 'express';
export const postRouter = express.Router()
const postController = new PostController()

postRouter.post("/", postController.createPost)
postRouter.get("/:id", postController.getPost)