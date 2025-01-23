// https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let stack = [];
  let result = 0;
  for (let i = 0; i < ingredient.length; i++) {
    let item = ingredient[i];
    stack.push(item);
    if (stack.length >= 4) {
      let last4 = stack.slice(-4);
      if (last4.join("") === "1231") {
        result++;
        stack.splice(-4);
      }
    }
  }
  return result;
}
