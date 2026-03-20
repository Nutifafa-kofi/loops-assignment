// function to count vowels in a string
function countVowels(str) {
  let count = 0; // variable to add vowels
  let vowels = ["a", "e", "i", "u", "o"];
  for (let char of str) {
    if (vowels.includes(char.toLowerCase())) {
      count++; // add the number of vowels
    }
  }
  return count;
}

console.log(countVowels("hello"));
console.log(countVowels("JavaScript"));
console.log(countVowels("aeiouAEIOU"));
console.log(countVowels("xyz"));

// my output test code
console.log(countVowels("ansAh"));
console.log(countVowels("MOngo DB"));
console.log(countVowels("react"));
console.log(countVowels("node"));

