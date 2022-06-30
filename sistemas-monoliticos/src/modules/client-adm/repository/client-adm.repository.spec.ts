import { Sequelize } from "sequelize-typescript";
import { Id } from "../../@shared/domain/value-object/id.value-object";

import { Client } from "../domain/client.entity";
import { ClientAdmRepository } from "./client-adm.repository";
import { ClientModel } from "./client.model";

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

  it("should be able to create a new client", async () => {
    const repository = new ClientAdmRepository();

    const addSpy = jest.spyOn(repository, "add");

    const client = new Client({
      name: "Amy Warner",
      email: "jokipkus@rogowfi.st",
      address: "1683 Vocrec Key",
    });

    await repository.add(client);

    expect(addSpy).toBeCalledTimes(1);
    expect(addSpy).toBeCalledWith(client);
  });

  it("should be able to find a client", async () => {
    await ClientModel.create({
      id: "1",
      name: "Amy Warner",
      email: "jokipkus@rogowfi.st",
      address: "1683 Vocrec Key",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    const repository = new ClientAdmRepository();

    const output = await repository.findOne("1");

    expect(output.id).toBeInstanceOf(Id);
    expect(output.name).toEqual("Amy Warner");
    expect(output.email).toEqual("jokipkus@rogowfi.st");
    expect(output.address).toEqual("1683 Vocrec Key");
    expect(output.createdAt).toBeDefined();
    expect(output.updatedAt).toBeDefined();
  });
});
