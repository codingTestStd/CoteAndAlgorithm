function solution(my_string) {
  var answer = "";
  const string = [...my_string];

  for (let i = 0; i < my_string.length; i++) {
    answer += string.pop();
  }

  return answer;
}
