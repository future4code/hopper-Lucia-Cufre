import { UserBusiness } from "./../business/UserBussines";
import { Request, Response } from "express";

export class UserController {
  public createUser = async (req: Request, res: Response) => {
    try {
      const { name, email, password } = req.body;

      const body = {
        name,
        email,
        password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(body);

      res.status(201).send({ message: "Usuario criado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const userBusiness = new UserBusiness();
      const result = await userBusiness.getUsers();

      res.status(201).send(result);
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const userBusiness = new UserBusiness();
      await userBusiness.deleteUser(id);
      res.status(201).send({ message: "Usuario eliminado!" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  };
}
