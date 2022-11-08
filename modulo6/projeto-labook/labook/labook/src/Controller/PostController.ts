import { PostDTO } from "./../models/postDTO";
import { PostBusiness } from "./../Business/PostBusiness";
import { Request, Response } from "express";

export class PostController {
  async createPost(req: Request, res: Response): Promise<void> {
    try {
      const { photo, description, type, authorId, createdAt } = req.body;
      const post: PostDTO = {
        photo,
        description,
        type,
        authorId,
        createdAt,
      };

      const postBusiness = new PostBusiness();
      await postBusiness.createPost(post);
      res.status(201).send({ message: "Post criado com sucesso!" });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }

  async getPost(req: Request, res: Response) {
    try {
      const { id } = req.params;

      const postBusiness = new PostBusiness();
      const result = await postBusiness.getPost(id);

      res.status(200).send({ post: result });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }
}
