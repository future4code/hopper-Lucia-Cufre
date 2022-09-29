import { Product } from "../models/Product";
import BaseDataBase from "./BaseDataBase";

export class ProductDataBase extends BaseDataBase {
  public static TABLE_PRODUCTS = "Labe_Products";

  public async getProducts() {
    const result = await BaseDataBase.connection(
      ProductDataBase.TABLE_PRODUCTS
    ).select();
    return result;
  }

  public async createProduct(product: Product) {
    await BaseDataBase.connection(ProductDataBase.TABLE_PRODUCTS).insert({
      id: product.getId(),
      name: product.getName(),
      price: product.getPrice(),
    });
  }

  public async getProductById(id: string) {
    const result = await BaseDataBase.connection(ProductDataBase.TABLE_PRODUCTS)
      .select()
      .where({ id });
    return result;
  }
}
