import { ProductFactory } from "../../../domain/product/factories/product.factory";

const productMock = ProductFactory.create("a", "Mochila", 99);

export { productMock };
