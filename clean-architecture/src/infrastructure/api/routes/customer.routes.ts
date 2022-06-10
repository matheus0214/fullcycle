import express, { Request, Response } from "express";

import { CreateCustomerUseCase } from "../../../usecase/customer/create/create.customer.usecase";
import { CustomerRepository } from "../../customer/repository/sequelize/customer.repository";

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
