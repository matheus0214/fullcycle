class Customer {
  _id: string;
  _name: string;
  _address: string;
  _active: boolean;

  constructor(id: string, name: string, address: string) {
    this._id = id;
    this._name = name;
    this._address = address;

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
    if (this._address.length <= 0) {
      throw new Error("Address is a mandatory to active customer");
    }
    this._active = true;
  }

  deactivate() {
    this._active = false;
  }
}

const customer = new Customer("", "Charlotte Byrd", "781 Sosib Park");
