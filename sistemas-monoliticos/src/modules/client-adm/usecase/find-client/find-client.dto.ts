export interface IFindClientInputDTO {
  clientId: string;
}

export interface IFindClientOutputDTO {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
