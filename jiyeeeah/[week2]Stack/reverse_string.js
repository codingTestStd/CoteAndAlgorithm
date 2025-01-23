function solution(my_string) {
  var answer = "";
  const str = my_string.split("");
  for (let i = 0; i < my_string.length; i++) {
    answer += str.pop();
  }
  return answer;
}
