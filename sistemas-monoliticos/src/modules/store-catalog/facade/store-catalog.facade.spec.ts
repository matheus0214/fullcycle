import { Sequelize } from "sequelize-typescript";
import { FacadeFactory } from "../factory/facade.factory";
import { ProductModel } from "../repository/product.model";

describe("Store catalog facade integration test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should be able to find one product", async () => {
    await ProductModel.create({
      id: "1",
      name: "Product",
      description: "Product description",
      salesPrice: 120,
    });

    const storeCatalogFacade = FacadeFactory.create();

    const output = await storeCatalogFacade.findOne({ id: "1" });

    expect(output.id).toEqual("1");
    expect(output.name).toEqual("Product");
    expect(output.description).toEqual("Product description");
    expect(output.salesPrice).toEqual(120);
  });

  it("should be able to find all products", async () => {
    await ProductModel.create({
      id: "1",
      name: "Product",
      description: "Product description",
      salesPrice: 120,
    });

    await ProductModel.create({
      id: "2",
      name: "Product 2",
      description: "Product description 2",
      salesPrice: 10,
    });

    const storeCatalogFacade = FacadeFactory.create();

    const output = await storeCatalogFacade.findAll();

    expect(output.length).toEqual(2);

    expect(output).toEqual([
      {
        id: "1",
        name: "Product",
        description: "Product description",
        salesPrice: 120,
      },
      {
        id: "2",
        name: "Product 2",
        description: "Product description 2",
        salesPrice: 10,
      },
    ]);
  });
});
