import { EventDispatcher } from "../../@shared/event/event-dispatcher";
import { Customer } from "../entity/customer";
import { Address } from "../value-object/address";
import { CustomerChangeAddressEvent } from "./customer-change-address.event";
import { ChangeAddressCustomerHandler } from "./handler/change-address-customer.handler";

describe("Customer change address event", () => {
  it("should notify events when customer change his address", () => {
    const eventDispatcher = new EventDispatcher();

    const changeAddressCustomerHandler = new ChangeAddressCustomerHandler();

    const spyChangeAddress = jest.spyOn(changeAddressCustomerHandler, "handle");

    eventDispatcher.register(
      "CustomerChangeAddressEvent",
      changeAddressCustomerHandler
    );

    const customer = new Customer("123", "Dorothy Sandoval");
    customer.changeAddress(
      new Address("Mejo River", 1624, "789456123", "Koubocib")
    );
    const event = new CustomerChangeAddressEvent({
      name: customer.name,
      id: customer.id,
      address: customer.address,
    });

    eventDispatcher.notify(event);

    expect(spyChangeAddress).toBeCalled();
  });
});
