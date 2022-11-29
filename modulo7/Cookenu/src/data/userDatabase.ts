import { RecipeDatabase } from "./recipeDatabase";
import { FollowUsers, User } from "./../model/user";
import { CustomError } from "./../error/customError";
import { BaseDatabase } from "./baseDatabase";
export class UserDatabase extends BaseDatabase {
  private static TABLE_USERS = "Cookenu_users";
  private static TABLE_FOLLOWERS = "Cookenu_user_follow";

  public signup = async (user: User) => {
    try {
      await UserDatabase.connection
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
        })
        .into(UserDatabase.TABLE_USERS);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public findUserByEmail = async (email: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_USERS)
        .select()
        .where({ email });
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getProfile = async (token: any) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_USERS)
        .select("id", "name", "email")
        .where({ id: token });
      return result;
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getUserProfile = async (id: string) => {
    try {
      const result = await UserDatabase.connection(UserDatabase.TABLE_USERS)
        .select("id", "name", "email")
        .where({ id });
      return result[0];
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public followUser = async (followUser: FollowUsers) => {
    try {
      await UserDatabase.connection
        .insert({
          id: followUser.getId(),
          userId: followUser.gerUserId(),
          userToFollowId: followUser.getUserToFollowId(),
        })
        .into(UserDatabase.TABLE_FOLLOWERS);
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public unfollowUser = async (unfollowUserId: string, userId: string) => {
    try {
      await UserDatabase.connection(UserDatabase.TABLE_FOLLOWERS)
        .where("userToFollowId", unfollowUserId)
        .andWhere("userId", userId)
        .del();
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };

  public getFeed = async (id: string) => {
    try {
      const result = await UserDatabase.connection(
        `${UserDatabase.TABLE_USERS} as u`
      )
        .select(
          "r.id",
          "r.title",
          "r.description",
          "r.createdAt",
          "r.userId",
          "u.name as userName"
        )
        .where("f.userToFollowId", "r.userId")
        .andWhere("f.userId", id)
        .join(`${RecipeDatabase.TABLE_RECIPES} r`, `u.id`, "=", "r.userId")
        .join(` ${UserDatabase.TABLE_FOLLOWERS} f`, "u.id", "=", "f.userId");
        return result
    } catch (error: any) {
      throw new CustomError(400, error.message);
    }
  };
}