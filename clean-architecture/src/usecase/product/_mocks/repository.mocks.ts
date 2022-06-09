import { IProductRepository } from "../../../domain/product/repository/product-repository.interface";
import { productMock } from "./product.mocks";

const MockProductRepository = (): IProductRepository => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn().mockReturnValue(productMock),
    findAll: jest.fn().mockReturnValue([productMock]),
  };
};

export { MockProductRepository };
