import { email } from "../src";

it("isEmail", () => {
  expect(email("mega@zord").required("required").validate()).toBe("");
  expect(email("").required("required").validate()).toBe("required");
  expect(email("valid").defaultMessage("default message").validate()).toBe(
    "default message"
  );
  expect(email("test@.com").defaultMessage("default message").validate()).toBe(
    "default message"
  );
  expect(email("test.com").defaultMessage("default message").validate()).toBe(
    "default message"
  );
  expect(email("mega@zord.com").validate()).toBe("");
  expect(email("mega@zord.tech").validate()).toBe("");
  expect(email("test@test.com").validate()).toBe("");
  expect(email("test@sub.test.com").validate()).toBe("");
});
