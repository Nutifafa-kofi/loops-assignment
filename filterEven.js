// function to filter even numbers

function filterEvenNumbers(arr) {
  let evenNumbers = []; // variable to store even numbers

//   loop to iterate through array
  for (let num of arr) {
    if (num % 2 === 0) {
      evenNumbers.push(num); 
    }
  }
  console.log(evenNumbers);
}

filterEvenNumbers([1, 2, 3, 4, 5, 6, 8]);
filterEvenNumbers([10, 15, 20, 25]);
filterEvenNumbers([1, 3, 5, 7]);
