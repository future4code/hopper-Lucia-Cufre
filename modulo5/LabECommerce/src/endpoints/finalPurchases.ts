import connection from "../database/connection";
import { Request, Response } from "express";
import { v4 as uuidv4 } from "uuid";
export async function finalPurchases(
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

    const totalPrice = await connection.raw(`
    SELECT
    ${quantity},
    prod.price,
    (${quantity} * prod.price) as totalPrice
    FROM labecommerce_purchases
    JOIN labecommerce_products as prod ON labecommerce_purchases.product_id = prod.id
    WHERE prod.id = "${product_id}"
    `);

    await connection("labecommerce_purchases").insert({
      id: uuidv4(),
      user_id,
      product_id,
      quantity,
      total_price: totalPrice,
    });

    res.status(201).end();
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
