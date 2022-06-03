import { Customer } from "../../../../domain/customer/entity/customer";
import { ICustomerRepository } from "../../../../domain/customer/repository/customer-repository.interface";
import { Address } from "../../../../domain/customer/value-object/address";
import { CustomerModel } from "./models/customer.model";

export class CustomerRepository implements ICustomerRepository {
  async create(entity: Customer): Promise<void> {
    await CustomerModel.create({
      id: entity.id,
      name: entity.name,
      street: entity.address.street,
      number: entity.address.number,
      zip: entity.address.zip,
      city: entity.address.city,
      active: entity.isActive(),
      rewardPoints: entity.rewardPoints,
    });
  }
  async update(entity: Customer): Promise<void> {
    await CustomerModel.update(
      {
        name: entity.name,
        street: entity.address.street,
        number: entity.address.number,
        zip: entity.address.zip,
        city: entity.address.city,
        active: entity.isActive(),
        rewardPoints: entity.rewardPoints,
      },
      {
        where: { id: entity.id },
      }
    );
  }
  async find(id: string): Promise<Customer | null> {
    let customerModel;

    try {
      customerModel = await CustomerModel.findOne({
        where: { id },
        rejectOnEmpty: true,
      });
    } catch (error) {
      throw new Error("Customer not found");
    }

    return handleCustomerData(customerModel);
  }
  async findAll(): Promise<Customer[]> {
    const customers = await CustomerModel.findAll();

    return customers.map((customerModel) => handleCustomerData(customerModel));
  }
}

const handleCustomerData = (customerModel: CustomerModel): Customer => {
  const customer = new Customer(customerModel.id, customerModel.name);
  customer.addRewardPoints(customerModel.rewardPoints);

  if (customerModel.city) {
    customer.changeAddress(
      new Address(
        customerModel.street,
        customerModel.number,
        customerModel.zip,
        customerModel.city
      )
    );
  }

  if (customerModel.active) {
    customer.activate();
  } else {
    customer.deactivate();
  }

  return customer;
};
