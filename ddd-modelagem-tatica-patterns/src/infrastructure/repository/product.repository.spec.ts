import { Sequelize } from "sequelize-typescript";

import { Product } from "../../domain/entity/product";
import { ProductModel } from "../db/sequelize/model/product.model";
import { ProductRepository } from "./product.repository";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logQueryParameters: false,
      sync: { force: true },
      logging: false,
    });

    sequelize.addModels([ProductModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("123", "Product 1", 12.4);

    await productRepository.create(product);

    const productModel = await ProductModel.findOne({
      where: { id: "123" },
    });

    expect(productModel?.toJSON()).toStrictEqual({
      id: "123",
      name: "Product 1",
      price: 12.4,
    });
  });

  it("should update a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("123", "Product 1", 12.4);

    await productRepository.create(product);

    product.changeName("Product Any");

    await productRepository.update(product);

    const productModel = await ProductModel.findOne({
      where: { id: "123" },
    });

    expect(productModel?.toJSON()).toStrictEqual({
      id: "123",
      name: "Product Any",
      price: 12.4,
    });
  });

  it("should find a product", async () => {
    const productRepository = new ProductRepository();
    const product = new Product("123", "Product 1", 12.4);

    await productRepository.create(product);

    const productModel = await productRepository.find("123");

    expect(productModel?.id).toEqual("123");
    expect(productModel?.name).toEqual("Product 1");
    expect(productModel?.price).toEqual(12.4);
  });

  it("should all products", async () => {
    const productRepository = new ProductRepository();
    const p1 = new Product("123", "Product 1", 12.4);
    const p2 = new Product("134", "Product 2", 4.4);
    const productsArray = [p1, p2];

    await productRepository.create(p1);
    await productRepository.create(p2);

    const products = await productRepository.findAll();

    expect(products.length).toEqual(2);
    expect(products).toEqual(productsArray);
  });
});
