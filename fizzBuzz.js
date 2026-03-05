// fizzBuzz function
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



