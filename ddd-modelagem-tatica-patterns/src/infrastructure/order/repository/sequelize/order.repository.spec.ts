import { Sequelize } from "sequelize-typescript";
import { Order } from "../../../../domain/checkout/entity/order";
import { OrderItem } from "../../../../domain/checkout/entity/order_item";
import { Customer } from "../../../../domain/customer/entity/customer";
import { ICustomerRepository } from "../../../../domain/customer/repository/customer-repository.interface";
import { Address } from "../../../../domain/customer/value-object/address";
import { Product } from "../../../../domain/product/entity/product";
import { IProductRepository } from "../../../../domain/product/repository/product-repository.interface";
import { CustomerRepository } from "../../../customer/repository/sequelize/customer.repository";
import { CustomerModel } from "../../../customer/repository/sequelize/models/customer.model";
import { ProductModel } from "../../../product/repository/sequelize/models/product.model";
import { ProductRepository } from "../../../product/repository/sequelize/product.repository";
import { OrderItemModel } from "./models/order-item.model";
import { OrderModel } from "./models/order.model";
import { OrderRepository } from "./order.repository";

describe("Order repository test", () => {
  let sequelize: Sequelize;
  let customer: Customer;
  let customerRepository: ICustomerRepository;
  let productRepository: IProductRepository;
  let product: Product;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logQueryParameters: false,
      sync: { force: true },
      logging: false,
    });

    sequelize.addModels([
      CustomerModel,
      ProductModel,
      OrderItemModel,
      OrderModel,
    ]);

    await sequelize.sync();

    customerRepository = new CustomerRepository();
    customer = new Customer("123", "Edwin Lucas");
    customer.changeAddress(
      new Address("Zidal Key", 1896, "189213-000", "Egfubbug")
    );
    customer.activate();
    await customerRepository.create(customer);

    productRepository = new ProductRepository();
    product = new Product("123", "Product 1", 12.4);
    await productRepository.create(product);
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a new order", async () => {
    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      1
    );

    const order = new Order("123", customer.id, [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"],
    });

    expect(orderModel?.toJSON()).toStrictEqual({
      id: "123",
      customer_id: customer.id,
      total: order.total(),
      items: [
        {
          id: orderItem.id,
          name: product.name,
          price: product.price,
          quantity: orderItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
      ],
    });
  });

  it("should update an order", async () => {
    const product2 = new Product("456", "Product 2", 10);
    await productRepository.create(product2);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      1
    );

    const order = new Order("123", customer.id, [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderItem2 = new OrderItem(
      "2",
      product2.name,
      product2.price,
      product2.id,
      2
    );

    order.addItem(orderItem2);

    await orderRepository.update(order);

    const orderModel = await OrderModel.findOne({
      where: { id: order.id },
      include: ["items"],
    });

    expect(orderModel?.toJSON()).toStrictEqual({
      id: "123",
      customer_id: customer.id,
      total: order.total(),
      items: [
        {
          id: orderItem.id,
          name: product.name,
          price: product.price,
          quantity: orderItem.quantity,
          order_id: order.id,
          product_id: product.id,
        },
        {
          id: orderItem2.id,
          name: product2.name,
          price: orderItem2.price,
          quantity: orderItem2.quantity,
          order_id: order.id,
          product_id: product2.id,
        },
      ],
    });
  });

  it("should find an order", async () => {
    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      1
    );

    const order = new Order("123", customer.id, [orderItem]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orderFind = await orderRepository.find(order.id);

    expect(orderFind).toStrictEqual(order);
  });

  it("should find all orders", async () => {
    const product2 = new Product("456", "Product 2", 10);
    await productRepository.create(product2);

    const orderItem = new OrderItem(
      "1",
      product.name,
      product.price,
      product.id,
      1
    );

    const orderItem2 = new OrderItem(
      "2",
      product2.name,
      product2.price,
      product2.id,
      2
    );

    const order = new Order("123", customer.id, [orderItem, orderItem2]);
    const orderRepository = new OrderRepository();
    await orderRepository.create(order);

    const orders = await orderRepository.findAll();

    expect(orders.length).toEqual(1);
    expect(orders).toEqual([order]);
  });
});
