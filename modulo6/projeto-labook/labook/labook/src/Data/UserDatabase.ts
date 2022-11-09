import { User } from "./../models/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_users";

  async createUser(user: User) {
    try {
      await UserDatabase.connection
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
