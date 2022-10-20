import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  async createUser({ id, name, email, password }: any) {
    try {
      await UserDatabase.connection
        .insert({
          id,
          name,
          email,
          password,
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
