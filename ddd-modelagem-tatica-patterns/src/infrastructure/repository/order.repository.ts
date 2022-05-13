import { Order } from "../../domain/entity/order";
import { OrderItem } from "../../domain/entity/order_item";
import { IOrderRepository } from "../../domain/repository/order-repository.interface";
import { OrderItemModel } from "../db/sequelize/model/order-item.model";
import { OrderModel } from "../db/sequelize/model/order.model";

export class OrderRepository implements IOrderRepository {
  async create(entity: Order): Promise<void> {
    await OrderModel.create(
      {
        id: entity.id,
        customer_id: entity.customerId,
        total: entity.total(),
        items: entity.items.map((item) => ({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
        })),
      },
      {
        include: [{ model: OrderItemModel }],
      }
    );
  }

  async update(entity: Order): Promise<void> {
    Promise.all(
      entity.items.map(async (item) => {
        await OrderItemModel.upsert({
          id: item.id,
          name: item.name,
          price: item.price,
          product_id: item.productId,
          quantity: item.quantity,
          order_id: entity.id,
        });
      })
    );

    await OrderModel.update(
      {
        customer_id: entity.customerId,
        total: entity.total(),
      },
      {
        where: { id: entity.id },
      }
    );
  }

  async find(id: string): Promise<Order | null> {
    const orderModel = await OrderModel.findOne({
      where: { id },
      include: [{ model: OrderItemModel }],
    });

    return orderModel?.toJSON()
      ? new Order(
          orderModel?.id,
          orderModel.customer_id,
          orderModel.items.map((item) => {
            return new OrderItem(
              item.id,
              item.name,
              item.price,
              item.product_id,
              item.quantity
            );
          })
        )
      : null;
  }

  async findAll(): Promise<Order[]> {
    const orders = await OrderModel.findAll({
      include: [{ model: OrderItemModel }],
    });

    console.log("++++", orders[0].toJSON());

    return orders.map(
      (orderModel) =>
        new Order(
          orderModel?.id,
          orderModel.customer_id,
          orderModel.items.map((item) => {
            return new OrderItem(
              item.id,
              item.name,
              item.price,
              item.product_id,
              item.quantity
            );
          })
        )
    );
  }
}
