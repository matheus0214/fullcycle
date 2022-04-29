import { Product } from "../entity/product";
import { ProductService } from "./product.service";

describe("Product service unit tests", () => {
  it("should change the prices of all products", () => {
    const p1 = new Product("123", "p1", 12);
    const p2 = new Product("124", "p2", 15);
    const p3 = new Product("125", "p3", 19);
    const p4 = new Product("126", "p4", 16);

    const products = [p1, p2, p3, p4];

    ProductService.increasePrice(products, 100);

    expect(p1.price).toEqual(24);
    expect(p2.price).toEqual(30);
    expect(p3.price).toEqual(38);
    expect(p4.price).toEqual(32);
  });
});
