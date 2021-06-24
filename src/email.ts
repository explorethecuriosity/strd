import { toInt, toString } from "./util/fn";

// tslint:disable-next-line: max-line-length no-useless-escape
const regex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

class EmailValidation {
  protected _value: any;
  protected _defaultMessage: string = "";
  error: string = "";

  constructor(value: any) {
    this._value = value || "";
  }

  required(message: string) {
    if (!this.error && !this._value) {
      this.error = message;
    }
    return this;
  }

  /*
  Define the default message
  */
  defaultMessage(value: string) {
    this._defaultMessage = value;
    return this;
  }

  validate() {
    // If has error, return the error
    if (this.error) {
      return this.error;
    }

    if (!regex.test(this._value)) {
      this.error = this._defaultMessage;
    }

    return this.error;
  }
}

export const email = (value: any) => new EmailValidation(value);
