import { Sequelize } from "sequelize-typescript";
import { Product } from "../../../domain/product/entity/product";
import { ProductModel } from "../../../infrastructure/product/repository/sequelize/models/product.model";
import { ProductRepository } from "../../../infrastructure/product/repository/sequelize/product.repository";
import { productMock } from "../_mocks/product.mocks";
import { UpdateProductUsecase } from "./update.product.usecase";

describe("Update product usecase integration test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
    });

    sequelize.addModels([ProductModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });
  it("should be albe to update a product", async () => {
    const product = new Product(
      productMock.id,
      productMock.name,
      productMock.price
    );

    const repository = new ProductRepository();

    await repository.create(product);

    const input = {
      id: productMock.id,
      name: "Lancheira",
      price: 20,
    };

    const usecase = new UpdateProductUsecase(repository);

    const output = await usecase.execute(input);

    expect(output).toEqual({
      id: productMock.id,
      name: "Lancheira",
      price: 20,
    });
  });

  it("should be able to find a product", async () => {
    const repository = new ProductRepository();

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
