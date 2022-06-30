import { ClientAdmFacade } from "../facade/client-adm.facade";
import { IClientAdmFacade } from "../facade/client-adm.facade.interface";
import { ClientAdmRepository } from "../repository/client-adm.repository";
import { AddClientUseCase } from "../usecase/add-client/add-client.usecase";
import { FindClientUseCase } from "../usecase/find-client/find-client.usecase";

export class FacadeFactory {
  static create(): IClientAdmFacade {
    const repository = new ClientAdmRepository();

    const addClientUseCase = new AddClientUseCase(repository);
    const findClientUseCase = new FindClientUseCase(repository);

    return new ClientAdmFacade({
      addClient: addClientUseCase,
      findClient: findClientUseCase,
    });
  }
}
