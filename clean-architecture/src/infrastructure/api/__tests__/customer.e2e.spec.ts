import request from "supertest";

import { app, sequelize } from "../express";

describe("E2E test for customer", () => {
  beforeEach(async () => {
    await sequelize.sync({ force: true });
  });

  afterAll(async () => {
    await sequelize.close();
  });

  it("should create a customer", async () => {
    const response = await request(app)
      .post("/customer")
      .send({
        name: "John",
        address: {
          street: "Street",
          number: 2,
          zip: "79863935-91",
          city: "City",
        },
      });

    expect(response.status).toBe(200);
    expect(response.body.name).toEqual("John");
    expect(response.body.address.street).toEqual("Street");
    expect(response.body.address.number).toEqual(2);
    expect(response.body.address.zip).toEqual("79863935-91");
    expect(response.body.address.city).toEqual("City");
  });

  it("should not create a customer", async () => {
    const response = await request(app).post("/customer").send({
      name: "John",
    });

    expect(response.status).toBe(500);
  });
});
