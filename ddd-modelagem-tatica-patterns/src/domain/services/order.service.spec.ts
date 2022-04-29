import { Customer } from "../entity/customer";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/order_item";
import { OrderService } from "./order.service";

describe("Order service unit tests", () => {
  it("should get total of all orders", () => {
    const order = new Order("123,", "any_customer", [
      new OrderItem("1", "Item 1", 10, "any_p1", 4),
    ]);
    const order2 = new Order("123,", "any_customer", [
      new OrderItem("2", "Item 2", 10, "any_p2", 4),
    ]);

    const orderTotal = OrderService.total([order, order2]);

    expect(orderTotal).toEqual(80);
  });

  it("should place an order", () => {
    const customer = new Customer("123", "Iva Klein");
    const item1 = new OrderItem("1", "Item 1", 10, "p1", 1);

    const order = OrderService.placeOrder(customer, [item1]);

    expect(customer.rewardPoints).toEqual(5);
    expect(order.total()).toBe(10);
  });
});
