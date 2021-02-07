function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  let smallNumberArray = nums.filter((num) => num < 1);
  return smallNumberArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");
  let namesBeginWithChar = names.filter((name) => name.charAt(0) === char);
  return namesBeginWithChar;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");
  let verbArray = words.filter((word) => word.startsWith("to "));
  return verbArray;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");
  let numsArray = nums.filter((num) => Number.isInteger(num));
  return numsArray;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  let citiesArray = [];
  users.forEach((user) => citiesArray.push(user.data.city.displayName));
  return citiesArray;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  let squaredNumbers = nums.map((num) => Math.sqrt(num));
  let squaredRoundedNumbers = squaredNumbers.map(
    (num) => Math.round(num * 100) / 100
  );
  return squaredRoundedNumbers;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  let sentenceContainingStr = sentences.filter((sentence) =>
    sentence.toLowerCase().includes(str.toLowerCase())
  );
  return sentenceContainingStr;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  let maxmumInRow = triangles.map(function (row) {
    return Math.max.apply(Math, row);
  });
  return [...maxmumInRow];
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides,
};
