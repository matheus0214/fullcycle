import { v4 } from "uuid";

import { Product } from "../entity/product";
import { ProductB } from "../entity/product-b";
import { IProduct } from "../entity/product.interface";

export class ProductFactory {
  public static create(type: string, name: string, price: number): IProduct {
    switch (type) {
      case "a":
        return new Product(v4(), name, price);
      case "b":
        return new ProductB(v4(), name, price);
      default:
        throw new Error("Invalid product type");
    }
  }
}
