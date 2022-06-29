import { Sequelize } from "sequelize-typescript";
import { Id } from "../../@shared/domain/value-object/id.value-object";

import { ProductModel } from "./product.model";
import { ProductRepository } from "./product.repository";

describe("Product repository integration test", () => {
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

  it("should find all products", async () => {
    await ProductModel.create({
      id: "1",
      name: "Product",
      description: "Description",
      salesPrice: 120,
    });

    await ProductModel.create({
      id: "2",
      name: "Product 2",
      description: "Description 2",
      salesPrice: 10,
    });

    const productRepository = new ProductRepository();

    const products = await productRepository.findAll();

    expect(products.length).toBe(2);
    expect(products[0].id).toBeInstanceOf(Id);
    expect(products[0].name).toBe("Product");
    expect(products[0].description).toBe("Description");
    expect(products[0].salesPrice).toBe(120);

    expect(products[1].id).toBeInstanceOf(Id);
    expect(products[1].name).toBe("Product 2");
    expect(products[1].description).toBe("Description 2");
    expect(products[1].salesPrice).toBe(10);
  });

  it("should find one product", async () => {
    await ProductModel.create({
      id: "1",
      name: "Product",
      description: "Description",
      salesPrice: 120,
    });

    const productRepository = new ProductRepository();

    const product = await productRepository.findOne("1");

    expect(product.id).toBeInstanceOf(Id);
    expect(product.name).toBe("Product");
    expect(product.description).toBe("Description");
    expect(product.salesPrice).toBe(120);
  });
});
