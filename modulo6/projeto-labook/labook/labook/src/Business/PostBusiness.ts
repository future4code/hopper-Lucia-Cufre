import { NotFound } from "./../error/NotFound";
import { InvalidRequest } from "./../error/InvalidRequest";
import { Post } from "../models/post";
import { dateFormatMySql } from "../services/dateFormat";
import { PostDatabase } from "./../Data/PostDatabase";
import { generateId } from "./../services/generateId";
export class PostBusiness {
  async createPost(input: any): Promise<void> {
    try {
      const { photo, description, type, authorId, createdAt } = input;

      if (!photo || !description || !type || !authorId || !createdAt) {
        throw new InvalidRequest();
      }

      const id: string = generateId();
      const created = dateFormatMySql(createdAt);
      const date = new Date(created)
      const post = new Post(id, photo, description, type, date, authorId);
      const postDatabase = new PostDatabase();
      await postDatabase.createPost(post);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getPost(id: string) {
    try {
      const postDatabase = new PostDatabase();
      const result = await postDatabase.getPostById(id);
      if (!result[0]) {
        throw new NotFound();
      }
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
