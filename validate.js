function validatePositive(numbers) {
  let i = 0;
  let positive = [];

  if(numbers[i] >= 0)

  do {
    positive.push(numbers[i])
    i++;
  } while (numbers[i] >= 0);
  return positive;
}

console.log(validatePositive([2, 3, 45, -6, 7, 8]));
console.log(validatePositive([-1, 2, 3]));
