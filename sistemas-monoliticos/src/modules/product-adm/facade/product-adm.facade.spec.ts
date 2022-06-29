import { Sequelize } from "sequelize-typescript";
import { ProductAdmFacadeFactory } from "../factory/facade.factory";

import { ProductModel } from "../repository/produt.model";

describe("ProductAdm Facade", () => {
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
  it("should create a product", async () => {
    const productFacade = ProductAdmFacadeFactory.create();

    const input = {
      name: "Product 1",
      description: "Product 1 description",
      purchasePrice: 10,
      stock: 10,
    };

    await productFacade.addProduct(input);

    const product = await ProductModel.findOne({
      where: { name: input.name },
    });

    expect(product).toBeDefined();
    expect(product?.id).toBeDefined();
    expect(product?.name).toBe(input.name);
    expect(product?.description).toBe(input.description);
    expect(product?.purchasePrice).toBe(input.purchasePrice);
    expect(product?.stock).toBe(input.stock);
  });

  it("should check a product stock", async () => {
    const productFacade = ProductAdmFacadeFactory.create();

    await ProductModel.create({
      id: "123",
      name: "Product 1",
      description: "description",
      purchasePrice: 123,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const input = {
      productId: "123",
    };

    const productStock = await productFacade.checkStock(input);

    expect(productStock).toEqual({ productId: "123", stock: 1 });
  });
});
