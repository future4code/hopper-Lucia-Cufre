import { ProductDataBase } from './../database/prductDataBase';
import { PurchasesDataBase } from './../database/purchasesDataBase';
import { UserDataBase } from './../database/userDataBase';
import { Request, Response } from "express"
import { Product } from "../models/Product"
import { Purchase } from "../models/Purchase"


export const createPurchase = async (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const userId = req.body.userId
        const productId = req.body.productId
        const quantity = req.body.quantity

        if (!userId || !productId || !quantity) {
            throw new Error("Body inválido.")
        }

        const userDataBase = new UserDataBase
        const findUser = await userDataBase.getUserById(userId) 


        if (findUser.length === 0) {
            errorCode = 404
            throw new Error("Usuário não encontrado.")
        }

        const productDataBase = new ProductDataBase
        const findProduct = await productDataBase.getProductById(productId)

        if (findProduct.length === 0) {
            errorCode = 404
            throw new Error("Produto não encontrado.")
        }
        
        // const product: Product = {
        //     id: findProduct[0].id,
        //     name: findProduct[0].name,
        //     price: findProduct[0].price
        // }

        const product = new Product(
            findProduct[0].id,
            findProduct[0].name,
            findProduct[0].price
        )

        // const newPurchase: Purchase = {
        //     id: Date.now().toString(),
        //     userId,
        //     productId,
        //     quantity,
        //     totalPrice: product.getPrice() * quantity
        // }

        const purchase = new Purchase(
            Date.now().toString(),
            userId,
            productId,
            quantity,
            product.getPrice() * quantity
        )

        const purchaseDataBase = new PurchasesDataBase
        await purchaseDataBase.createPurchase(purchase)

        res.status(201).send({ message: "Compra registrada", purchase: purchase })
    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}