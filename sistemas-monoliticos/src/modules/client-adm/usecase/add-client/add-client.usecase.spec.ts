import { IClientAdmGateway } from "../../gateway/client-adm.gateway.interface";
import { AddClientUseCase } from "./add-client.usecase";

const mockRepository = (): IClientAdmGateway => {
  return {
    add: jest.fn(),
    findOne: jest.fn(),
  };
};

describe("Add client usecase unit test", () => {
  it("should be able to create a client", async () => {
    const repository = mockRepository();

    const useCase = new AddClientUseCase(repository);

    const input = {
      name: "Andre",
      email: "noire@eruva.ml",
      address: "975 Pozib Square",
    };

    const output = await useCase.execute(input);

    expect(repository.add).toBeCalled();
    expect(output.id).toBeDefined();
    expect(output.name).toEqual(input.name);
    expect(output.email).toEqual(input.email);
    expect(output.address).toEqual(input.address);
    expect(output.createdAt).toBeDefined();
    expect(output.updatedAt).toBeDefined();
  });
});
