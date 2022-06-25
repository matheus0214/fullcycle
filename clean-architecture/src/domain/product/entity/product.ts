import { Entity } from "../../@shared/entity/entity.abstract";
import { NotificationError } from "../../@shared/notification/notification.error";
import { IProduct } from "./product.interface";

export class Product extends Entity implements IProduct {
  private _name: string;
  private _price: number;

  constructor(id: string, name: string, price: number) {
    super();

    this._id = id;
    this._name = name;
    this._price = price;

    this.validate();
  }

  validate() {
    if (this._id.length <= 0) {
      this._notification.addError({
        context: "product",
        message: "Id is required",
      });
    }

    if (this._name.length <= 0) {
      this._notification.addError({
        context: "product",
        message: "Name is required",
      });
    }

    if (this._price <= 0) {
      this._notification.addError({
        context: "product",
        message: "Price must be greater than 0",
      });
    }

    if (this._notification.hasErrors()) {
      throw new NotificationError(this._notification.getErrors());
    }
  }

  changeName(newName: string) {
    this._name = newName;

    this.validate();
  }

  changePrice(newPrice: number) {
    this._price = newPrice;

    this.validate();
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get price(): number {
    return this._price;
  }
}
