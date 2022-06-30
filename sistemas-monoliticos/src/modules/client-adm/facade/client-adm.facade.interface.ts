export interface IAddClientFacadeInputDTO {
  id?: string;
  name: string;
  email: string;
  address: string;
}

export interface IFindClientFacadeInputDTO {
  clientId: string;
}

export interface IFindClientFacadeOutputDTO {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface IClientAdmFacade {
  addClient(input: IAddClientFacadeInputDTO): Promise<void>;
  findClient(
    input: IFindClientFacadeInputDTO
  ): Promise<IFindClientFacadeOutputDTO>;
}
