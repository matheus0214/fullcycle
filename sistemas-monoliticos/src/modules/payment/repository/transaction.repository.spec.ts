import { Sequelize } from "sequelize-typescript";
import { Id } from "../../@shared/domain/value-object/id.value-object";
import { Transaction } from "../domain/transaction.entity";

import { TransactionModel } from "./transaction.model";
import { TransactionRepository } from "./transaction.repository";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([TransactionModel]);

    await sequelize.sync();
  });

  afterEach(async () => {
    sequelize.close();
  });

  it("should be able to save a transaction", async () => {
    const transaction = new Transaction({
      id: new Id("1"),
      amount: 120,
      orderId: "1",
    });

    transaction.approve();

    const repository = new TransactionRepository();

    const response = await repository.save(transaction);

    expect(response.id.id).toEqual(transaction.id.id);
    expect(response.amount).toEqual(transaction.amount);
    expect(response.orderId).toEqual(transaction.orderId);
    expect(response.status).toEqual("approved");
    expect(response.createdAt).toBeDefined();
    expect(response.updatedAt).toBeDefined();
  });
});
