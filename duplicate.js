// function to remove duplicate

function removeDuplicates(arr) {
  let removed = [];
  for (let i = 0; i < arr.length; i++) {
    if (!removed.includes(arr[i])) {
      removed.push(arr[i]);
    }
  }

  return removed;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
