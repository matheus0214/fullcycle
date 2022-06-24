import express, { Express } from "express";
import { Sequelize } from "sequelize-typescript";

import { CustomerModel } from "../customer/repository/sequelize/models/customer.model";
import { ProductModel } from "../product/repository/sequelize/models/product.model";
import { customerRoute } from "./routes/customer.routes";
import { productRoute } from "./routes/products.routes";

const app: Express = express();
app.use(express.json());
app.use("/customer", customerRoute);
app.use("/product", productRoute);

export let sequelize: Sequelize;

async function setupDb() {
  sequelize = new Sequelize({
    dialect: "sqlite",
    storage: ":memory:",
    logging: false,
  });

  sequelize.addModels([CustomerModel, ProductModel]);
  await sequelize.sync();
}

setupDb();

export { app };
