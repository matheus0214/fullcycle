export interface IAddProductInputDTO {
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
}

export interface IAddProductOutputDTO {
  id: string;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  createdAt: Date;
  updatedAt: Date;
}
