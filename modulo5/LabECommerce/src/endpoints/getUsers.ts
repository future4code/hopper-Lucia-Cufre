import connection from "../database/connection";
import { Request, Response } from "express";
import { user } from "../types";

export async function getUsers(req: Request, res: Response): Promise<void> {
  let statusCode = 400;
  try {
    const users: user[] = await connection("labecommerce_users").select();

    res.status(200).send(users);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
