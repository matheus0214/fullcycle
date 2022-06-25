import { Sequelize } from "sequelize-typescript";

import { Id } from "../../@shared/domain/value-object/id.value-object";
import { Product } from "../domain/product.entity";
import { ProductRepository } from "./product.repository";
import { ProductModel } from "./produt.model";

describe("Product repository test", () => {
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
    sequelize.close();
  });

  it("should create a product", async () => {
    const productProps = {
      id: new Id("1"),
      name: "Product 1",
      description: "Description",
      purchasePrice: 120,
      stock: 1,
    };

    const product = new Product(productProps);

    const productRepository = new ProductRepository();

    await productRepository.add(product);

    const productDb = await ProductModel.findOne({
      where: { id: productProps.id.id },
    });

    expect(productDb?.id).toEqual(productProps.id.id);
    expect(productDb?.name).toEqual(productProps.name);
    expect(productDb?.description).toEqual(productProps.description);
    expect(productDb?.purchasePrice).toEqual(productProps.purchasePrice);
    expect(productDb?.stock).toEqual(productProps.stock);
  });

  it("should find a product", async () => {
    const productRepository = new ProductRepository();

    await ProductModel.create({
      id: "1",
      name: "Product 1",
      description: "Description",
      purchasePrice: 120,
      stock: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const product = await productRepository.find("1");

    expect(product?.id.id).toEqual("1");
    expect(product?.name).toEqual("Product 1");
    expect(product?.description).toEqual("Description");
    expect(product?.purchasePrice).toEqual(120);
    expect(product?.stock).toEqual(1);
  });
});
