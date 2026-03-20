// function to return the reverse of a string
function reverseString(str) {
  let reversed = ""; // variable to store the reversed of the string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // add reversed
  }
  return reversed;
}

console.log(reverseString("hello"));
console.log(reverseString("JavaScript"));
console.log(reverseString("12345"));

// // my output test code
console.log(reverseString("kofi"));
console.log(reverseString("tailwind"));
console.log(reverseString("man"));