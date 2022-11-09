import { UserDTO } from "./../models/userDTO";
import { UserBusiness } from "./../Business/UserBusiness";
import { Request, Response } from "express";

export class UserController {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const { name, email, password } = req.body;
      const user: UserDTO = {
        name,
        email,
        password,
      };

      const userBusiness = new UserBusiness();
      await userBusiness.createUser(user);
      res.status(201).send({ message: "Usuario criado com sucesso!" });
    } catch (error: any) {
      res
        .status(error.statusCode || 400)
        .send(error.message || error.sqlMessage);
    }
  }
}
