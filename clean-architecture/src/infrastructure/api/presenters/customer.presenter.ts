import { toXML } from "jstoxml";

import { IOutputListCustomerDTO } from "../../../usecase/customer/list/list.customer.dto";

export class CustomerPresenter {
  static listXML(data: IOutputListCustomerDTO): string {
    const xmlOption = {
      header: true,
      indent: " ",
      newLine: "\n",
      allowEmpty: true,
    };

    return toXML(
      {
        customers: data.customers.map((customer) => ({
          id: customer.id,
          name: customer.name,
          address: {
            street: customer.address.street,
            city: customer.address.city,
            number: customer.address.number,
            zip: customer.address.zip,
          },
        })),
      },
      xmlOption
    );
  }
}
