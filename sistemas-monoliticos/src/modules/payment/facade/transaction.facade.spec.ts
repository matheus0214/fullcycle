import { Sequelize } from "sequelize-typescript";
import { PaymentFacadeFactory } from "../factory/facade.factory";
import { TransactionModel } from "../repository/transaction.model";

describe("Transaction facade integration test", () => {
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
    await sequelize.close();
  });

  it("should save a transaction", async () => {
    const facade = PaymentFacadeFactory.create();

    const input = {
      orderId: "1",
      amount: 120,
    };

    const output = await facade.process(input);

    expect(output.transactionId).toBeDefined();
    expect(output.amount).toEqual(120);
    expect(output.status).toEqual("approved");
    expect(output.createdAt).toBeDefined();
    expect(output.updatedAt).toBeDefined();
  });
});
