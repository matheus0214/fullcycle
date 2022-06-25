import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Product("", "Product 1", 100);
    }).toThrowError("product: Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "", 100);
    }).toThrowError("product: Name is required");
  });

  it("should throw error when id and name is empty", () => {
    expect(() => {
      new Product("", "", 100);
    }).toThrowError("product: Id is required,product: Name is required");
  });

  it("should throw error when id and is empty and price is lessa than 0", () => {
    expect(() => {
      new Product("", "", -10);
    }).toThrowError(
      "product: Id is required,product: Name is required,product: Price must be greater than 0"
    );
  });

  it("should throw error when price is lass than 0", () => {
    expect(() => {
      new Product("123", "Name", -1);
    }).toThrowError("product: Price must be greater than 0");
  });

  it("should change name", () => {
    const product = new Product("123", "Name", 10);

    product.changeName("any");

    expect(product.name).toEqual("any");
  });

  it("should change price", () => {
    const product = new Product("123", "Name", 10);

    product.changePrice(150);

    expect(product.price).toEqual(150);
  });
});
