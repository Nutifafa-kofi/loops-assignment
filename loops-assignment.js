// function to calculate sum of numbers from 1 to n (inclusive)
function sumNumbers(n) {
  let sum = 0; // declared a sum variable
  // loop to iterate through the numbers to calculate
  for (let i = 1; i <= n; i++) {
    sum += i; // add sum and each numbers together
  }
  return sum;
}

// console.log(sumNumbers(5));
// console.log(sumNumbers(10));
// console.log(sumNumbers(100));

// // my output test code
// console.log(sumNumbers(2));
// console.log(sumNumbers(1000));
// console.log(sumNumbers(0));

// function to print multiplication table
function multiplicationTable(num, limit) {
  let result = []; // variable to store the multiplication table
  // used a nested loop to create multiplication table
  for (let index = num; index <= num; index++) {
    for (let j = 1; j <= limit; j++) {
      result.push(`${index} x ${j} = ${index * j}`); //pushed output into the result varible
    }
  }
  return result;
}
// console.log(multiplicationTable(2, 10));

// function to return the reverse of a string
function reverseString(str) {
  let reversed = ""; // variable to store the reversed of the string
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i]; // add reversed
  }
  return reversed;
}

// console.log(reverseString("hello"));
// console.log(reverseString("JavaScript"));
// console.log(reverseString("12345"));

// // my output test code
// console.log(reverseString("kofi"));
// console.log(reverseString("tailwind"));
// console.log(reverseString("man"));

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

// console.log(countVowels("hello"));
// console.log(countVowels("JavaScript"));
// console.log(countVowels("aeiouAEIOU"));
// console.log(countVowels("xyz"));

// my output test code
// console.log(countVowels("ansAh"));
// console.log(countVowels("MOngo DB"));
// console.log(countVowels("react"));
// console.log(countVowels("node"));

// FizzBuzz function
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    // if number is divisible by both 3 and 5 log FizzBuzz
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // if number is divsible by 3, log Fizz
    else if (i % 3 === 0) {
      console.log("Fizz");
    }

    // if number is divisible by 5, log Buzz
    else if (i % 5 === 0) {
      console.log("Buzz");
    }

    // otherwise log the number
    else {
      console.log(i);
    }
  }
}
fizzBuzz(15);
