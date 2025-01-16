function solution(s) {
  var answer = 0;
  let Z = 0;
  const controlArray = s.split(" ");
  for (let i = 0; i < controlArray.length; i++) {
    if (controlArray[i] == "Z") {
      answer -= Z;
      continue;
    }
    answer += Number(controlArray[i]);
    Z = Number(controlArray[i]);
  }

  return answer;
}
