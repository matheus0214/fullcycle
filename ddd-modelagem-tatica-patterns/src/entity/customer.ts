import { Address } from "./address";

class Customer {
  _id: string;
  _name: string;
  _address: Address;
  _active: boolean;

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
  }

  activate() {
    if (!!this._address) {
      throw new Error("Address is a mandatory field to active customer");
    }

    this._active = true;
  }

  deactivate() {
    this._active = false;
  }

  set address(newAddress: Address) {
    this._address = newAddress;
  }
}

const customer = new Customer("", "Charlotte Byrd");
customer.address = new Address("Lathi Heights", 1817, "MF", "Rijogo");
