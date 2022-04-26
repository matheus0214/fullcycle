import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order_item";

describe("Order unit tests", () => {
  it("should throw error when id is empty", () => {
    const customer = new Customer("123", "George Hampton");

    expect(() => {
      new Order("", customer.id, [new OrderItem("1", "Item 1", 12.5)]);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", [new OrderItem("1", "Item 1", 12.5)]);
    }).toThrowError("customerId is required");
  });

  it("should throw error when items is empty", () => {
    const customer = new Customer("123", "George Hampton");

    expect(() => {
      new Order("123", customer.id, []);
    }).toThrowError("items quantity must be greater than 0");
  });

  it("should returns a correct total", () => {
    const customer = new Customer("123", "George Hampton");

    const order = new Order("123", customer.id, [
      new OrderItem("1", "Item 1", 12.5),
      new OrderItem("2", "Item 2", 21),
    ]);

    expect(order.total()).toEqual(33.5);
  });
});
