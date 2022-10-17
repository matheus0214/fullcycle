import { IUseCase } from "../../../@shared/usecase/usecase.interface";
import { IPlaceOrderInputDTO, IPlaceOrderOutputDTO } from "./place-order.dto";

export default class PlaceOrderUseCase implements IUseCase {
  constructor() {}

  async execute(input: IPlaceOrderInputDTO): Promise<IPlaceOrderOutputDTO> {
    throw new Error("Method not implemented.");
  }
}
