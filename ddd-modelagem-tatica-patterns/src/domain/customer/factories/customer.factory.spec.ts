import { Address } from "../value-object/address";
import { CustomerFactory } from "./customer.factory";

describe("Customer factory unit test", () => {
  it("should create a customer", () => {
    const customer = CustomerFactory.create("John");

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("John");
    expect(customer.address).not.toBeDefined();
  });

  it("should create a customer with address", () => {
    const address = new Address("Miggi Parkway", 1526, "212118", "Jemajacod");
    const customer = CustomerFactory.createWithAddress("John", address);

    expect(customer.id).toBeDefined();
    expect(customer.name).toBe("John");
    expect(customer.address).toBeDefined();
    expect(customer.address.city).toBe("Jemajacod");
  });
});
