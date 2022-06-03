import { CustomerFactory } from "../../../domain/customer/factories/customer.factory";
import { Address } from "../../../domain/customer/value-object/address";
import { UpdateCustomerUseCase } from "./update.customer.usecase";

const customer = CustomerFactory.createWithAddress(
  "Austin Townsend",
  new Address("Nehrig Loop", 762, "89656789", "Hopaaz")
);

const input = {
  id: customer.id,
  name: "Viola Townsend",
  address: {
    street: "Wuot View",
    number: 1817,
    zip: "8263159",
    city: "Fahenog",
  },
};

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(customer),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Update customer usecase unit test", () => {
  it("should update a customer", async () => {
    const customerRepository = MockRepository();
    const customerUpdateUseCase = new UpdateCustomerUseCase(customerRepository);

    const output = await customerUpdateUseCase.execute(input);

    expect(output).toEqual(input);
  });
});
