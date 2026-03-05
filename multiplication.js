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
