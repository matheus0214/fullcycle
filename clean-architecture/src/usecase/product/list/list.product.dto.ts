export interface IInputListProductDTO {}

type Product = {
  id: string;
  name: string;
  price: number;
};

export interface IOutputListProductDTO {
  products: Product[];
}
