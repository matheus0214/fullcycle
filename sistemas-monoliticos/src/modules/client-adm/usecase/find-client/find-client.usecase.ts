import { IUseCase } from "../../../@shared/usecase/usecase.interface";
import { IClientAdmGateway } from "../../gateway/client-adm.gateway.interface";
import { IFindClientInputDTO, IFindClientOutputDTO } from "./find-client.dto";

export class FindClientUseCase implements IUseCase {
  constructor(private _clientGateway: IClientAdmGateway) {}

  async execute(input: IFindClientInputDTO): Promise<IFindClientOutputDTO> {
    const client = await this._clientGateway.findOne(input.clientId);

    return {
      id: client.id.id,
      name: client.name,
      email: client.email,
      address: client.address,
      createdAt: client.createdAt,
      updatedAt: client.updatedAt,
    };
  }
}
