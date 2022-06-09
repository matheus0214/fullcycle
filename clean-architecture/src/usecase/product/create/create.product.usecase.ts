import { ProductFactory } from "../../../domain/product/factories/product.factory";
import { IProductRepository } from "../../../domain/product/repository/product-repository.interface";
import {
  IInputCreateProductDTO,
  IOutputCreateProductDTO,
} from "./create.product.dto";

export class CreateProductUsecase {
  constructor(private productRepository: IProductRepository) {}

  async execute(
    input: IInputCreateProductDTO
  ): Promise<IOutputCreateProductDTO> {
    const product = ProductFactory.create(input.type, input.name, input.price);

    await this.productRepository.create(product);

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
