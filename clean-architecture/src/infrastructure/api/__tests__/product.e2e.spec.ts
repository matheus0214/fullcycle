import request from "supertest";

import { app, sequelize } from "../express";

describe("Product E2E", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });
  it("should be able to create a new product", async () => {
    const response = await request(app).post("/product").send({
      name: "Mochila",
      price: 120,
      type: "a",
    });

    expect(response.status).toEqual(200);
    expect(response.body.id).toBeDefined();
    expect(response.body.name).toEqual("Mochila");
  });

  it("should be able to list all products", async () => {
    await request(app).post("/product").send({
      name: "Mochila",
      price: 120,
      type: "a",
    });

    await request(app).post("/product").send({
      name: "Caneta",
      price: 12,
      type: "a",
    });

    const listProductsResponse = await request(app).get("/product").send();

    expect(listProductsResponse.status).toEqual(200);
    expect(listProductsResponse.body.products[0].id).toBeDefined();
    expect(listProductsResponse.body.products[0].name).toEqual("Mochila");
    expect(listProductsResponse.body.products[0].price).toEqual(120);

    expect(listProductsResponse.body.products[1].id).toBeDefined();
    expect(listProductsResponse.body.products[1].name).toEqual("Caneta");
    expect(listProductsResponse.body.products[1].price).toEqual(12);
  });
});
