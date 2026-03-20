// function to print count down using while loop

function countDown(start) {
  let num = start;
  while (num > 0) {
    console.log(num);

    num--;
    console.log("Blastoff!");
  }
}
countDown(5);
