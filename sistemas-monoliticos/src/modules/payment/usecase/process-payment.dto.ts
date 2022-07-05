export interface IProcessPaymentInputDTO {
  orderId: string;
  amount: number;
}

export interface IProcessPaymentOutputDTO {
  transactionId: string;
  orderId: string;
  status: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}
