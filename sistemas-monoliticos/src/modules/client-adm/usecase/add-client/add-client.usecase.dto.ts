export interface IAddClientInputDTO {
  id?: string;
  name: string;
  email: string;
  address: string;
}

export interface IAddClientOutputDTO {
  id: string;
  name: string;
  email: string;
  address: string;
  createdAt: Date;
  updatedAt: Date;
}
