import { Post } from './../models/post';
import { BaseDatabase } from "./BaseDatabase";

export class PostDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_posts";

  async createPost(post: Post) {
    try {
      await PostDatabase.connection
        .insert({
          id: post.getId(),
          photo: post.getPhoto(),
          description: post.getDescription(),
          type: post.getType(),
          created_at: post.getCreatedAt(),
          author_id: post.getAuthorId()
        })
        .into(PostDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async getPostById(id: string){
    const queryResult: any = await PostDatabase.connection(PostDatabase.TABLE_NAME)
    .select("*")
    .where({ id })
    return queryResult
  }
}
