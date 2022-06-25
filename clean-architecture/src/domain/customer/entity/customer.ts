import { Entity } from "../../@shared/entity/entity.abstract";
import { NotificationError } from "../../@shared/notification/notification.error";
import { Address } from "../value-object/address";

export class Customer extends Entity {
  private _name: string;
  private _address: Address;
  private _active: boolean;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    super();
    this._id = id;
    this._name = name;

    this.validate();
  }

  validate() {
    if (this._name.length <= 0) {
      this._notification.addError({
        context: "customer",
        message: "Name is required",
      });
    }

    if (this._id.length <= 0) {
      this._notification.addError({
        context: "customer",
        message: "Id is required",
      });
    }

    if (this._notification.hasErrors()) {
      throw new NotificationError(this._notification.getErrors());
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  changeAddress(newAddress: Address) {
    this._address = newAddress;
    this.validate();
  }

  activate() {
    if (!!!this._address) {
      this._notification.addError({
        context: "customer",
        message: "Address is a mandatory field to active customer",
      });
    }

    this.validate();

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  get id(): string {
    return this._id;
  }

  get address(): Address {
    return this._address;
  }

  get name(): string {
    return this._name;
  }

  get rewardPoints(): number {
    return this._rewardPoints;
  }

  addRewardPoints(newPoints: number) {
    this._rewardPoints += newPoints;
  }

  isActive(): boolean {
    return this._active;
  }
}
