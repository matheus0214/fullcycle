export interface IAddProductFacadeInputDTO {
  id?: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export interface ICheckStockFacadeInputDTO {
  productId: string;
}

export interface ICheckStockFacadeOutputDTO {
  productId: string;
  stock: number;
}

export interface IProductAdmFacade {
  addProduct(input: IAddProductFacadeInputDTO): Promise<void>;
  checkStock(
    input: ICheckStockFacadeInputDTO
  ): Promise<ICheckStockFacadeOutputDTO>;
}
