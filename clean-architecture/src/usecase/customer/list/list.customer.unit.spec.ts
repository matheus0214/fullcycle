import { CustomerFactory } from "../../../domain/customer/factories/customer.factory";
import { Address } from "../../../domain/customer/value-object/address";
import { ListCustomerUseCase } from "./list.customer.usecase";

const customer1 = CustomerFactory.createWithAddress(
  "Alejandro Mann",
  new Address("Street", 78, "789-456", "City")
);

const customer2 = CustomerFactory.createWithAddress(
  "Winnie Jensen",
  new Address("Street 2", 79, "456-123", "City 2")
);

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn().mockReturnValue([customer1, customer2]),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("List customer usecase unit test", () => {
  it("should list a customer", async () => {
    const usecase = new ListCustomerUseCase(MockRepository());
    const output = await usecase.execute({});

    expect(output.customers.length).toBe(2);
    expect(output.customers[0].id).toEqual(customer1.id);
    expect(output.customers[0].address.city).toEqual(customer1.address.city);
    expect(output.customers[1].id).toEqual(customer2.id);
    expect(output.customers[1].address.city).toEqual(customer2.address.city);
  });
});
