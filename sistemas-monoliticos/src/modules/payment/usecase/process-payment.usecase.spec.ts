import { Id } from "../../@shared/domain/value-object/id.value-object";
import { Transaction } from "../domain/transaction.entity";
import { IPaymentGateway } from "../gateway/payment.gateway";
import { ProcessPaymentUseCase } from "./process-payment.usecase";

const transaction = new Transaction({
  id: new Id("1"),
  amount: 100,
  orderId: "1",
  status: "approved",
});

const mockRepository = (): IPaymentGateway => {
  return {
    save: jest.fn().mockReturnValue(transaction),
  };
};

describe("Process payment usecase unit test", () => {
  it("should approve a transaction", async () => {
    const repository = mockRepository();

    const useCase = new ProcessPaymentUseCase(repository);

    const input = {
      orderId: "1",
      amount: 100,
    };

    const result = await useCase.execute(input);

    expect(result.transactionId).toEqual(transaction.id.id);
    expect(result.amount).toEqual(100);
    expect(result.orderId).toEqual("1");
    expect(result.status).toEqual("approved");
    expect(result.createdAt).toBeDefined();
    expect(result.updatedAt).toBeDefined();

    expect(repository.save).toHaveBeenCalledTimes(1);
  });

  it("should decline a transaction", async () => {
    const repository = mockRepository();
    repository.save = jest.fn().mockReturnValueOnce(
      new Transaction({
        id: new Id("1"),
        amount: 97,
        orderId: "1",
        status: "declined",
      })
    );

    const useCase = new ProcessPaymentUseCase(repository);

    const input = {
      orderId: "1",
      amount: 97,
    };

    const result = await useCase.execute(input);

    expect(result.amount).toEqual(97);
    expect(result.status).toEqual("declined");
  });
});
