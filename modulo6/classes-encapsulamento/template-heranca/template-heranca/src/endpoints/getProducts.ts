import { Request, Response } from "express";
import { ProductDataBase } from "../database/prductDataBase";

export const getProducts = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const productDataBase = new ProductDataBase();
    const result = await productDataBase.getProducts();
    res.status(200).send({ products: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
