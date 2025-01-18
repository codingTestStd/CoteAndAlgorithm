function solution(order) {
  const stack = [];
  let idx = 0; // 처리해야되는 order의 인덱스
  let cnt = 0;

  for (let currentBox = 1; currentBox <= order.length; currentBox++) {
    if (currentBox === order[idx]) {
      // 처리가능하면 처리하고, 스택도 비울만큼 비우기
      cnt++;
      idx++;
      while (stack.length > 0 && stack.at(-1) === order[idx]) {
        stack.pop();
        cnt++;
        idx++;
      }
    } else {
      // 처리못하면 스택에 보관
      stack.push(currentBox);
    }
  }

  while (stack.length > 0 && stack.at(-1) === order[idx]) {
    // 스택에 남은 것들 처리하기
    stack.pop();
    cnt++;
    idx++;
  }

  return cnt;
}