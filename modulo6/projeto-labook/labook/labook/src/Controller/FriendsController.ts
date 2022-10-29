import { FriendsBusiness } from "./../Business/FriendsBusiness";
import { Request, Response } from "express";
export class FriendsController {
  async createFriendship(req: Request, res: Response): Promise<void> {
    try {
      const { user_id, friend_id } = req.body;

      const friend = {
        user_id,
        friend_id,
      };

      const friendBusiness = new FriendsBusiness();
      await friendBusiness.createFriendship(friend);
      res.status(201).send({ message: "Amizade criada!" });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }
}
