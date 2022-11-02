import { PurchasesDataBase } from "./../database/purchasesDataBase";
import { Request, Response } from "express";


export const getUserPurchases = async (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const id = req.params.id;
    const purchasDataBase = new PurchasesDataBase();

    const [result] = await purchasDataBase.getUserPurchases(id);

    res.status(200).send({ purchases: result });
  } catch (error) {
    res.status(errorCode).send({ message: error.message });
  }
};
