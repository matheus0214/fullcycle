import { Sequelize } from "sequelize-typescript";
import { Customer } from "../../../../domain/customer/entity/customer";
import { Address } from "../../../../domain/customer/value-object/address";

import { CustomerModel } from "./models/customer.model";
import { CustomerRepository } from "./customer.repository";

describe("Customer repository test", () => {
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

  it("should create a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Ophelia Luna");
    customer.changeAddress(
      new Address("Zidal Key", 1896, "189213-000", "Egfubbug")
    );
    customer.activate();

    await customerRepository.create(customer);

    const customerModel = await CustomerModel.findOne({
      where: { id: "123" },
    });

    expect(customerModel?.toJSON().id).toEqual("123");
    expect(customerModel?.toJSON().name).toEqual("Ophelia Luna");
  });

  it("should update a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Ophelia Luna");
    customer.changeAddress(
      new Address("Zidal Key", 1896, "189213-000", "Egfubbug")
    );
    customer.activate();

    await customerRepository.create(customer);

    customer.changeName("Lewis Chavez");
    await customerRepository.update(customer);

    const customerModel = await CustomerModel.findOne({
      where: { id: "123" },
    });

    expect(customerModel?.toJSON().id).toEqual("123");
    expect(customerModel?.toJSON().name).toEqual("Lewis Chavez");
  });

  it("should find a customer", async () => {
    const customerRepository = new CustomerRepository();
    const customer = new Customer("123", "Ophelia Luna");
    customer.changeAddress(
      new Address("Zidal Key", 1896, "189213-000", "Egfubbug")
    );
    customer.activate();

    await customerRepository.create(customer);

    const customerModel = await customerRepository.find("123");

    expect(customerModel?.id).toEqual("123");
    expect(customerModel?.name).toEqual("Ophelia Luna");
    expect(customerModel?.address.city).toEqual("Egfubbug");
  });

  it("should throw an error when customer is not found", async () => {
    const customerRepository = new CustomerRepository();

    expect(async () => {
      await customerRepository.find("not_register");
    }).rejects.toThrow("Customer not found");
  });

  it("shoudl return all customers", async () => {
    const customerRepository = new CustomerRepository();

    const c1 = new Customer("123", "Ophelia Luna");
    c1.changeAddress(new Address("Zidal Key", 1896, "189213-000", "Egfubbug"));
    c1.activate();

    const c2 = new Customer("143", "Jimmy Gordon");
    c2.changeAddress(new Address("Feola Loop", 19, "189213-000", "Egfubbug"));
    c2.activate();

    await customerRepository.create(c1);
    await customerRepository.create(c2);

    const customerArray = [c1, c2];

    const customers = await customerRepository.findAll();

    expect(customers.length).toEqual(2);
    expect(customers).toEqual(customerArray);
  });
});
