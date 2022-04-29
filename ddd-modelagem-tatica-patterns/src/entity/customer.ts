import { Address } from "./address";

export class Customer {
  private _id: string;
  private _name: string;
  private _address: Address;
  private _active: boolean;
  private _rewardPoints: number = 0;

  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;

    this.validate();
  }

  validate() {
    if (this._name.length <= 0) {
      throw new Error("Name is required");
    }

    if (this._id.length <= 0) {
      throw new Error("Id is required");
    }
  }

  changeName(name: string) {
    this._name = name;
    this.validate();
  }

  activate() {
    if (!!!this._address) {
      throw new Error("Address is a mandatory field to active customer");
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  get id(): string {
    return this._id;
  }

  set address(newAddress: Address) {
    this._address = newAddress;
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
