import { productMock } from "../_mocks/product.mocks";
import { MockProductRepository } from "../_mocks/repository.mocks";
import { UpdateProductUsecase } from "./update.product.usecase";

describe("Update product usecase unit test", () => {
  it("should be albe to update a product", async () => {
    const input = {
      id: productMock.id,
      name: "Lancheira",
      price: 20,
    };

    const usecase = new UpdateProductUsecase(MockProductRepository());

    const output = await usecase.execute(input);

    expect(output).toEqual({
      id: productMock.id,
      name: "Lancheira",
      price: 20,
    });
  });

  it("should be able to find a product", async () => {
    const repository = MockProductRepository();

    jest.spyOn(repository, "find").mockReturnValueOnce(Promise.resolve(null));

    const usecase = new UpdateProductUsecase(repository);

    const input = {
      id: productMock.id,
      name: "Lancheira",
      price: 20,
    };

    await expect(() => usecase.execute(input)).rejects.toThrow(
      "Product not found"
    );
  });
});
