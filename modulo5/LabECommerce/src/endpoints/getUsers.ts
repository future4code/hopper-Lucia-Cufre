import { product } from "./../types";
import connection from "../database/connection";
import { Request, Response } from "express";
import { user } from "../types";

export async function getUsers(req: Request, res: Response): Promise<void> {
  let statusCode = 400;
  try {
    const purchases = await connection.raw(`
        SELECT * FROM labecommerce_purchases
        JOIN labecommerce_users ON labecommerce_purchases.user_id = labecommerce_users.id
        `);

    const result = purchases[0].map((result: any) => {
      return {
        name: result.name,
        email: result.email,
        purchases: {
          productId: result.product_id,
          quantity: result.quantity,
          totalPrice: result.total_price,
        },
      };
    });

    

    res.status(200).send(result);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
