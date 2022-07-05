import { Transaction } from "../domain/transaction.entity";

export interface IPaymentGateway {
  save(input: Transaction): Promise<Transaction>;
}
