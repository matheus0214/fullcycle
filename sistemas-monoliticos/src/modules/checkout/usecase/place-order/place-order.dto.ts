export interface IPlaceOrderInputDTO {
  clientId: string;
  products: {
    productId: string;
  }[];
}

export interface IPlaceOrderOutputDTO {
  id: string;
  invoiceId: string;
  status: string;
  total: number;
  products: {
    productId: string;
  }[];
}
