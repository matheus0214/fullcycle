import { IRepository } from "../../@shared/repository/repository-interface";
import { Customer } from "../entity/customer";

export interface ICustomerRepository extends IRepository<Customer> {
  update(entity: Customer): Promise<void>;
}
