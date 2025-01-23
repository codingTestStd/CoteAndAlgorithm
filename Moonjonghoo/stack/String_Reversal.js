function solution(my_string) {
  let arr = [];
  for (let i = 0; i < my_string.length; i++) {
    arr.push(my_string[i]);
  }
  let newarr = arr.sort(function (a, b) {
    return a - b;
  });
  let answer = newarr.toString();
  return answer;
}
