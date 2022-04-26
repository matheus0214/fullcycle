import { OrderItem } from "./order_item";

export class Order {
  private _id: string;
  private _customerId: string;
  private _items: OrderItem[];

  constructor(id: string, customerId: string, items: OrderItem[]) {
    this._id = id;
    this._customerId = customerId;
    this._items = items;

    this.validate();
  }

  total(): number {
    return this._items.reduce((acc, current) => acc + current.price, 0);
  }

  validate(): boolean {
    if (this._id.length <= 0) {
      throw new Error("Id is required");
    }

    if (this._customerId.length <= 0) {
      throw new Error("customerId is required");
    }

    if (this._items.length <= 0) {
      throw new Error("items quantity must be greater than 0");
    }

    return true;
  }
}
