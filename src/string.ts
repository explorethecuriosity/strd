import { toString } from "./util/fn";

class StringValidation {
  protected _value: any;
  protected _defaultMessage: string = "";
  protected _allowEmpty: boolean = false;
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

  allowEmpty() {
    this._allowEmpty = true;
    return this;
  }

  /*
  Define the default message
  */
  defaultMessage(value: string) {
    this._defaultMessage = value;
    return this;
  }

  min(value: number, message: string) {
    if (this.error) {
      return this;
    }
    if (this._value.length < value) {
      this.error = message;
    }
    return this;
  }

  max(value: number, message: string) {
    if (this.error) {
      return this;
    }
    if (this._value.length > value) {
      this.error = message;
    }
    return this;
  }

  test(fn: (value: any) => string) {
    if (this.error) {
      return this;
    }
    this.error = fn(this._value);
    return this;
  }

  validate() {
    // If has error, return the error
    if (this.error) {
      return this.error;
    }

    if (typeof this._value !== "string") {
      this.error = this._defaultMessage;
    }

    if (!this._value && !this._allowEmpty) {
      this.error = this._defaultMessage;
    }

    return this.error;
  }
}

export const string = (value: any) => new StringValidation(value);
