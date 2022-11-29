import { UserBusiness } from "./../business/userBusiness";
import { UserLoginDTO, UserSignupDTO } from "./../model/userDTO";
import { Request, Response } from "express";

const userBusiness = new UserBusiness();
export class UserController {
  public signup = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const user: UserSignupDTO = {
        name,
        email,
        password,
      };

      const token = await userBusiness.signup(user);
      res.status(201).send({ access_token: token });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const { email, password } = req.body;

      const input: UserLoginDTO = {
        email,
        password,
      };

      const token = await userBusiness.login(input);
      res.status(200).send({ access_token: token });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const user = await userBusiness.getProfile(token);

      res.status(200).send(user[0]);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getUserProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;
      const id = req.params.id;

      const user = await userBusiness.getUserProfile(id, token);

      res.status(200).send(user);
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public followUser = async (req: Request, res: Response) => {
    try {
      const userId = req.body.userToFollowId;
      const token = req.headers.authorization as string;

      await userBusiness.followUser(userId, token);
      res.status(201).send({ message: "Followed successfully" });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public unfollowUser = async (req: Request, res: Response) => {
    try {
      const userId = req.body.userToUnfollowId;
      const token = req.headers.authorization as string;

      await userBusiness.unfollowUser(userId, token);
      res.status(201).send({ message: "Unfollowed successfully" });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };

  public getFeed = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const feed = await userBusiness.getFeed(token);
      res.status(200).send({ recipes: feed});
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  };
}
