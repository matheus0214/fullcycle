import { v4 } from "uuid";
import { Customer } from "../entity/customer";
import { Address } from "../value-object/address";

export class CustomerFactory {
  public static create(name: string): Customer {
    return new Customer(v4(), name);
  }

  public static createWithAddress(name: string, address: Address): Customer {
    const customer = new Customer(v4(), name);
    customer.changeAddress(address);
    customer.activate();

    return customer;
  }
}
