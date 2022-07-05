import { PaymentFacade } from "../facade/transaction.facade";
import { IPaymentFacade } from "../facade/transaction.facade.interface";
import { TransactionRepository } from "../repository/transaction.repository";
import { ProcessPaymentUseCase } from "../usecase/process-payment.usecase";

export class PaymentFacadeFactory {
  static create(): IPaymentFacade {
    const repository = new TransactionRepository();
    const processPaymentUseCase = new ProcessPaymentUseCase(repository);

    return new PaymentFacade({ processPaymentUseCase });
  }
}
