import { ICustomerRepository } from "../../../domain/customer/repository/customer-repository.interface";
import {
  IInputListCustomerDTO,
  IOutputListCustomerDTO,
} from "./list.customer.dto";

export class ListCustomerUseCase {
  constructor(private customerRepository: ICustomerRepository) {}

  async execute(input: IInputListCustomerDTO): Promise<IOutputListCustomerDTO> {
    const customers = await this.customerRepository.findAll();

    return { customers };
  }
}
