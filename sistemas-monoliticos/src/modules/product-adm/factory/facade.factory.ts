import { ProductAdmFacade } from "../facade/product-adm.facade";
import { ProductRepository } from "../repository/product.repository";
import { AddProductUseCase } from "../usecase/add-product/add-product.usecase";
import { CheckStockUseCase } from "../usecase/check-stock/check-stock.usecase";

export class ProductAdmFacadeFactory {
  static create() {
    const productRepository = new ProductRepository();
    const addProductUseCase = new AddProductUseCase(productRepository);
    const checkProductStockUseCase = new CheckStockUseCase(productRepository);

    const facade = new ProductAdmFacade({
      addUseCase: addProductUseCase,
      stockUseCase: checkProductStockUseCase,
    });

    return facade;
  }
}
