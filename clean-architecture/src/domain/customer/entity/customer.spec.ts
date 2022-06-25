import { Address } from "../value-object/address";
import { Customer } from "./customer";

describe("Customer unit tests", () => {
  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "Katie Roberson");
    }).toThrowError("customer: Id is required");
  });

  it("should throw error when id is empty", () => {
    expect(() => {
      new Customer("", "");
    }).toThrowError("customer: Name is required,customer: Id is required");
  });

  it("should be able to get user id", () => {
    const customer = new Customer("123", "Katie Roberson");
    expect(customer.id).toBe("123");
  });

  it("should throw error when name is empty", () => {
    expect(() => {
      new Customer("123", "");
    }).toThrowError("customer: Name is required");
  });

  it("should change name if is valid name", () => {
    const customer = new Customer("123", "Craig Fletcher");
    expect(() => {
      customer.changeName("Ola Webb");
    }).not.toThrowError("customer: Name is required");

    expect(customer.name).toEqual("Ola Webb");
  });

  it("should throw error when name is not valid", () => {
    expect(() => {
      const customer = new Customer("123", "Craig Fletcher");
      customer.changeName("");
    }).toThrowError("customer: Name is required");
  });

  it("should activate customer", () => {
    const customer = new Customer("123", "Craig Fletcher");
    customer.changeAddress(new Address("Lathi Heights", 1817, "MF", "Rijogo"));
    expect(() => {
      customer.activate();
    }).not.toThrowError(
      "customer: Address is a mandatory field to active customer"
    );

    expect(customer.isActive()).toBeTruthy();
  });

  it("should throw error when try to activate customer without address", () => {
    const customer = new Customer("123", "Craig Fletcher");

    expect(() => {
      customer.activate();
    }).toThrowError(
      "customer: Address is a mandatory field to active customer"
    );
  });

  it("should deactivate customer", () => {
    const customer = new Customer("123", "Craig Fletcher");
    customer.changeAddress(new Address("Lathi Heights", 1817, "MF", "Rijogo"));
    expect(() => {
      customer.deactivate();
    }).not.toThrowError();

    expect(customer.isActive()).toBeFalsy();
  });

  it("should add new rewardPoints", () => {
    const customer = new Customer("123", "Craig Fletcher");

    expect(customer.rewardPoints).toEqual(0);

    customer.addRewardPoints(10);

    expect(customer.rewardPoints).toEqual(10);
  });
});
