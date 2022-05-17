import { IEventHandler } from "../../@shared/event-handler.interface";
import { CustomerCreatedEvent } from "../customer-created.event";

export class SendEmailCustomerCreatedHandler implements IEventHandler {
  handle(event: CustomerCreatedEvent): void {
    console.log("Esse é o primeiro console.log do evento: CustomerCreated");
  }
}
