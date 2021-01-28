const { sumMultiples } = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of numbers which are multiple of 3 and 5", () => {
    const result = sumMultiples([1, 3, 5]);
    const expected = 8;
    expect(result).toBe(expected);
  });
  test("should work with decimal numbers", () => {
    const result = sumMultiples([1.0, 3.0, 5.0]);
    const expected = 8;
    expect(result).toBe(expected);
  });
  test("should returns o if there is no multiples of 3 or 5", () => {
    const result = sumMultiples([1, 7, 2, 4]);
    const expected = 0;
    expect(result).toBe(expected);
  });
});
