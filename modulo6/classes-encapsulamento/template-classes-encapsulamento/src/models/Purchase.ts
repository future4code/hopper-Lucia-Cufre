// type para tipar no typescript com camelCase


export class Purchase{
    constructor(
        private id: string,
        private userId: string,
        private productId: string,
        private quantity: number,
        private totalPrice: number
    ){}

    public getId(): string{
        return this.id
    }
    public getUserId(): string{
        return this.userId
    }
    public getProductId(): string{
        return this.productId
    }
    public getQuantity(): number{
        return this.quantity
    }
    public getTotalPrice(): number{
        return this.totalPrice
    }
   
}

// type para tipar no banco de dados com snake_case
export type PurchaseDB = {
    id: string,
    user_id: string,
    product_id: string,
    quantity: number,
    total_price: number
}