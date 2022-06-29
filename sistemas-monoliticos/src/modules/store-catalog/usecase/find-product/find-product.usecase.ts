import { IUseCase } from "../../../@shared/usecase/usecase.interface";
import { IProductGateway } from "../../gateway/product.gateway";
import {
  IFindProductInputDTO,
  IFindProductOutputDTO,
} from "./find-product.dto";

export class FindProductUseCase implements IUseCase {
  constructor(private _productGateway: IProductGateway) {}

  async execute(input: IFindProductInputDTO): Promise<IFindProductOutputDTO> {
    const product = await this._productGateway.findOne(input.productId);

    return {
      id: product.id.id,
      name: product.name,
      description: product.description,
      salesPrice: product.salesPrice,
    };
  }
}
