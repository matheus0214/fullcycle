import { Product } from "./product";

describe("Product unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Product("", "Product 1", 100);
    }).toThrowError("Id is required");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Product("123", "", 100);
    }).toThrowError("Name is required");
  });

  it("should throw error when price is lass than 0", () => {
    expect(() => {
      new Product("123", "Name", -1);
    }).toThrowError("Price must be greater than 0");
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
