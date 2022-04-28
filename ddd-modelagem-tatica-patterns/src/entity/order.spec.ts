import { Customer } from "./customer";
import { Order } from "./order";
import { OrderItem } from "./order_item";

describe("Order unit tests", () => {
  const orderItem = new OrderItem("1", "Item 1", 12, "p1", 2);
  const orderItem2 = new OrderItem("2", "Item 2", 21, "p2", 2);
  it("should throw error when id is empty", () => {
    const customer = new Customer("123", "George Hampton");

    expect(() => {
      new Order("", customer.id, [orderItem]);
    }).toThrowError("Id is required");
  });

  it("should throw error when customerId is empty", () => {
    expect(() => {
      new Order("123", "", [orderItem]);
    }).toThrowError("CustomerId is required");
  });

  it("should throw error when items is empty", () => {
    const customer = new Customer("123", "George Hampton");

    expect(() => {
      new Order("123", customer.id, []);
    }).toThrowError("Items quantity must be greater than 0");
  });

  it("should returns a correct total", () => {
    const customer = new Customer("123", "George Hampton");

    const order = new Order("123", customer.id, [orderItem, orderItem2]);

    expect(order.total()).toEqual(66);
  });

  it("should throw error the item quantity is less or equal 0", () => {
    const customer = new Customer("123", "George Hampton");

    expect(() => {
      new Order("123", customer.id, [
        new OrderItem("1", "Item 1", 12, "p1", 0),
      ]);
    }).toThrow("Quantity must be greater than 0");
  });
});
