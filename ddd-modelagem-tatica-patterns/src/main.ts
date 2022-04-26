import { Address } from "./entity/address";
import { Customer } from "./entity/customer";
import { Order } from "./entity/order";
import { OrderItem } from "./entity/order_item";

const customer = new Customer("123", "Matheus G.");
customer.address = new Address("Lathi Heights", 1817, "MF", "Rijogo");
customer.activate();

const item1 = new OrderItem("1", "Item 1", 12.5);
const item2 = new OrderItem("2", "Item 2", 50.7);

const order = new Order("456", customer._id, [item1, item2]);
