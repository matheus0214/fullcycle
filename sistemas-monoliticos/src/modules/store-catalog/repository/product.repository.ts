import { Id } from "../../@shared/domain/value-object/id.value-object";
import { Product } from "../domain/product.entity";
import { IProductGateway } from "../gateway/product.gateway";
import { ProductModel } from "./product.model";

export class ProductRepository implements IProductGateway {
  async findAll(): Promise<Product[]> {
    const products = await ProductModel.findAll();

    return products.map(
      (current) =>
        new Product({
          id: new Id(current.id),
          description: current.description,
          name: current.name,
          salesPrice: current.salesPrice,
        })
    );
  }

  async findOne(id: string): Promise<Product> {
    const product = await ProductModel.findOne({ where: { id } });

    if (!product) {
      throw new Error("Product not found");
    }

    return new Product({
      id: new Id(product.id),
      description: product.description,
      name: product.name,
      salesPrice: product.salesPrice,
    });
  }
}
