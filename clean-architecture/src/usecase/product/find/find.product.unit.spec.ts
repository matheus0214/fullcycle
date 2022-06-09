import { productMock } from "../_mocks/product.mocks";
import { MockProductRepository } from "../_mocks/repository.mocks";
import { FindProductUsecase } from "./find.product.usecase";

describe("Find product usecase unit test", () => {
  it("should be able to find a product", async () => {
    const usecase = new FindProductUsecase(MockProductRepository());

    const input = { id: productMock.id };

    const output = await usecase.execute(input);

    expect(output).toEqual({
      id: productMock.id,
      name: productMock.name,
      price: productMock.price,
    });
  });

  it("should be able to find a product", async () => {
    const repository = MockProductRepository();

    jest.spyOn(repository, "find").mockReturnValueOnce(Promise.resolve(null));

    const usecase = new FindProductUsecase(repository);

    const input = { id: productMock.id };

    await expect(() => usecase.execute(input)).rejects.toThrow(
      "Product not found"
    );
  });
});
