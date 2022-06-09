import { Customer } from "../../../domain/customer/entity/customer";
import { ICustomerRepository } from "../../../domain/customer/repository/customer-repository.interface";
import {
  IInputListCustomerDTO,
  IOutputListCustomerDTO,
} from "./list.customer.dto";

export class ListCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(input: IInputListCustomerDTO): Promise<IOutputListCustomerDTO> {
    const customers = await this.customerRepository.findAll();

    return OutputMapper.toOutput(customers);
  }
}

class OutputMapper {
  static toOutput(customers: Customer[]): IOutputListCustomerDTO {
    return {
      customers: customers.map((current) => ({
        id: current.id,
        name: current.name,
        address: {
          street: current.address.street,
          city: current.address.city,
          number: current.address.number,
          zip: current.address.zip,
        },
      })),
    };
  }
}
