import { v4 } from "uuid";

import { Customer } from "../entity/customer";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/order_item";

export class OrderService {
  static total(orders: Order[]): number {
    return orders.reduce((acc, current) => acc + current.total(), 0);
  }

  static placeOrder(customer: Customer, orderItems: OrderItem[]): Order {
    if (orderItems.length <= 0) {
      throw new Error("Order must have at least one item");
    }

    const order = new Order(v4(), customer.id, orderItems);
    customer.addRewardPoints(order.total() / 2);

    return order;
  }
}
