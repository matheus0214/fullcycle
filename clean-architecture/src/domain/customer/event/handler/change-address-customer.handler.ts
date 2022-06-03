import { IEventHandler } from "../../../@shared/event/event-handler.interface";
import { CustomerChangeAddressEvent } from "../customer-change-address.event";

export class ChangeAddressCustomerHandler implements IEventHandler {
  handle(event: CustomerChangeAddressEvent): void {
    const { id, name, address } = event.eventData;
    console.log(
      `Endereço do cliente: ${id}, ${name} alterado para: ${address.street} ${address.number} ${address.street} - ${address.zip}`
    );
  }
}
