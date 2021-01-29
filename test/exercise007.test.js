const { sumDigits, createRange } = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("It throws an error when nothing is passed to function", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });
  test("returns the sum of numbers which is passed in", () => {
    const result = sumDigits(135);
    const expected = 9;
    expect(result).toBe(expected);
  });
  test("returns the sum of numbers which is passed in", () => {
    const result = sumDigits(1355);
    const expected = 14;
    expect(result).toBe(expected);
  });
});

describe("createRange", () => {
  test("returns the array starting with start ending with end and incrementing in step", () => {
    const result = createRange(3, 11, 2);
    const expected = [3, 5, 7, 9, 11];
    expect(result).toEqual(expected);
  });
});
