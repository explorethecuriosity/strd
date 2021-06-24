import { Validation, number } from "../src";

const nameMessage = "Informe um nome válido";

describe("conditionalValidation #2", () => {
  it("Should return valid=true, error={}", () => {
    const testValidation = Validation(
      {
        id: (value) => (!value ? "Informe um ID válido" : null),
        name: (value) => (!value ? "Informe um nome válido" : null),
      },
      { id: "123", name: "test" }
    );
    expect(testValidation.fail).toBe(false);
  });
});

describe("conditionalValidation", () => {
  it(`Should return valid=false, error={name: '${nameMessage}'}`, () => {
    const testValidation = Validation(
      {
        id: (value) => (!number(value) ? "Informe um ID válido" : null),
        name: (value) => (!value ? nameMessage : null),
      },
      { id: "123", name: "" }
    );
    expect(testValidation.fail).toBe(true);
    expect(testValidation.errors).toBeTruthy();
    expect(testValidation.errors.name).toBe(nameMessage);
  });
});
