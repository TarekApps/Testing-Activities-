// const { default: test } = require("node:test");
// const { describe } = require("yargs");
const functions = require("./app.js");

describe("Test 1", () => {
  test("return is not null", () => {
    expect(functions.notNull("Tarek")).not.toBeNull();
  });
});

describe("Test 2", () => {
  test("check if this is truthy", () => {
    expect(functions.truthy(1)).toBeTruthy();
  });
});

describe("Test 3", () => {
  test("check if this is not falsy", () => {
    expect(functions.notFalsy()).not.toBeFalsy();
  });
});

describe("Test 4", () => {
  test("make an object with 2 properties", () => {
    expect(functions.createObj("Tarek")).toEqual({
      firstName: "Tarek",
      newUser: true,
    });
  });
});

describe("Test 5", () => {
  test("items in an array with 6 or more characters", () => {
    let array = ["banter", "red", "hahahahaha"];
    expect(functions.checker(array)).toEqual(["banter", "hahahahaha"]);
  });
});

test("num to string", () => {
  expect(functions.convertNum(1)).not.toBeNaN;
});

test("planet finder", () => {
  expect(functions.whereAmI(2)).toBe(planets[2]);
});
