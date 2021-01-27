function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  let squareNumbersArray = nums.map((num) => num * num);
  return squareNumbersArray;
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let camelString;
  if (words.length < 2) {
    return words.toString();
  } else {
    var removedFirstElementArray = words.slice(1, 2);

    for (let i = 0; i < removedFirstElementArray.length; i++) {
      camelString =
        removedFirstElementArray[i].toUpperCase() +
        removedFirstElementArray[i].substring(1);
    }
    return `${words[0]}${camelString}`;
  }
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
