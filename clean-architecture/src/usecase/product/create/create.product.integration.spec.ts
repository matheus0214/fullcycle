import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "../../../infrastructure/product/repository/sequelize/models/product.model";
import { ProductRepository } from "../../../infrastructure/product/repository/sequelize/product.repository";
import { CreateProductUsecase } from "./create.product.usecase";

describe("Create product usecase integration test", () => {
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

  it("should be able to create a new product", async () => {
    const input = {
      type: "a",
      name: "Mochila",
      price: 120.0,
    };

    const repository = new ProductRepository();
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
