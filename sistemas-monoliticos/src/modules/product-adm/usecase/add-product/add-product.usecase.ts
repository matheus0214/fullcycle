import { Product } from "../../domain/product.entity";
import { IProductGateway } from "../../gateway/product.gateway";
import { IAddProductInputDTO, IAddProductOutputDTO } from "./add-product.dto";

export class AddProductUseCase {
  constructor(private productRepository: IProductGateway) {}

  async execute(input: IAddProductInputDTO): Promise<IAddProductOutputDTO> {
    const product = new Product({
      name: input.name,
      description: input.description,
      purchasePrice: input.purchasePrice,
      stock: input.stock,
    });

    await this.productRepository.add(product);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      purchasePrice: product.purchasePrice,
      stock: product.stock,
      createdAt: product.createdAt,
      updatedAt: product.updatedAt,
    };
  }
}
