import { v4 } from "uuid";

import { IValueObject } from "./value-object.interface";

export class Id implements IValueObject {
  private _id: string;

  constructor(id?: string) {
    this._id = id || v4();
  }

  get id(): string {
    return this._id;
  }
}
