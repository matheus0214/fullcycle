import { IEvent } from "../../@shared/event/event.interface";
import { Address } from "../value-object/address";

interface IData {
  id: string;
  name: string;
  address: Address;
}

export class CustomerChangeAddressEvent implements IEvent {
  dataTimeOccurred: Date;
  eventData: IData;

  constructor(data: IData) {
    this.dataTimeOccurred = new Date();
    this.eventData = data;
  }
}
