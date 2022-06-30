import { Client } from "../../domain/client.entity";
import { IClientAdmGateway } from "../../gateway/client-adm.gateway.interface";
import { FindClientUseCase } from "./find-client.usecase";

const client = new Client({
  name: "Andre",
  address: "1656 Iwtak Pass",
  email: "pusbim@tesowi.cv",
});

const mockRepository = (): IClientAdmGateway => {
  return {
    add: jest.fn(),
    findOne: jest.fn().mockReturnValue(client),
  };
};

describe("Find client usecase unit test", () => {
  it("should be able to find a client", async () => {
    const repository = mockRepository();

    const useCase = new FindClientUseCase(repository);

    const output = await useCase.execute({ clientId: client.id.id });

    expect(repository.findOne).toBeCalledTimes(1);
    expect(repository.findOne).toBeCalledWith(client.id.id);
    expect(output).toMatchObject({
      id: client.id.id,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    });
  });
});
