import connection from "../database/connection";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";

export async function createProduct(
  req: Request,
  res: Response
): Promise<void> {
  let statusCode = 400;
  try {
    const { name, price, image_url } = req.body;

    if (!name || !price || !image_url) {
      statusCode = 422;
      throw new Error("Todos os parametros devem ser passados.");
    }

    await connection("labecommerce_products").insert({
      id: uuidv4(),
      name,
      price,
      image_url,
    });

    res.status(201).end();
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
