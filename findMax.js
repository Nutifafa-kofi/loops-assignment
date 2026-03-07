// function to find the maximum number in an array
function findMax(arr) {
  let max = arr[0];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([1, 5, 3, 9, 2]));
console.log(findMax([10, 20, 30, 25]));
console.log(findMax([-5, -2, -10, -1]));
