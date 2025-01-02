function solution(numbers, direction) {
  var answer = [];
  if(direction == "right"){
      numbers.unshift(numbers[numbers.length-1])
      numbers.pop();
  }else{
      numbers.push(numbers[0])
      numbers.shift();
  }
  answer = numbers
  return answer;
}

function solution(numbers, direction) {
  if(direction === "right") {
      return [numbers[numbers.length-1], ...numbers.slice(0, -1)];
  }
  return [...numbers.slice(1), numbers[0]];
}
