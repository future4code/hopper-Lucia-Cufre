import { UserDTO } from "./../models/UserDTO";
import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  async create(req: Request, res: Response): Promise<void> {
    try {
      const { email, name, password } = req.body;

      const user: UserDTO = {
        email,
        name,
        password,
      };
      const userBusiness = new UserBusiness();
      await userBusiness.create(user);

      res.status(201).send({ message: "Usuário cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const userBusiness = new UserBusiness();
      const result = await userBusiness.getAll();
      res.status(200).send(result);
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}
