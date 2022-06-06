import { AddProductUseCase } from "./add-product.usecase";

const mockRepository = () => ({
  add: jest.fn(),
  find: jest.fn(),
});

describe("Add product usecase unit test", () => {
  it("should add a product", async () => {
    const productRepository = mockRepository();
    const usecase = new AddProductUseCase(productRepository);

    const input = {
      name: "Product 1",
      description: "Any product description",
      purchasePrice: 100,
      stock: 20,
    };

    const result = await usecase.execute(input);

    expect(productRepository.add).toHaveBeenCalled();
    expect(result.id).toBeDefined();
    expect(result.name).toEqual(input.name);
    expect(result.description).toEqual(input.description);
    expect(result.purchasePrice).toEqual(input.purchasePrice);
    expect(result.stock).toEqual(input.stock);
    expect(result.createdAt).toBeDefined();
    expect(result.updatedAt).toBeDefined();
  });
});
