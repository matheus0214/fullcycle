import { Product } from "../../domain/product.entity";
import { IProductGateway } from "../../gateway/product.gateway";
import { CheckStockUseCase } from "./check-stock.usecase";

const product = new Product({
  name: "Product 1",
  description: "description",
  purchasePrice: 123,
  stock: 1,
});

const mockRepository = (): IProductGateway => {
  return {
    add: jest.fn(),
    find: jest.fn().mockReturnValue(product),
  };
};

describe("Check stock usecase", () => {
  it("should be able to check stock", async () => {
    const useCase = new CheckStockUseCase(mockRepository());

    const input = {
      productId: product.id.id,
    };

    const output = await useCase.execute(input);

    expect(output.stock).toEqual(product.stock);
  });

  it("should throw if product not found", async () => {
    const repository = mockRepository();

    jest.spyOn(repository, "find").mockImplementation(() => {
      throw new Error("Product not found");
    });

    const useCase = new CheckStockUseCase(repository);

    const input = {
      productId: product.id.id,
    };

    await expect(() => useCase.execute(input)).rejects.toThrow(
      "Product not found"
    );
  });
});
