//TODO: 풀어야됨 모르겠음
function solution(numbers) {
  let result = numbers
    .map((num) => num.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");
  return result[0] === "0" ? "0" : result;
}

console.log(solution([6, 10, 2]));
