import { Sequelize } from "sequelize-typescript";
import { Product } from "../../../domain/product/entity/product";
import { ProductModel } from "../../../infrastructure/product/repository/sequelize/models/product.model";
import { ProductRepository } from "../../../infrastructure/product/repository/sequelize/product.repository";
import { productMock } from "../_mocks/product.mocks";
import { ListProductUsecase } from "./list.product.usecase";

describe("List product usecase integration test", () => {
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
  it("should be able to list all products", async () => {
    const product = new Product(
      productMock.id,
      productMock.name,
      productMock.price
    );

    const repository = new ProductRepository();

    await repository.create(product);

    const usecase = new ListProductUsecase(repository);

    const output = await usecase.execute({});

    expect(output.products.length).toEqual(1);
    expect(output.products[0].name).toEqual(productMock.name);
    expect(output.products[0].id).toEqual(productMock.id);
    expect(output.products[0].price).toEqual(productMock.price);
  });
});
