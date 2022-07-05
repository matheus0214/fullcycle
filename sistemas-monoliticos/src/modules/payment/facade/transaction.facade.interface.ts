export interface IPaymentFacadeInputDTO {
  orderId: string;
  amount: number;
}

export interface IPaymentFacadeOutputDTO {
  transactionId: string;
  orderId: string;
  status: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface IPaymentFacade {
  process(input: IPaymentFacadeInputDTO): Promise<IPaymentFacadeOutputDTO>;
}
