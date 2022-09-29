import { UserDataBase } from "./userDataBase";
import { ProductDataBase } from "./prductDataBase";

import BaseDataBase from "./BaseDataBase";
import { Purchase } from "../models/Purchase";

export class PurchasesDataBase extends BaseDataBase {
  public static TABLE_PURCHASES = "Labe_Purchases";

  public async createPurchase(purchase: Purchase) {
    await BaseDataBase.connection(PurchasesDataBase.TABLE_PURCHASES).insert({
      id: purchase.getId(),
      user_id: purchase.getUserId(),
      product_id: purchase.getProductId(),
      quantity: purchase.getQuantity(),
      total_price: purchase.getTotalPrice(),
    });
  }

  public async getUserPurchases(id: string) {
    const result = await BaseDataBase.connection.raw(`
        SELECT
            user.email,
            product.name AS product_name,
            product.price AS product_price,
            purchase.quantity AS product_quantity,
            purchase.total_price
        FROM ${PurchasesDataBase.TABLE_PURCHASES} as purchase
        JOIN ${UserDataBase.TABLE_USERS} as user
        ON purchase.user_id = user.id
        JOIN ${ProductDataBase.TABLE_PRODUCTS} as product
        ON purchase.product_id = product.id
        WHERE purchase.user_id = ${id};
        `);
    return result;
  }
}
