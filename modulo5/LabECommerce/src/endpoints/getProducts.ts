import connection from "../database/connection";
import { Request, Response } from "express";
import { product } from "../types";

export async function getProducts(req: Request, res: Response): Promise<void> {
  let statusCode = 400;
  try {
    let search = req.query.search;
    let order = req.query.order as string;
    let sort = "name";

    if (
      order &&
      order.toUpperCase() !== "ASC" &&
      order.toUpperCase() !== "DESC"
    ) {
      sort = "%";
      order = "%";
    }

    const products: product[] = await connection("labecommerce_products")
      .where("name", "like", `%${search}%`)
      .orderBy(sort, order);

    const allProducts = await connection("labecommerce_products").select();

    if (!search) {
      res.status(200).send(allProducts);
    }

    res.status(200).send(products);
  } catch (error: any) {
    res.status(statusCode).send(error.message);
  }
}
