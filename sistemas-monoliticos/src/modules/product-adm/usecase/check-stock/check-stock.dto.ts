export interface ICheckStockProductInputDTO {
  productId: string;
}

export interface ICheckStockProductOutputDTO {
  productId: string;
  stock: number;
}
