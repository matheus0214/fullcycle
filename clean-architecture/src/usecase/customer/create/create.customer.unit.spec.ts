import { CreateCustomerUseCase } from "./create.customer.usecase";

const MockRepository = () => {
  return {
    find: jest.fn(),
    findAll: jest.fn(),
    create: jest.fn(),
    update: jest.fn(),
  };
};

describe("Create customer usecase unit test", () => {
  it("should create a new customer", async () => {
    const input = {
      name: "Ophelia Luna",
      address: {
        street: "Zidal Key",
        number: 1896,
        zip: "189213-000",
        city: "Egfubbug",
      },
    };

    const customerRepository = MockRepository();
    const usecase = new CreateCustomerUseCase(customerRepository);

    const shouldOutput = {
      id: expect.any(String),
      name: input.name,
      address: {
        street: input.address.street,
        number: input.address.number,
        zip: input.address.zip,
        city: input.address.city,
      },
    };

    const output = await usecase.execute(input);

    expect(output).toEqual(shouldOutput);
  });

  it("should throw if name is missing", async () => {
    const input = {
      name: "",
      address: {
        street: "Zidal Key",
        number: 1896,
        zip: "189213-000",
        city: "Egfubbug",
      },
    };

    const customerRepository = MockRepository();
    const usecase = new CreateCustomerUseCase(customerRepository);

    await expect(() => usecase.execute(input)).rejects.toThrow(
      "Name is required"
    );
  });

  it("should throw if street is missing", async () => {
    const input = {
      name: "Sara Phillips",
      address: {
        street: "",
        number: 1896,
        zip: "189213-000",
        city: "Egfubbug",
      },
    };

    const customerRepository = MockRepository();
    const usecase = new CreateCustomerUseCase(customerRepository);

    await expect(() => usecase.execute(input)).rejects.toThrow(
      "Field street is required"
    );
  });
});
