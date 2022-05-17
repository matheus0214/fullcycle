import { Customer } from "../../entity/customer";
import { EventDispatcher } from "../@shared/event-dispatcher";
import { CustomerCreatedEvent } from "./customer-created.event";
import { SendEmailCustomerCreatedHandler } from "./handler/send-email-customer-created.handler";
import { SendToQueueCustomerCreatedHandler } from "./handler/send-to-queue-customer-created.handler";

describe("Customer created event", () => {
  it("should notify events when customer is created", () => {
    const eventDispatcher = new EventDispatcher();

    const sendEmailHandler = new SendEmailCustomerCreatedHandler();
    const sendToQueueCustomerCreatedHandler =
      new SendToQueueCustomerCreatedHandler();

    const spySendEmail = jest.spyOn(sendEmailHandler, "handle");
    const spySendToQueue = jest.spyOn(
      sendToQueueCustomerCreatedHandler,
      "handle"
    );

    eventDispatcher.register("CustomerCreatedEvent", sendEmailHandler);
    eventDispatcher.register(
      "CustomerCreatedEvent",
      sendToQueueCustomerCreatedHandler
    );

    const customer = new Customer("123", "Dorothy Sandoval");
    const event = new CustomerCreatedEvent({
      name: customer.name,
    });

    eventDispatcher.notify(event);

    expect(spySendEmail).toBeCalled();
    expect(spySendToQueue).toBeCalled();
  });
});
