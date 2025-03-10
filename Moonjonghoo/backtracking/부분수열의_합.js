const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, S] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);

let count = 0;

function backtrack(index, sum) {
  if (index === N) {
    return;
  }

  sum += numbers[index];

  if (sum === S) {
    count++;
  }

  backtrack(index + 1, sum);

  backtrack(index + 1, sum - numbers[index]);
}

backtrack(0, 0);

console.log(count);
