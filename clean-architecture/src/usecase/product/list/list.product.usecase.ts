import { IProductRepository } from "../../../domain/product/repository/product-repository.interface";
import {
  IInputListProductDTO,
  IOutputListProductDTO,
} from "./list.product.dto";

export class ListProductUsecase {
  constructor(private productRepository: IProductRepository) {}

  async execute(input: IInputListProductDTO): Promise<IOutputListProductDTO> {
    const products = await this.productRepository.findAll();

    return {
      products: products.map((current) => ({
        id: current.id,
        name: current.name,
        price: current.price,
      })),
    };
  }
}
