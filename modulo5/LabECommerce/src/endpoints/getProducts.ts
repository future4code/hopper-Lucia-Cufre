import connection from "../database/connection";
import { Request, Response } from "express";
import { product } from "../types";

export async function getProducts(req:Request, res:Response):Promise<void>{
    let statusCode = 400
    try {
        const products: product[] = await connection("labecommerce_products").select()

        res.status(200).send(products)
    } catch (error:any) {
        res.status(statusCode).send(error.message)
    }
}