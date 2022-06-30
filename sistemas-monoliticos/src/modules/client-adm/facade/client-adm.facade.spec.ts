import { Sequelize } from "sequelize-typescript";
import { FacadeFactory } from "../factory/facade.factory";

import { ClientModel } from "../repository/client.model";

describe("Client Adm repository integration test", () => {
  let sequelize: Sequelize;

  beforeEach(async () => {
    sequelize = new Sequelize({
      dialect: "sqlite",
      storage: ":memory:",
      logging: false,
      sync: { force: true },
    });

    sequelize.addModels([ClientModel]);
    await sequelize.sync();
  });

  afterEach(async () => {
    await sequelize.close();
  });

  it("should create a client", async () => {
    const facade = FacadeFactory.create();

    const input = {
      id: "1",
      name: "Jose",
      email: "jose@mail.com",
      address: "1437 Tokli Highway",
    };

    await facade.addClient(input);

    const client = await ClientModel.findOne({ where: { id: "1" } });

    expect(client?.id).toEqual("1");
    expect(client?.name).toEqual("Jose");
    expect(client?.email).toEqual("jose@mail.com");
    expect(client?.address).toEqual("1437 Tokli Highway");
    expect(client?.createdAt).toBeDefined();
    expect(client?.updatedAt).toBeDefined();
  });

  it("should find a client", async () => {
    const facade = FacadeFactory.create();

    await ClientModel.create({
      id: "1",
      name: "Jose",
      email: "jose@mail.com",
      address: "1437 Tokli Highway",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const input = { clientId: "1" };

    const output = await facade.findClient(input);

    expect(output.id).toEqual("1");
    expect(output.name).toEqual("Jose");
    expect(output.email).toEqual("jose@mail.com");
    expect(output.address).toEqual("1437 Tokli Highway");
    expect(output.createdAt).toBeDefined();
    expect(output.updatedAt).toBeDefined();
  });
});
