import { productMock } from "../_mocks/product.mocks";
import { MockProductRepository } from "../_mocks/repository.mocks";
import { ListProductUsecase } from "./list.product.usecase";

describe("List product usecase unit test", () => {
  it("should be able to list all products", async () => {
    const usecase = new ListProductUsecase(MockProductRepository());

    const output = await usecase.execute({});

    expect(output.products.length).toEqual(1);
    expect(output.products[0].name).toEqual(productMock.name);
    expect(output.products[0].id).toEqual(productMock.id);
    expect(output.products[0].price).toEqual(productMock.price);
  });
});
