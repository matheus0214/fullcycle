import { v4 } from "uuid";
import { Order } from "../entity/order";
import { OrderItem } from "../entity/order_item";

interface IOrderProps {
  id: string;
  customerId: string;
  items: {
    id: string;
    name: string;
    productId: string;
    quantity: number;
    price: number;
  }[];
}

export class OrderFactory {
  public static create({ id, customerId, items }: IOrderProps): Order {
    const itemsEntity = items.map(
      (item) =>
        new OrderItem(
          item.id,
          item.name,
          item.price,
          item.productId,
          item.quantity
        )
    );
    const order = new Order(id, customerId, itemsEntity);

    return order;
  }
}
