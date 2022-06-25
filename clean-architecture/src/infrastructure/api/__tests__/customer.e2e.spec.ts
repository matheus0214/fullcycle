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

  it("should list all customer", async () => {
    await request(app)
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

    await request(app)
      .post("/customer")
      .send({
        name: "Jane",
        address: {
          street: "Street 2",
          number: 3,
          zip: "79863935-92",
          city: "City 2",
        },
      });

    const listResponse = await request(app).get("/customer").send();

    expect(listResponse.status).toBe(200);
    expect(listResponse.body.customers.length).toBe(2);

    const customer = listResponse.body.customers[0];

    expect(customer.name).toEqual("John");
    expect(customer.address.street).toEqual("Street");

    const customerJame = listResponse.body.customers[1];

    expect(customerJame.name).toEqual("Jane");
    expect(customerJame.address.street).toEqual("Street 2");

    const listResponseXML = await request(app)
      .get("/customer")
      .set("Accept", "application/xml")
      .send();

    expect(listResponseXML.status).toBe(200);
    expect(listResponseXML.text).toContain(
      `<?xml version="1.0" encoding="UTF-8"?>`
    );
  });
});
