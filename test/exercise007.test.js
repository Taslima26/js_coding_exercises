const {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
  findWinner,
} = require("../challenges/exercise007");

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
const users = [
  {
    username: "beth_1234",
    name: "Beth Smith",
    screenTime: [
      {
        date: "2019-05-01",
        usage: { twitter: 34, instagram: 22, facebook: 40 },
      },
      {
        date: "2019-05-02",
        usage: { twitter: 56, instagram: 40, facebook: 31 },
      },
      {
        date: "2019-05-03",
        usage: { twitter: 12, instagram: 15, facebook: 19 },
      },
      {
        date: "2019-05-04",
        usage: { twitter: 10, instagram: 56, facebook: 61 },
      },
    ],
  },
  {
    username: "Jane_Trimmer",
    name: "Jane Trimmer",
    screenTime: [
      {
        date: "2020-05-01",
        usage: { twitter: 34, instagram: 22, facebook: 40 },
      },
      {
        date: "2020-05-30",
        usage: { twitter: 56, instagram: 40, facebook: 31 },
      },
      {
        date: "2020-05-03",
        usage: { twitter: 12, instagram: 15, facebook: 19 },
      },
      {
        date: "2020-05-04",
        usage: { twitter: 10, instagram: 56, facebook: 61 },
      },
    ],
  },
  {
    username: "sam_j_1989",
    name: "Sam Jones",
    screenTime: [
      {
        date: "2019-06-11",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
      },
      {
        date: "2019-06-13",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
      },
      {
        date: "2019-06-14",
        usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
      },
    ],
  },
];

describe("getScreentimeAlertList", () => {
  test("It returns name of the user from an array whose screen time is greated than 100 on provided date", () => {
    const result = getScreentimeAlertList(users, "2019-05-04");
    const expected = ["beth_1234"];
    expect(result).toEqual(expected);
  });
  test("It returns name of the user from an array whose screen time is greated than 100 on provided date", () => {
    const result = getScreentimeAlertList(users, "2020-05-30");
    const expected = ["Jane_Trimmer"];
    expect(result).toEqual(expected);
  });
});

describe("hexToRGB", () => {
  test("It throws an error when nothing is passed to function", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("str is required");
  });
  test("returns the sum of numbers which is passed in", () => {
    const result = hexToRGB("#FF1133");
    const expected = "rgb(255,17,51)";
    expect(result).toBe(expected);
  });
});

describe("findWinner", () => {
  test("return null if no one wins", () => {
    expect(
      findWinner([
        ["O", "X", "X"],
        ["X", "O", "O"],
        ["O", "O", "X"],
      ])
    ).toBe(null);
  });
  test("return X if player X has won", () => {
    expect(
      findWinner([
        ["X", "O", null],
        ["X", null, "O"],
        ["X", null, "O"],
      ])
    ).toEqual("X");
  });
  test("return O if player O has won", () => {
    expect(
      findWinner([
        ["O", "X", null],
        ["O", null, "X"],
        ["O", null, "X"],
      ])
    ).toEqual("O");
  });
});
