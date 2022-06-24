import express, { Request, Response } from "express";

import { CreateProductUsecase } from "../../../usecase/product/create/create.product.usecase";
import { ListProductUsecase } from "../../../usecase/product/list/list.product.usecase";
import { ProductRepository } from "../../product/repository/sequelize/product.repository";

export const productRoute = express.Router();

productRoute.post("/", async (request: Request, response: Response) => {
  const useCase = new CreateProductUsecase(new ProductRepository());

  try {
    const { name, price, type } = request.body;

    const product = await useCase.execute({
      name,
      price,
      type,
    });

    return response.json(product);
  } catch (error) {
    return response.status(500).send(error);
  }
});

productRoute.get("/", async (request: Request, response: Response) => {
  const useCase = new ListProductUsecase(new ProductRepository());

  try {
    const products = await useCase.execute({});

    return response.json(products);
  } catch (error) {
    return response.status(500).send(error);
  }
});
