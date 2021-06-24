import { toInt, toString } from "./util/fn";

class NumberValidation {
  protected _value: any;
  protected _allowString: boolean = false;
  protected _defaultMessage: string = "";
  error: string = "";

  constructor(value: any) {
    this._value = value || "";
  }

  protected _validateNumber(value: any): boolean {
    if (!this._allowString) {
      // Check if the typeof is enough
      if (typeof value !== "number") {
        return false;
      }
    } else {
      // Convert to string
      const valueStr = toString(value);
      // Check if parseInt return NaN or a nunver
      const conditional =
        toInt(value) !== NaN &&
        valueStr.replace(/\D/g, "") === toString(valueStr);

      if (!conditional) {
        return false;
      }
    }
    return true;
  }

  required(message: string) {
    if (this.error) {
      return this;
    }
    if (!this.error && !this._value && this._value !== 0) {
      this.error = message;
    }
    return this;
  }
  /*
  If true, return as valid cases like "1" or "04"
  */
  allowString() {
    this._allowString = true;
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
    if (!this._validateNumber(this._value)) {
      this.error = message;
    }
    if (toInt(toString(this._value)) < value) {
      this.error = message;
    }
    return this;
  }

  max(value: number, message: string) {
    if (this.error) {
      return this;
    }
    if (!this._validateNumber(this._value)) {
      this.error = message;
    }
    if (toInt(toString(this._value)) > value) {
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

    if (!this._validateNumber(this._value)) {
      this.error = this._defaultMessage;
    }

    return this.error;
  }
}

export const number = (value: any) => new NumberValidation(value);
