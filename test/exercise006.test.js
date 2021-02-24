const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered,
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("It throws an error when nothing is passed to function", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");

    expect(() => {
      sumMultiples("array");
    }).toThrow("parameter must be an array");
  });
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

describe("isValidDNA", () => {
  test("It throws an error when nothing is passed to function", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });

  test("returns false if string only contains valid characters which is C, G,T ,A", () => {
    const result = isValidDNA("HHHHHHH");
    const expected = false;
    expect(result).toBe(expected);
  });
  test("returns true if string only contains valid characters which is C, G,T ,A", () => {
    const result = isValidDNA("CGTACGTA");
    const expected = true;
    expect(result).toBe(expected);
  });
});

describe("getComplementaryDNA", () => {
  test("It throws an error when nothing is passed to function", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });

  test("returns false if string only contains valid characters which is C, G,T ,A", () => {
    const result = getComplementaryDNA("ATCG");
    const expected = "TAGC";
    expect(result).toBe(expected);
  });
  test("returns true if string only contains valid characters which is C, G,T ,A", () => {
    const result = getComplementaryDNA("CGTACGTA");
    const expected = "GCATGCAT";
    expect(result).toBe(expected);
  });
});

describe("isItPrime", () => {
  test("It throws an error when nothing is passed to function", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });

  test("returns true if number is prime number", () => {
    const result = isItPrime(5);
    const expected = true;
    expect(result).toBe(expected);
  });
  test("returns false if number is not prime number", () => {
    const result = isItPrime(6);
    const expected = false;
    expect(result).toBe(expected);
  });
});

describe("createMatrix", () => {
  test("create a matrix with values passed in", () => {
    const result = createMatrix(1, "fill");
    const expected = [["fill"]];
    expect(result).toEqual(expected);
  });
  test("create a matrix with values passde in", () => {
    const result = createMatrix(3, "foo");
    const expected = [
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
      ["foo", "foo", "foo"],
    ];
    expect(result).toEqual(expected);
  });
});

describe("areWeCovered", () => {
  test("It returns false if there are no staff at all", () => {
    expect(areWeCovered([], "Sunday")).toBe(false);
    expect(areWeCovered([], "Monday")).toBe(false);
    expect(areWeCovered([], "Tuesday")).toBe(false);
    expect(areWeCovered([], "Wednesday")).toBe(false);
    expect(areWeCovered([], "Thursday")).toBe(false);
    expect(areWeCovered([], "Friday")).toBe(false);
    expect(areWeCovered([], "Saturday")).toBe(false);
  });

  test("It returns false if there is three people available to work on particular day", () => {
    const staff = [
      { name: "taslima", rota: ["Monday", "Tuesday"] },
      { name: "ayasha", rota: ["Monday", "Tuesday"] },
    ];
    expect(areWeCovered([staff], "Monday")).toBe(false);
  });
  test("It returns true if there is three people available to work on particular day", () => {
    const staff = [
      { name: "taslima", rota: ["Monday", "Tuesday"] },
      { name: "ayasha", rota: ["Monday", "Tuesday"] },
      { name: "khadijah", rota: ["Monday", "Thursday"] },
    ];
    expect(areWeCovered([staff], "Monday")).toBe(true);
  });
});
