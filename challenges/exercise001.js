function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  else {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
  else {
    return `${firstName.charAt(0)}.${lastName.charAt(0)}`;
  }
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
  return vatRate > 0
    ? Math.round(originalPrice * (vatRate / 100 + 1) * 100) / 100
    : originalPrice;
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
  let salePrice =
    reduction > 0
      ? originalPrice - (reduction / 100) * originalPrice
      : originalPrice;
  return Math.round(salePrice * 100) / 100;
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  var position;
  var length;

  if (str.length % 2 == 1) {
    position = str.length / 2;
    length = 1;
  } else {
    position = str.length / 2 - 1;
    length = 2;
  }

  return str.substring(position, position + length);
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  return joinArray;
  // Add your code here!
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let reverseArray = words.map((word) => word.split("").reverse().join(""));
  return reverseArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let linuxUsers = users.filter((user) => user.type == "Linux");
  return linuxUsers.length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  let totalScore = scores.reduce((acc, curr) => acc + curr, 0);
  let noOfScores = scores.length;
  let result = totalScore / noOfScores;
  return Math.round(result * 100) / 100;
}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (n % 3 === 0 && n % 5 === 0) {
    return "fizzbuzz";
  } else if (n % 3 === 0) {
    return "fizz";
  } else if (n % 5 === 0) {
    return "buzz";
  } else {
    return n;
  }
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz,
};
