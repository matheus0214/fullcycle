import { Sequelize } from "sequelize-typescript";

import { Customer } from "../../../domain/customer/entity/customer";
import { Address } from "../../../domain/customer/value-object/address";
import { CustomerRepository } from "../../../infrastructure/customer/repository/sequelize/customer.repository";
import { CustomerModel } from "../../../infrastructure/customer/repository/sequelize/models/customer.model";
import { FindCustomerUseCase } from "./find.customer.usecase";

describe("Find customer usecase unit test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logQueryParameters: false,
      sync: { force: true },
      logging: false,
    });

    sequelize.addModels([CustomerModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should find a customer", async () => {
    const customerRepository = new CustomerRepository();
    const usecase = new FindCustomerUseCase(customerRepository);

    const customer = new Customer("123", "Ophelia Luna");
    customer.changeAddress(
      new Address("Zidal Key", 1896, "189213-000", "Egfubbug")
    );
    customer.activate();

    await customerRepository.create(customer);

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
});
