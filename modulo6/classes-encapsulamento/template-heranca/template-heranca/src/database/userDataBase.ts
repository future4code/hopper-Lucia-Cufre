import { User } from "../models/User";
import BaseDataBase from "./BaseDataBase";

export class UserDataBase extends BaseDataBase {
  public static TABLE_USERS = "Labe_Users";

  public async getAllUsers() {
    const result = await BaseDataBase.connection(
      UserDataBase.TABLE_USERS
    ).select();
    return result;
  }

  public async createUser(user: User) {
    await BaseDataBase.connection(UserDataBase.TABLE_USERS).insert({
      id: user.getId(),
      email: user.getEmail(),
      password: user.getPassword(),
    });
  }

  public async getUserById(id: string) {
    const result = await BaseDataBase.connection(UserDataBase.TABLE_USERS)
      .select()
      .where({ id });
    return result;
  }
}
