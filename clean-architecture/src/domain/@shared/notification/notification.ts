export type NotificationErrorProps = {
  message: string;
  context: string;
};

export class Notification {
  private _errors: NotificationErrorProps[] = [];

  addError(err: NotificationErrorProps) {
    this._errors.push(err);
  }

  messages(context?: string): string {
    let message = "";

    this._errors.forEach((err) => {
      if (!context || err.context === context) {
        message += `${err.context}: ${err.message},`;
      }
    });

    return message;
  }

  hasErrors(): boolean {
    return !!this._errors.length;
  }

  getErrors(): NotificationErrorProps[] {
    return this._errors;
  }
}
