import { Id } from "../../../@shared/domain/value-object/id.value-object";
import { IUseCase } from "../../../@shared/usecase/usecase.interface";
import { Client } from "../../domain/client.entity";
import { IClientAdmGateway } from "../../gateway/client-adm.gateway.interface";
import {
  IAddClientInputDTO,
  IAddClientOutputDTO,
} from "./add-client.usecase.dto";

export class AddClientUseCase implements IUseCase {
  constructor(private _clientRepository: IClientAdmGateway) {}

  async execute(input: IAddClientInputDTO): Promise<IAddClientOutputDTO> {
    const client = new Client({
      id: input.id ? new Id(input.id) : undefined,
      name: input.name,
      address: input.address,
      email: input.email,
    });

    await this._clientRepository.add(client);

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
