import { Product } from "../domain/product.entity";

export interface IProductGateway {
  findAll(): Promise<Product[]>;
  findOne(id: string): Promise<Product>;
}
