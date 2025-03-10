const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().split(" ").map(Number);
const [N, M] = input;

let selected = [];
let answer = "";

function backtrack(start, depth) {
  if (depth === M) {
    answer += selected.join(" ") + "\n";
    return;
  }

  for (let i = start; i <= N; i++) {
    // `start`부터 탐색하여 오름차순 조합 유지
    selected.push(i);
    backtrack(i + 1, depth + 1); // 다음 탐색은 `i + 1`부터
    selected.pop(); // 백트래킹 (되돌아가기)
  }
}

backtrack(1, 0);
console.log(answer);
