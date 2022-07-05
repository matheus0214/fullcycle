import { IUseCase } from "../../@shared/usecase/usecase.interface";
import { Transaction } from "../domain/transaction.entity";
import { IPaymentGateway } from "../gateway/payment.gateway";
import {
  IProcessPaymentInputDTO,
  IProcessPaymentOutputDTO,
} from "./process-payment.dto";

export class ProcessPaymentUseCase implements IUseCase {
  constructor(private _transactionRepository: IPaymentGateway) {}

  async execute(
    input: IProcessPaymentInputDTO
  ): Promise<IProcessPaymentOutputDTO> {
    const transaction = new Transaction({
      amount: input.amount,
      orderId: input.orderId,
    });

    transaction.process();

    const persistTransaction = await this._transactionRepository.save(
      transaction
    );

    return {
      transactionId: persistTransaction.id.id,
      amount: persistTransaction.amount,
      orderId: persistTransaction.orderId,
      status: persistTransaction.status,
      createdAt: persistTransaction.createdAt,
      updatedAt: persistTransaction.updatedAt,
    };
  }
}
