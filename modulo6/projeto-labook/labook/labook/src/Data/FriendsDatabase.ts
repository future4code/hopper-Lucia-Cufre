import { Friend } from "../models/friend";
import { BaseDatabase } from "./BaseDatabase";

export class FriendsDatabase extends BaseDatabase {
  private static TABLE_NAME = "labook_friends";

  async createFriendship(friends: Friend) {
    try {
      await FriendsDatabase.connection
        .insert({
          user_id: friends.getUserId(),
          friend_id: friends.getFriendId(),
        })
        .into(FriendsDatabase.TABLE_NAME);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }

  async deleteFriendship(friendId: string) {
    try {
      await FriendsDatabase.connection(FriendsDatabase.TABLE_NAME)
        .where("friend_id", "=", friendId)
        .del();
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
