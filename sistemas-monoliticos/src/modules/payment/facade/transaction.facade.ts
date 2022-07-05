import { IUseCase } from "../../@shared/usecase/usecase.interface";
import {
  IPaymentFacade,
  IPaymentFacadeInputDTO,
  IPaymentFacadeOutputDTO,
} from "./transaction.facade.interface";

type FacadeProps = {
  processPaymentUseCase: IUseCase;
};

export class PaymentFacade implements IPaymentFacade {
  private _processPaymentUsecase: IUseCase;

  constructor(props: FacadeProps) {
    this._processPaymentUsecase = props.processPaymentUseCase;
  }

  async process(
    input: IPaymentFacadeInputDTO
  ): Promise<IPaymentFacadeOutputDTO> {
    return await this._processPaymentUsecase.execute(input);
  }
}
