import { IEventHandler } from "../../../@shared/event/event-handler.interface";
import { ProductCreatedEvent } from "../product-created.event";

export class SendEmailWhenProductIsCreatedHandler implements IEventHandler {
  handle(event: ProductCreatedEvent): void {
    console.log(`Sending email to ${event.eventData.email}`);
  }
}
