import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { Product } from "../../domain/product.entity";
import { IProductGateway } from "../../gateway/product.gateway";
import { FindAllProductsUseCase } from "./find-all-products.usecase";

const product = new Product({
  id: new Id("123"),
  description: "Description",
  name: "Product",
  salesPrice: 120,
});

const product2 = new Product({
  id: new Id("456"),
  description: "Description 2",
  name: "Product 2",
  salesPrice: 19,
});

const mockRepository = (): IProductGateway => {
  return {
    findAll: jest.fn().mockReturnValue([product, product2]),
    findOne: jest.fn(),
  };
};

describe("Find all products usecase unit test", () => {
  it("should be able to get all products", async () => {
    const useCase = new FindAllProductsUseCase(mockRepository());

    const output = await useCase.execute();

    expect(output.products.length).toBe(2);
    expect(output.products).toEqual([
      {
        id: product.id.id,
        name: product.name,
        description: product.description,
        salesPrice: product.salesPrice,
      },
      {
        id: product2.id.id,
        name: product2.name,
        description: product2.description,
        salesPrice: product2.salesPrice,
      },
    ]);
  });
});
