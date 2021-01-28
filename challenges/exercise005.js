const findNextNumber = (nums, n) => {
  //let answer;
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let indexNumber = nums.indexOf(n);
  if (indexNumber + 1 == nums.length || indexNumber == -1) {
    return null;
  }
  return nums[indexNumber + 1];
};

const count1sand0s = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let zerosCount = 0;
  let onesCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == 0) {
      zerosCount++;
    }
    if (str[i] == 1) {
      onesCount++;
    }
  }
  return {
    1: onesCount,
    0: zerosCount,
  };
};

const reverseNumber = (n) => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  return parseInt(n.toString().split("").reverse().join(""));
};
const sumArrays = (arrs) => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!

  var newArr = [];

  arrs.forEach(function (item) {
    item = item.reduce(function (a, b) {
      return a + b;
    });
    newArr.push([item]);
  });
  return newArr.flat().reduce((a, b) => a + b, 0);
};

const arrShift = (arr) => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  if (arr.length < 2) {
    return arr;
  }
  function swap(inputArray) {
    [inputArray[0], inputArray[inputArray.length - 1]] = [
      inputArray[inputArray.length - 1],
      inputArray[0],
    ];
    return inputArray;
  }
  let answerArray = swap(arr);
  return answerArray;
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let valuesArr = Object.values(haystack);

  let result = valuesArr.some((key) =>
    key.toString().toLowerCase().includes(searchTerm.toLowerCase())
  );
  return result;
};

const getWordFrequencies = (str) => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
  let count = {};
  let stringArray = str.split(" ");
  let caseInsenstiveArray = stringArray.map((string) =>
    string.toLowerCase().replace(/[^\w\s]|_/g, "")
  );
  caseInsenstiveArray.forEach(function (i) {
    count[i] = (count[i] || 0) + 1;
  });
  return count;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
};
