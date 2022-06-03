import { ICustomerRepository } from "../../../domain/customer/repository/customer-repository.interface";
import { IFindCustomerDTO, IOutputFindCustomerDTO } from "./find.customer.dto";

export class FindCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(input: IFindCustomerDTO): Promise<IOutputFindCustomerDTO> {
    const customer = await this.customerRepository.find(input.id);

    if (!customer) {
      throw new Error("Customer not found");
    }

    return {
      id: customer.id,
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
