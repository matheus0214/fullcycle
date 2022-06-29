export interface IFindAllProductOutputDTO {
  products: {
    id: string;
    name: string;
    description: string;
    salesPrice: number;
  }[];
}
