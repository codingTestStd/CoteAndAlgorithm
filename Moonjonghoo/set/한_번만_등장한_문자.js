// function solution(s) {
//   var answer = "";
//   let arr = [];
//   for (let i = 0; i < s.length; i++) {
//     if (!arr.includes(s[i])) {
//       arr.push(s[i]);
//     } else {
//       arr = arr.filter((e) => e !== s[i]);
//     }
//   }

//   answer = arr.sort().join("");
//   return answer;
// }

// console.log(solution("abcabcadc")); // 기대값: "d"
// console.log(solution("abdc")); // 기대값: "abdc"
// console.log(solution("hello")); // 기대값: "eho"
// console.log(solution("hlelo"));

function solution(s) {
  var answer = "";
  let arr = [];
  let hash = new Map();
  for (let i = 0; i < s.length; i++) {
    if (!hash.get(s[i])) {
      hash.set(s[i], 1);
    } else {
      hash.set(s[i], hash.get(s[i]) + 1);
    }
  }
  for (let [key, value] of hash) {
    if (value === 1) {
      arr.push(key);
    }
  }
  answer = arr.sort().join("");
  if (arr.length === 0) return "";
  return answer;
}

console.log(solution("abcabcadc")); // 기대값: "d"
console.log(solution("abdc")); // 기대값: "abdc"
console.log(solution("hello")); // 기대값: "eho"
