import express, { Request, Response } from "express";

import { CreateCustomerUseCase } from "../../../usecase/customer/create/create.customer.usecase";
import { ListCustomerUseCase } from "../../../usecase/customer/list/list.customer.usecase";
import { CustomerRepository } from "../../customer/repository/sequelize/customer.repository";
import { CustomerPresenter } from "../presenters/customer.presenter";

export const customerRoute = express.Router();

customerRoute.post("/", async (request: Request, response: Response) => {
  const useCase = new CreateCustomerUseCase(new CustomerRepository());

  try {
    const customerDTO = {
      name: request.body.name,
      address: {
        street: request.body.address.street,
        number: request.body.address.number,
        zip: request.body.address.zip,
        city: request.body.address.city,
      },
    };
    const customer = await useCase.execute(customerDTO);

    response.send(customer);
  } catch (error) {
    response.status(500).send(error);
  }
});

customerRoute.get("/", async (request: Request, response: Response) => {
  const useCase = new ListCustomerUseCase(new CustomerRepository());

  try {
    const customers = await useCase.execute({});

    response.format({
      json: async () => response.send(customers),
      xml: async () => response.send(CustomerPresenter.listXML(customers)),
    });
  } catch (error) {
    response.status(500).send(error);
  }
});
