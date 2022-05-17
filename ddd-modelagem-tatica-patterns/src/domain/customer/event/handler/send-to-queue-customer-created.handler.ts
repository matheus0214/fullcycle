import { IEventHandler } from "../../../@shared/event/event-handler.interface";
import { CustomerCreatedEvent } from "../customer-created.event";

export class SendToQueueCustomerCreatedHandler implements IEventHandler {
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o segundo console.log do evento: CustomerCreated");
  }
}
