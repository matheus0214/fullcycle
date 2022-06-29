export interface IFindStoreCatalogFacadeInputDTO {
  id: string;
}

export interface IFindStoreCatalogFacadeOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}

export interface IFindAllStoreCatalogFacadeOutputDTO {
  id: string;
  name: string;
  description: string;
  salesPrice: number;
}

export interface IStoreCatalogFacade {
  findOne(
    input: IFindStoreCatalogFacadeInputDTO
  ): Promise<IFindStoreCatalogFacadeOutputDTO>;
  findAll(): Promise<IFindAllStoreCatalogFacadeOutputDTO[]>;
}
