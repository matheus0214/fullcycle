import { AddClientUseCase } from "../usecase/add-client/add-client.usecase";
import { FindClientUseCase } from "../usecase/find-client/find-client.usecase";
import {
  IAddClientFacadeInputDTO,
  IClientAdmFacade,
  IFindClientFacadeInputDTO,
  IFindClientFacadeOutputDTO,
} from "./client-adm.facade.interface";

type ClientAdmProps = {
  addClient: AddClientUseCase;
  findClient: FindClientUseCase;
};

export class ClientAdmFacade implements IClientAdmFacade {
  private _addClient: AddClientUseCase;
  private _findClient: FindClientUseCase;

  constructor(props: ClientAdmProps) {
    this._addClient = props.addClient;
    this._findClient = props.findClient;
  }

  async addClient(input: IAddClientFacadeInputDTO): Promise<void> {
    await this._addClient.execute({
      id: input.id ? input.id : undefined,
      email: input.email,
      name: input.name,
      address: input.address,
    });
  }

  async findClient(
    input: IFindClientFacadeInputDTO
  ): Promise<IFindClientFacadeOutputDTO> {
    return this._findClient.execute({ clientId: input.clientId });
  }
}
