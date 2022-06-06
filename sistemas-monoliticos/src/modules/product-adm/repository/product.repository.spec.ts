import { Sequelize } from "sequelize-typescript";
import { ProductModel } from "./produt.model";

describe("Product repository test", () => {
  let sequelize: Sequelize;

  beforeEach(() => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ProductModel]);
  });

  afterEach(async () => {
    sequelize.close();
  });
});
