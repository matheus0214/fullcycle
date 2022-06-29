import { StoreCatalogFacade } from "../facade/store-catalog.facade";
import { IStoreCatalogFacade } from "../facade/store-catalog.facade.interface";
import { ProductRepository } from "../repository/product.repository";
import { FindAllProductsUseCase } from "../usecase/find-all-products/find-all-products.usecase";
import { FindProductUseCase } from "../usecase/find-product/find-product.usecase";

export class FacadeFactory {
  static create(): IStoreCatalogFacade {
    const productRepository = new ProductRepository();

    const findOneUseCase = new FindProductUseCase(productRepository);
    const findAllUseCase = new FindAllProductsUseCase(productRepository);

    return new StoreCatalogFacade({
      findOne: findOneUseCase,
      findAll: findAllUseCase,
    });
  }
}
