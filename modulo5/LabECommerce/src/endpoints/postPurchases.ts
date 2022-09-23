import connection from "../database/connection";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
export async function postPurchases(
  req: Request,
  res: Response
): Promise<void> {
  let statusCode = 400;
  try {
    const { user_id, product_id, quantity } = req.body;

    if (!user_id || !product_id || !quantity) {
      statusCode = 422;
      throw new Error("Todos os parametros devem ser passados.");
    }

    const p = await connection.raw(`
    SELECT
    price 
    FROM labecommerce_products
    WHERE id = "${product_id}"
    `);

    await connection("labecommerce_purchases").insert({
      id: uuidv4(),
      product_id,
      quantity,
      total_price: quantity * p[0][0].price,
      user_id,
    });

    res.status(201).end();
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
