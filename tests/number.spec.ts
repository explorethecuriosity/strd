import { number } from "../src";

it("unit: number", () => {
  const requiredPhrase = "Type the number";
  const invalidPhrase = "Invalid";

  expect(number("2019-21=16").defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(number("").defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(number(null).defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(number(undefined).defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );
  expect(number("20192116").defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(number(false).defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(number(true).defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(
    number(null)
      .defaultMessage(invalidPhrase)
      .required(requiredPhrase)
      .validate()
  ).toBe(requiredPhrase);

  expect(
    number("332@").allowString().defaultMessage(invalidPhrase).validate()
  ).toBe(invalidPhrase);

  expect(number(19239012).defaultMessage(invalidPhrase).validate()).toBe("");

  expect(
    number(0).defaultMessage(invalidPhrase).required(requiredPhrase).validate()
  ).toBe(requiredPhrase);

  expect(
    number("0").defaultMessage(invalidPhrase).allowString().validate()
  ).toBe("");

  expect(number("").defaultMessage(invalidPhrase).validate()).toBe(
    invalidPhrase
  );

  expect(
    number(null)
      .defaultMessage(invalidPhrase)
      .allowString()
      .required(requiredPhrase)
      .validate()
  ).toBe(requiredPhrase);

  expect(number(83848).defaultMessage(invalidPhrase).validate()).toBe("");

  expect(
    number(2803)
      .defaultMessage(invalidPhrase)
      .required(requiredPhrase)
      .validate()
  ).toBe("");

  expect(
    number(4)
      .defaultMessage(invalidPhrase)
      .min(2, "Type minimum 2 chars")
      .validate()
  ).toBe("");

  expect(
    number(4)
      .defaultMessage(invalidPhrase)
      .min(5, "Type minimum 5 chars")
      .validate()
  ).toBe("Type minimum 5 chars");

  expect(
    number(undefined)
      .defaultMessage(invalidPhrase)
      .min(5, "Type minimum 4 chars")
      .validate()
  ).toBe("Type minimum 4 chars");

  expect(
    number(4)
      .defaultMessage(invalidPhrase)
      .max(5, "Type maximum 5 chars")
      .validate()
  ).toBe("");

  expect(
    number(4)
      .defaultMessage(invalidPhrase)
      .max(2, "Type maximum 2 chars")
      .validate()
  ).toBe("Type maximum 2 chars");

  expect(
    number(undefined)
      .defaultMessage(invalidPhrase)
      .max(2, "Type maximum 2 chars")
      .validate()
  ).toBe("Type maximum 2 chars");

  expect(
    number(undefined)
      .defaultMessage(invalidPhrase)
      .min(2, "Type maximum 2 chars")
      .max(4, "Type maximum 4 chars")
      .required(requiredPhrase)
      .validate()
  ).toBe("Type maximum 2 chars");

  expect(
    number(undefined)
      .defaultMessage(invalidPhrase)
      .max(4, "Type maximum 4 chars")
      .min(2, "Type maximum 2 chars")
      .validate()
  ).toBe("Type maximum 4 chars");

  expect(
    number(3)
      .defaultMessage(invalidPhrase)
      .min(2, "Type maximum 2 chars")
      .max(4, "Type maximum 4 chars")
      .validate()
  ).toBe("");

  expect(
    number(2)
      .defaultMessage(invalidPhrase)
      .test(
        () =>
          // make the logic
          "test ok"
      )
      .validate()
  ).toBe("test ok");

  expect(
    number(2)
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
