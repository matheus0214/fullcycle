import { Customer } from "../../../domain/customer/entity/customer";
import { Address } from "../../../domain/customer/value-object/address";
import { FindCustomerUseCase } from "./find.customer.usecase";

const customer = new Customer("123", "Ophelia Luna");
customer.changeAddress(
  new Address("Zidal Key", 1896, "189213-000", "Egfubbug")
);
customer.activate();

const MockRepository = () => {
  return {
    find: jest.fn().mockReturnValue(customer),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Find customer usecase unit test", () => {
  it("should find a customer", async () => {
    const customerRepository = MockRepository();
    const usecase = new FindCustomerUseCase(customerRepository);

    const input = {
      id: "123",
    };

    const shouldOutput = {
      id: "123",
      name: "Ophelia Luna",
      address: {
        street: "Zidal Key",
        number: 1896,
        zip: "189213-000",
        city: "Egfubbug",
      },
    };

    const output = await usecase.execute(input);

    expect(output).toEqual(shouldOutput);
  });

  it("should throw if not find a customer", async () => {
    const customerRepository = MockRepository();
    customerRepository.find.mockImplementationOnce(() => {
      throw new Error("Customer not found");
    });
    const usecase = new FindCustomerUseCase(customerRepository);

    const input = {
      id: "123",
    };

    await expect(() => usecase.execute(input)).rejects.toThrow(
      "Customer not found"
    );
  });
});
