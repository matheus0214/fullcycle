import { Product } from "../../../domain/product/entity/product";
import { IProductRepository } from "../../../domain/product/repository/product-repository.interface";
import {
  IInputOutputProductDTO,
  IInputUpdateProductDTO,
} from "./update.product.dto";

export class UpdateProductUsecase {
  constructor(private productRepository: IProductRepository) {}

  async execute(
    input: IInputUpdateProductDTO
  ): Promise<IInputOutputProductDTO> {
    const productFind = await this.productRepository.find(input.id);

    if (!productFind) {
      throw new Error("Product not found");
    }

    const product = new Product(input.id, input.name, input.price);

    await this.productRepository.update(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
