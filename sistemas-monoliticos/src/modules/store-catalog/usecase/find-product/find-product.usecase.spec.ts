import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { Product } from "../../domain/product.entity";
import { IProductGateway } from "../../gateway/product.gateway";
import { FindProductUseCase } from "./find-product.usecase";

const product = new Product({
  id: new Id("1"),
  description: "Description",
  name: "Product",
  salesPrice: 120,
});

const mockRepository = (): IProductGateway => {
  return {
    findAll: jest.fn(),
    findOne: jest.fn().mockReturnValue(product),
  };
};

describe("Find product usecase unit test", () => {
  it("should be able to return a product", async () => {
    const repository = mockRepository();

    const useCase = new FindProductUseCase(repository);

    const output = await useCase.execute({ productId: product.id.id });

    expect(repository.findOne).toBeCalled();
    expect(repository.findOne).toBeCalledWith("1");

    expect(output.id).toEqual("1");
    expect(output.name).toEqual(product.name);
    expect(output.description).toEqual(product.description);
    expect(output.salesPrice).toEqual(product.salesPrice);
  });

  it("should throw if productRepository throws", async () => {
    const repository = mockRepository();
    jest.spyOn(repository, "findOne").mockImplementationOnce(() => {
      throw new Error("Product not found");
    });

    const useCase = new FindProductUseCase(repository);

    await expect(() =>
      useCase.execute({ productId: product.id.id })
    ).rejects.toThrow("Product not found");
  });
});
