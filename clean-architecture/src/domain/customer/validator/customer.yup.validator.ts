import * as yup from "yup";

import { IValidator } from "../../@shared/validator/validator.interface";
import { Customer } from "../entity/customer";

export class CustomerYupValidator implements IValidator<Customer> {
  validate(entity: Customer): void {
    try {
      yup
        .object()
        .shape({
          id: yup.string().required("Id is required"),
          name: yup.string().required("Name is required"),
        })
        .validateSync(
          {
            id: entity.id,
            name: entity.name,
          },
          { abortEarly: false }
        );
    } catch (errors) {
      const e = errors as yup.ValidationError;

      e.errors.forEach((err) => {
        entity.notification.addError({
          context: "customer",
          message: err,
        });
      });
    }
  }
}
