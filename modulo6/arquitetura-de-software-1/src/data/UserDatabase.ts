import { user } from "./../types/user";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {
  public createUser = async (user: user) => {
    try {
      await UserDatabase.connection("User_Arq").insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password,
      });
    } catch (error: any) {
      throw new Error(error.message);
    }
  };

  public getUsers = async () => {
    try {
      const result = await UserDatabase.connection("User_Arq").select();
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public getUserById = async (id: string) => {
    try {
      const result = await UserDatabase.connection("User_Arq")
        .select()
        .where("id", "=", id);
      return result;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
  public deleteUser = async (id: string) => {
    try {
      await UserDatabase.connection("User_Arq").del().where("id", "=", id);
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
}
