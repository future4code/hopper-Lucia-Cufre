import connection from "../database/connection";
import { Request, Response } from "express";
import { purchases } from "../types";

export async function getUserPurchases(
  req: Request,
  res: Response
): Promise<void> {
  let statusCode = 400;
  try {
    const id = req.params.user_id;

    const result = await connection(" labecommerce_purchases")
      .select()
      .where("user_id", "=", `${id}`);

    if (result.length < 1) {
      statusCode = 404;
      throw new Error("Nenhuma compra encontrada com esse usuario.");
    }

    const final = result.map((input: any) => {
      return {
        id: input.id,
        userId: input.user_id,
        productId: input.product_id,
        quantity: input.quantity,
        totalPrice: input.total_price,
      };
    });

    res.status(200).send(final);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}

const purchasesList = (input: any): purchases => {
  return {
    id: input.id,
    userId: input.user_id,
    productId: input.product_id,
    quantity: input.quantity,
    totalPrice: input.total_price,
  };
};
