// const { default: test } = require("node:test");
// const { describe } = require("yargs");
const functions = require("./app.js");

describe("challenge 1", () => {
  test("teturn is not null", () => {
    expect(functions.notNull("leon")).not.toBeNull();
  });
});

describe("challenge 2", () => {
  test("a value that is truthy", () => {
    expect(functions.truthy(1)).toBeTruthy();
  });
});

describe("challenge 3", () => {
  test("a value that is not falsy", () => {
    expect(functions.notFalsy()).not.toBeFalsy();
  });
});

describe("challenge 4", () => {
  test("create object with two properties", () => {
    expect(functions.createObj("Tarek")).toEqual({
      firstName: "Tarek",
      newUser: true,
    });
  });
});

describe("challenge 5", () => {
  test("items in an array with 6 or more characters", () => {
    let array = ["guiter", "blue", "morethansix"];
    expect(functions.checker(array)).toEqual(["guiter", "morethansix"]);
  });
});

test("num to string", () => {
  expect(functions.convertNum(1)).not.toBeNaN;
});

test("planet finder", () => {
  expect(functions.whereAmI(2)).toBe(planets[2]);
});
