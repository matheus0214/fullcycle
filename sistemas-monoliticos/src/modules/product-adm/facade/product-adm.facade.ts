import { IUseCase } from "../../@shared/usecase/usecase.interface";
import {
  IAddProductFacadeInputDTO,
  ICheckStockFacadeInputDTO,
  ICheckStockFacadeOutputDTO,
  IProductAdmFacade,
} from "./product-adm.facade.interface";

export interface IUseCaseProps {
  addUseCase: IUseCase;
  stockUseCase: IUseCase;
}

export class ProductAdmFacade implements IProductAdmFacade {
  private _addUseCase: IUseCase;
  private _checkStockUseCase: IUseCase;

  constructor(useCaseProps: IUseCaseProps) {
    this._addUseCase = useCaseProps.addUseCase;
    this._checkStockUseCase = useCaseProps.stockUseCase;
  }

  async addProduct(input: IAddProductFacadeInputDTO): Promise<void> {
    await this._addUseCase.execute(input);
  }

  async checkStock(
    input: ICheckStockFacadeInputDTO
  ): Promise<ICheckStockFacadeOutputDTO> {
    return this._checkStockUseCase.execute(input);
  }
}
