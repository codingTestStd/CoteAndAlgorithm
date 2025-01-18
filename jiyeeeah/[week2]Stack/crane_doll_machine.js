function solution(board, moves) {
  let answer = 0;
  const N = board.length;

  const stack = [];
  for (const move of moves) {
    for (let i = 0; i < N; i++) {
      if (board[i][move - 1] === 0) continue;

      const item = board[i][move - 1];
      if (stack.length > 0 && stack[stack.length - 1] === item) {
        stack.pop();
        answer += 2;
      } else {
        stack.push(item);
      }
      board[i][move - 1] = 0;
      break;
    }
  }
  return answer;
}
