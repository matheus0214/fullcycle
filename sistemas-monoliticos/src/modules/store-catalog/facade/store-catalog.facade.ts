import { FindAllProductsUseCase } from "../usecase/find-all-products/find-all-products.usecase";
import { FindProductUseCase } from "../usecase/find-product/find-product.usecase";
import {
  IFindAllStoreCatalogFacadeOutputDTO,
  IFindStoreCatalogFacadeInputDTO,
  IFindStoreCatalogFacadeOutputDTO,
  IStoreCatalogFacade,
} from "./store-catalog.facade.interface";

type StoreCatalogProps = {
  findOne: FindProductUseCase;
  findAll: FindAllProductsUseCase;
};

export class StoreCatalogFacade implements IStoreCatalogFacade {
  private _findOne: FindProductUseCase;
  private _findAll: FindAllProductsUseCase;

  constructor(props: StoreCatalogProps) {
    this._findOne = props.findOne;
    this._findAll = props.findAll;
  }

  async findOne(
    input: IFindStoreCatalogFacadeInputDTO
  ): Promise<IFindStoreCatalogFacadeOutputDTO> {
    return this._findOne.execute({ productId: input.id });
  }

  async findAll(): Promise<IFindAllStoreCatalogFacadeOutputDTO[]> {
    const products = await this._findAll.execute();

    return products.products.map((current) => ({
      id: current.id,
      name: current.name,
      description: current.description,
      salesPrice: current.salesPrice,
    }));
  }
}
