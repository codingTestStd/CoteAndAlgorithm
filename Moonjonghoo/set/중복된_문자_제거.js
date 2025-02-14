function solution(my_string) {
  var answer = "";
  let set = [];
  for (let i = 0; i < my_string.length; i++) {
    if (!set.includes(my_string[i])) {
      set.push(my_string[i]);
      answer += my_string[i];
    }
  }
  return answer;
}

console.log(solution("people")); // 기대값: "peol"
console.log(solution("We are the world")); // 기대값: "We arthwold"
