function solution(dartResult) {
  var answer = 0;
  const dartResultArray = dartResult.match(/\d+|[SDT]|\#|\*/g);
  const stack = [];
  let value;
  
  for (str of dartResultArray) {
    if (str === "S") {
      value = stack.pop();
      stack.push(value);
    } else if (str === "D") {
      value = stack.pop();
      stack.push(value * value);
    } else if (str === "T") {
      value = stack.pop();
      stack.push(value * value * value);
    } else if (str === "*") {
      let firtPopValue = stack.pop();
      firtPopValue *= 2;
      let secondPopValue = stack.pop();
      if (secondPopValue === undefined) {
        stack.push(firtPopValue);
      } else {
        secondPopValue *= 2;
        stack.push(secondPopValue);
        stack.push(firtPopValue);
      }
    } else if (str === "#") {
      value = stack.pop();
      stack.push(value * -1);
    } else {
      stack.push(Number(str));
    }
  }

  for (element of stack) {
    answer += element;
  }

  return answer;
}
