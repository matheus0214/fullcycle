import { Address } from "./domain/entity/address";
import { Customer } from "./domain/entity/customer";
import { Order } from "./domain/entity/order";
import { OrderItem } from "./domain/entity/order_item";

const customer = new Customer("123", "Matheus G.");
customer.address = new Address("Lathi Heights", 1817, "MF", "Rijogo");
customer.activate();

const item1 = new OrderItem("1", "Item 1", 12.5, "p1", 1);
const item2 = new OrderItem("2", "Item 2", 50.7, "p2", 2);

const order = new Order("456", customer.id, [item1, item2]);
