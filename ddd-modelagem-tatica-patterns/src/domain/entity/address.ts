export class Address {
  _street: string;
  _number: number;
  _zip: string;
  _city: string;

  constructor(street: string, number: number, zip: string, city: string) {
    this._street = street;
    this._number = number;
    this._zip = zip;
    this._city = city;

    this.validate();
  }

  validate() {
    if (this._street.length <= 0) {
      throw new Error("Field street is required");
    }

    if (this._number == undefined) {
      throw new Error("Field number is required");
    }

    if (this._zip.length <= 0) {
      throw new Error("Field zip is required");
    }

    if (this._city.length <= 0) {
      throw new Error("Field city is required");
    }
  }

  toString() {
    return `${this._street}, ${this._number}, ${this._zip} - ${this._city}`;
  }

  toJson() {
    return {
      street: this._street,
      number: this._number,
      zip: this._zip,
      city: this._city,
    };
  }
}
