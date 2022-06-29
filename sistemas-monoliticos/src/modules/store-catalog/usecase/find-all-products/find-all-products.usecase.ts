import { IUseCase } from "../../../@shared/usecase/usecase.interface";
import { IProductGateway } from "../../gateway/product.gateway";
import { IFindAllProductOutputDTO } from "./find-all-products.dto";

export class FindAllProductsUseCase implements IUseCase {
  constructor(private _productGateway: IProductGateway) {}

  async execute(): Promise<IFindAllProductOutputDTO> {
    const products = await this._productGateway.findAll();

    return {
      products: products.map((current) => ({
        id: current.id.id,
        name: current.name,
        description: current.description,
        salesPrice: current.salesPrice,
      })),
    };
  }
}
