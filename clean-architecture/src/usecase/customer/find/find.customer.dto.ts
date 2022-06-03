export interface IFindCustomerDTO {
  id: string;
}

export interface IOutputFindCustomerDTO {
  id: string;
  name: string;
  address: {
    street: string;
    city: string;
    number: number;
    zip: string;
  };
}
