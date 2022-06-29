export interface IFindProductInputDTO {
  productId: string;
}

export interface IFindProductOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}
