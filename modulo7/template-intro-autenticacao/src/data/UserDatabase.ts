import { user } from "../model/user";
import { BaseDatabase } from "./BaseDatabase";
export class UserDatabase extends BaseDatabase {
  private static TABLE_NAME = "Auth_signup";

  public signup = async (user: user) => {
    try {
      await UserDatabase.connection.insert({
        id: user.id,
        email: user.email,
        password: user.password
      }).into(UserDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
