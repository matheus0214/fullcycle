import { IProductRepository } from "../../../domain/product/repository/product-repository.interface";
import { CreateProductUsecase } from "./create.product.usecase";

const MockRepository = (): IProductRepository => {
  return {
    create: jest.fn(),
    update: jest.fn(),
    find: jest.fn(),
    findAll: jest.fn(),
  };
};

describe("Create product usecase unit test", () => {
  it("should be able to create a new product", async () => {
    const input = {
      type: "a",
      name: "Mochila",
      price: 120.0,
    };

    const repository = MockRepository();
    const usecase = new CreateProductUsecase(repository);

    const spy = jest.spyOn(repository, "create");

    const output = await usecase.execute(input);

    expect(output).toEqual({
      id: expect.any(String),
      name: "Mochila",
      price: 120.0,
    });

    expect(spy).toBeCalled();
  });
});
