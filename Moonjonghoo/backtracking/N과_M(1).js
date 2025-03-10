const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split(" ").map(Number);
const [N, M] = input;
let arr = [];
for (let i = 1; i <= N; i++) arr.push(i);
let visited = new Array(N).fill(false);
let selected = [];

let answer = "";
function backtrack(arr, depth) {
  if (depth === M) {
    let result = [];
    for (let i of selected) result.push(arr[i]);
    for (let x of result) answer += x + " ";
    answer += "\n";
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    if (visited[i]) continue;
    selected.push(i);
    visited[i] = true;
    backtrack(arr, depth + 1);
    selected.pop();
    visited[i] = false;
  }
}
backtrack(arr, 0);

console.log(answer);
