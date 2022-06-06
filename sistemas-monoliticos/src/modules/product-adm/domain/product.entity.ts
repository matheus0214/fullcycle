import { IAggregateRoot } from "../../@shared/domain/entity/aggregate.root.interface";
import { BaseEntity } from "../../@shared/domain/entity/base.entity";
import { Id } from "../../@shared/domain/value-object/id.value-object";

type ProductProps = {
  id?: Id;
  name: string;
  description: string;
  purchasePrice: number;
  stock: number;
  createdAt?: Date;
  updatedAt?: Date;
};

export class Product extends BaseEntity implements IAggregateRoot {
  private _name: string;
  private _description: string;
  private _purchasePrice: number;
  private _stock: number;

  constructor(data: ProductProps) {
    super(data.id);
    this._name = data.name;
    this._description = data.description;
    this._purchasePrice = data.purchasePrice;
    this._stock = data.stock;
  }

  public get name(): string {
    return this._name;
  }

  public set name(name: string) {
    this._name = name;
  }

  public get description(): string {
    return this._description;
  }

  public set description(description: string) {
    this._description = description;
  }

  public get purchasePrice(): number {
    return this._purchasePrice;
  }

  public set purchasePrice(purchasePrice: number) {
    this._purchasePrice = purchasePrice;
  }

  public get stock(): number {
    return this._stock;
  }

  public set stock(stock: number) {
    this._stock = stock;
  }
}
