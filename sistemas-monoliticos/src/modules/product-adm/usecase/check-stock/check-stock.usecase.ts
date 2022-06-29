import { IUseCase } from "../../../@shared/usecase/usecase.interface";
import { IProductGateway } from "../../gateway/product.gateway";
import {
  ICheckStockProductInputDTO,
  ICheckStockProductOutputDTO,
} from "./check-stock.dto";

export class CheckStockUseCase implements IUseCase {
  constructor(private _productRepository: IProductGateway) {}

  async execute(
    input: ICheckStockProductInputDTO
  ): Promise<ICheckStockProductOutputDTO> {
    const product = await this._productRepository.find(input.productId);

    if (!product) {
      throw new Error("Product not found");
    }

    return { stock: product.stock, productId: product.id.id };
  }
}
