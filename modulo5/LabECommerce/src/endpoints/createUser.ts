import connection from "../database/connection";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export async function createUser(req: Request, res: Response): Promise<void> {
  let statusCode = 400;
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      statusCode = 422;
      throw new Error("Todos os parametros devem ser passados.");
    }

    const regExp = /^(\w+)@[a-z]+(\.[a-z]+){1,2}$/i;

    if (regExp.test(email) !== true) {
      statusCode = 422;
      throw new Error("Deve ser passado um email valido.");
    }

    await connection("labecommerce_users").insert({
      id: uuidv4(),
      name,
      email,
      password
    });

    res.status(201).end();
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
