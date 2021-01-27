function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squareNumbersArray = nums.map((num) => num * num);
  return squareNumbersArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let camelCase = words[0]; //keeps first word value as is
  for (var i = 1, len = words.length; i < len; i++) {
    var capitalized = words[i].substr(0, 1).toUpperCase() + words[i].slice(1);
    camelCase += capitalized;
  }
  return camelCase;
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let subjectArray = people.map((person) => person.subjects);
  return subjectArray.flat().length;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  let result;
  menu.map((element) => {
    if (result != true) {
      result = element.ingredients.includes(ingredient);
    }
  });
  return result;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  const commonValuesArray = arr1.filter((num) => arr2.includes(num));
  return [...new Set(commonValuesArray)].sort((a, b) => a - b);
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers,
};
