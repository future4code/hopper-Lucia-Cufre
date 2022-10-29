import { Friend } from "./../models/friend";
import { InvalidRequest } from "./../error/InvalidRequest";
import { FriendsDatabase } from "../Data/FriendsDatabase";
export class FriendsBusiness {
  async createFriendship(input: any): Promise<void> {
    try {
      const { user_id, friend_id } = input;

      if (!user_id || !friend_id) {
        throw new InvalidRequest();
      }

      const friend = new Friend(user_id, friend_id);
      const friendDatabase = new FriendsDatabase();
      await friendDatabase.createFriendship(friend);
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
