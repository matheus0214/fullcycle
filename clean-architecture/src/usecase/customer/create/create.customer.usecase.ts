import { CustomerFactory } from "../../../domain/customer/factories/customer.factory";
import { ICustomerRepository } from "../../../domain/customer/repository/customer-repository.interface";
import { Address } from "../../../domain/customer/value-object/address";
import {
  ICreateCustomerDTO,
  IOutputCreateCustomerDTO,
} from "./create.customer.dto";

export class CreateCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(input: ICreateCustomerDTO): Promise<IOutputCreateCustomerDTO> {
    const address = new Address(
      input.address.street,
      input.address.number,
      input.address.zip,
      input.address.city
    );
    const customer = CustomerFactory.createWithAddress(input.name, address);

    await this.customerRepository.create(customer);

    return {
      id: customer.name,
      name: customer.name,
      address: {
        city: customer.address.city,
        number: customer.address.number,
        street: customer.address.street,
        zip: customer.address.zip,
      },
    };
  }
}

const handleObject = (data: any): object => {
  return Object.keys(data).reduce((acc, current: string) => {
    if (typeof data[current] === "object") {
      Object.assign(acc, {
        [current.replace("_", "")]: handleObject(data[current]),
      });
      return acc;
    }

    Object.assign(acc, { [current.replace("_", "")]: data[current] });

    return acc;
  }, {});
};
