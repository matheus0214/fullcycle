import { IProductRepository } from "../../../domain/product/repository/product-repository.interface";
import {
  IInputFindProductDTO,
  IOutputFindProductDTO,
} from "./find.product.dto";

export class FindProductUsecase {
  constructor(private productRepository: IProductRepository) {}

  async execute(input: IInputFindProductDTO): Promise<IOutputFindProductDTO> {
    const product = await this.productRepository.find(input.id);

    if (!product) {
      throw new Error("Product not found");
    }

    return {
      id: product.id,
      name: product.name,
      price: product.price,
    };
  }
}
