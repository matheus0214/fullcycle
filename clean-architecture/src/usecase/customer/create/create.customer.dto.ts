export interface ICreateCustomerDTO {
  name: string;
  address: {
    street: string;
    number: number;
    zip: string;
    city: string;
  };
}

export interface IOutputCreateCustomerDTO extends ICreateCustomerDTO {
  id: string;
}
