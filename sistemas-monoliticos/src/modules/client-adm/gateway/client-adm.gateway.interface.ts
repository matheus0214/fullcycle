import { Client } from "../domain/client.entity";

export interface IClientAdmGateway {
  add(client: Client): Promise<void>;
  findOne(id: string): Promise<Client>;
}
