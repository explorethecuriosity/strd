import { string } from "../src";

it("unit: string", () => {
  const requiredPhrase = "Type the string";
  const invalidPhrase = "Invalid";

  expect(string("2019-21=16").defaultMessage(invalidPhrase).validate()).toBe(
    ""
  );

  expect(string("").defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(string("").defaultMessage(invalidPhrase).allowEmpty().validate()).toBe(
    ""
  );

  expect(
    string(null)
      .defaultMessage(invalidPhrase)
      .required(requiredPhrase)
      .min(2, "min2")
      .validate()
  ).toBe(requiredPhrase);

  expect(
    string(null)
      .defaultMessage(invalidPhrase)
      .required(requiredPhrase)
      .max(2, "max2")
      .validate()
  ).toBe(requiredPhrase);

  expect(
    string(null)
      .defaultMessage(invalidPhrase)
      .required(requiredPhrase)
      .validate()
  ).toBe(requiredPhrase);

  expect(
    string("2803")
      .defaultMessage(invalidPhrase)
      .required(requiredPhrase)
      .validate()
  ).toBe("");

  expect(
    string("42")
      .defaultMessage(invalidPhrase)
      .min(2, "Type minimum 2 chars")
      .validate()
  ).toBe("");

  expect(
    string("4asd")
      .defaultMessage(invalidPhrase)
      .min(5, "Type minimum 5 chars")
      .validate()
  ).toBe("Type minimum 5 chars");

  expect(
    string(224343)
      .defaultMessage(invalidPhrase)
      .min(5, "Type minimum 5 chars")
      .validate()
  ).toBe(invalidPhrase);

  expect(
    string(undefined)
      .defaultMessage(invalidPhrase)
      .min(5, "Type minimum 4 chars")
      .validate()
  ).toBe("Type minimum 4 chars");

  expect(
    string("4422")
      .defaultMessage(invalidPhrase)
      .max(5, "Type maximum 5 chars")
      .validate()
  ).toBe("");

  expect(
    string("433")
      .defaultMessage(invalidPhrase)
      .max(2, "Type maximum 2 chars")
      .validate()
  ).toBe("Type maximum 2 chars");

  expect(
    string(undefined)
      .defaultMessage(invalidPhrase)
      .max(2, "Type maximum 2 chars")
      .validate()
  ).toBe(invalidPhrase);

  expect(
    string(undefined)
      .defaultMessage(invalidPhrase)
      .min(2, "Type maximum 2 chars")
      .max(4, "Type maximum 4 chars")
      .required(requiredPhrase)
      .validate()
  ).toBe("Type maximum 2 chars");

  expect(
    string("333")
      .defaultMessage(invalidPhrase)
      .min(2, "Type maximum 2 chars")
      .max(4, "Type maximum 4 chars")
      .validate()
  ).toBe("");

  expect(
    string("2123")
      .defaultMessage(invalidPhrase)
      .test(
        () =>
          // make the logic
          "test ok"
      )
      .validate()
  ).toBe("test ok");

  expect(
    string("21")
      .defaultMessage(invalidPhrase)
      .min(3, "Type maximum 3 chars")
      .test(
        () =>
          // make the logic
          "test ok"
      )
      .validate()
  ).toBe("Type maximum 3 chars");
});
