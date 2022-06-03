import { ProductFactory } from "./product.factory";

describe("Product factory unit tests", () => {
  it("should create a product type a", () => {
    const product = ProductFactory.create("a", "Product A", 1);

    expect(product.id).toBeDefined();
    expect(product.name).toEqual("Product A");
    expect(product.price).toEqual(1);
    expect(product.constructor.name).toEqual("Product");
  });

  it("should create a product type b", () => {
    const product = ProductFactory.create("b", "Product B", 1);

    expect(product.id).toBeDefined();
    expect(product.name).toEqual("Product B");
    expect(product.price).toEqual(2);
    expect(product.constructor.name).toEqual("ProductB");
  });

  it("should throw if product type is invalid", () => {
    expect(() => ProductFactory.create("invalid", "Product B", 1)).toThrow(
      "Invalid product type"
    );
  });
});
